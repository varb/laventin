import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

import { TrackForm } from "features/track-form";
import { TrackFormData } from "entities/track";
import { firebaseDB } from "shared/api/firebase";
import { RouteNames } from "shared/model/route-names";

type AddTrackFormProps = {};

export default function AddTrackForm({}: AddTrackFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async ({ id, ...data }: TrackFormData) => {
    console.log("onSubmit", data);
    setIsLoading(true);
    const trackRef = doc(firebaseDB, "tracks", id);
    await setDoc(trackRef, data);

    setIsLoading(false);
    navigate(`/${RouteNames.tracks}/${id}`, { replace: true });
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return <TrackForm onSubmit={onSubmit} />;
}
