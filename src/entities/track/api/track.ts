import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit as fbLimit,
} from "firebase/firestore";
import { firebaseDB } from "shared/api/firebase";
import { TrackItem } from "../model/track.types";

type TrackItemKey = keyof TrackItem;

/**
 * Retrieves a list of tracks from the Firestore database.
 *
 * @param {object} props - Optional properties to filter the track list.
 * @param {boolean} props.isPublic - Whether to only include public tracks.
 * @param {number} props.limit - The maximum number of tracks to return.
 *
 * @return {TrackItem[]} An array of track items.
 */
export const getTrackList = async (props?: {
  isPublic?: boolean;
  limit?: number;
}) => {
  const list: TrackItem[] = [];
  const { isPublic, limit } = props || {};

  try {
    const q = query(
      collection(firebaseDB, "tracks"),
      orderBy("title" as TrackItemKey, "desc"),
      ...(isPublic ? [where("active" as TrackItemKey, "==", true)] : []),
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
