import { useMemo, useState } from "react";
import { FormState } from "react-hook-form";
import { doc, Timestamp, updateDoc } from "firebase/firestore";

import { TrackForm, TrackFormData } from "features/track-form";
import { TrackItem } from "entities/track";
import { firebaseDB } from "shared/api/firebase";
import { omitKeys } from "shared/lib/omitKeys";
import { filterDirtyFields } from "shared/lib/filterDirtyFields";

const updateTrack = async (
  data: Partial<Omit<TrackItem, "createdAt" | "id">> & Pick<TrackItem, "id">
) => {
  const trackRef = doc(firebaseDB, "tracks", data.id);
  return await updateDoc(trackRef, data);
};

type EditTrackFormProps = {
  onSubmit?: (trackId: string) => void;
  trackInfo: TrackItem;
};

export default function EditTrackForm({
  onSubmit,
  trackInfo,
}: EditTrackFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const trackFormData: TrackFormData | null = useMemo(
    () =>
      trackInfo ? omitKeys(trackInfo, ["createdAt", "updatedAt", "id"]) : null,
    [trackInfo]
  );

  const onFormSubmit = async (
    formData: TrackFormData,
    dirtyFields: FormState<TrackFormData>["dirtyFields"]
  ) => {
    setIsLoading(true);

    await updateTrack({
      id: trackInfo.id,
      updatedAt: Timestamp.now(),
      ...filterDirtyFields(formData, dirtyFields),
    });

    setIsLoading(false);

    if (onSubmit) {
      onSubmit(formData.slug);
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return <TrackForm trackItem={trackFormData} onSubmit={onFormSubmit} />;
}
