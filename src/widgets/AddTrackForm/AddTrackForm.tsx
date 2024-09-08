import { useState } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";

import { TrackForm, TrackFormData } from "features/track-form";
import { TrackItem } from "entities/track";
import { firebaseDB } from "shared/api/firebase";

type AddTrackFormProps = {
  onSubmit?: (trackId: string) => void;
};

const createTrack = async (data: TrackItem) => {
  const trackRef = doc(firebaseDB, "tracks", data.id);
  return await setDoc(trackRef, data);
};

export default function AddTrackForm({ onSubmit }: AddTrackFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFormSubmit = async (formData: TrackFormData) => {
    setIsLoading(true);
    const id = formData.slug;

    await createTrack({
      id,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      ...formData,
    });

    setIsLoading(false);

    if (onSubmit) {
      onSubmit(id);
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return <TrackForm onSubmit={onFormSubmit} submitLabel="Save new track" />;
}
