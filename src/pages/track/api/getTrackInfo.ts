import { doc, getDoc } from "firebase/firestore";

import { TrackItem } from "entities/track";
import { firebaseDB } from "shared/api";

export const getTrackInfo = async (trackId?: string) => {
  if (!trackId) return null;
  let trackInfo: TrackItem | null = null;

  try {
    const docRef = doc(firebaseDB, "tracks", trackId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      trackInfo = docSnapshot.data() as TrackItem;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }

  return trackInfo;
};
