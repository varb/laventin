import { Timestamp } from "firebase/firestore";

export enum ReleaseType {
  single = "Single",
  album = "Album",
  extendedPlay = "EP",
}

export interface TrackItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  active: boolean;
  coverUrl: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  releaseDate?: Timestamp;
  releaseType: keyof typeof ReleaseType;
  links?: Array<{ resourceId: string; url: string }>;
  description?: string;
}
