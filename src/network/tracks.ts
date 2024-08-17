import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit as fbLimit,
} from "firebase/firestore";
import { firebaseDB } from "../shared/api/firebase";
import { TrackItem } from "modules/tracks/model/tracklist";

export const getTracksList = async (props?: {
  isPublic?: boolean;
  limit?: number;
}) => {
  const list: TrackItem[] = [];
  const { isPublic, limit } = props || {};

  try {
    const q = query(
      collection(firebaseDB, "tracks"),
      orderBy("title", "desc"),
      ...(isPublic ? [where("active", "==", true)] : []),
      ...(limit ? [fbLimit(limit)] : [])
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...(doc.data() as Omit<TrackItem, "id">),
      });
    });
  } catch (error) {
    console.log(error);
  }

  return list;
};
