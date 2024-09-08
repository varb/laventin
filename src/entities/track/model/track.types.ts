import { Timestamp } from "firebase/firestore";

export interface TrackItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  active: boolean;
  coverUrl: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  releaseDate?: string;
  releaseType: "single" | "album" | "extendedPlay";
  links?: Array<{ resourceId: string; url: string }>;
  description?: string;
}
