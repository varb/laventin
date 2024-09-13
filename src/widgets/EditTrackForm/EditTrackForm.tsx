import { useMemo, useState } from "react";
import { FormState } from "react-hook-form";
import { Trash } from "@phosphor-icons/react";

import { TrackForm, TrackFormData } from "features/track-form";
import { TrackItem } from "entities/track";
import { omitKeys } from "shared/lib/omitKeys";
import { filterDirtyFields } from "shared/lib/filterDirtyFields";
import Button from "shared/ui/Button";

import { useRemoveConfirmModal } from "./RemoveConfirmModal";
import { updateTrack } from "./api/track";
import { formatDateToString, formatStringToFBTimestamp } from "shared/lib/date";

type EditTrackFormProps = {
  onSubmit?: (trackId: string) => void;
  trackInfo: TrackItem;
};

export default function EditTrackForm({
  onSubmit,
  trackInfo,
}: EditTrackFormProps) {
  const { openModal } = useRemoveConfirmModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(trackInfo);

  const trackFormData: TrackFormData | null = useMemo(
    () =>
      trackInfo
        ? {
            ...omitKeys(trackInfo, [
              "createdAt",
              "updatedAt",
              "id",
              "releaseDate",
            ]),
            releaseDate: formatDateToString(trackInfo.releaseDate?.toDate!()),
          }
        : null,
    [trackInfo]
  );

  const onFormSubmit = async (
    formData: TrackFormData,
    dirtyFields: FormState<TrackFormData>["dirtyFields"]
  ) => {
    setIsLoading(true);

    const { releaseDate, ...filteredFields } = filterDirtyFields(
      formData,
      dirtyFields
    );

    await updateTrack({
      id: trackInfo.id,
      ...filteredFields,
      ...(releaseDate && {
        releaseDate: formatStringToFBTimestamp(releaseDate),
      }),
    });

    setIsLoading(false);

    if (onSubmit) {
      onSubmit(formData.slug);
    }
  };

  const onRemoveClick = () => {
    openModal({
      id: trackInfo.id,
    });
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <TrackForm trackItem={trackFormData} onSubmit={onFormSubmit} />
      <Button
        iconLeft={<Trash />}
        variant="error"
        width="full"
        onClick={onRemoveClick}
      >
        Remove
      </Button>
    </>
  );
}
