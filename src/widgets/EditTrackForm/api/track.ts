import { deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { TrackItem } from "entities/track";
import { firebaseDB } from "shared/api";

export const updateTrack = async (
  data: Partial<Omit<TrackItem, "createdAt" | "id" | "updatedAt">> &
    Pick<TrackItem, "id">
) => {
  try {
    const trackRef = doc(firebaseDB, "tracks", data.id);
    return await updateDoc(trackRef, { updatedAt: Timestamp.now(), ...data });
  } catch (e) {
    throw e;
  }
};

export const removeTrack = async (trackId: string) => {
  try {
    const trackRef = doc(firebaseDB, "tracks", trackId);
    return await deleteDoc(trackRef);
  } catch (e) {
    throw e;
  }
};
