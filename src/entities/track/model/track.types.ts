import { MusicStoresEnum } from "entities/streaming-link";

export interface TrackItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  active: boolean;
  coverUrl: string;
  createdAt: Date;
  updatedAt: Date;
  releaseDate?: string;
  releaseType: "single" | "album" | "extendedPlay";
  links?: Array<{ resourceId: string; url: string }>;
  description?: string;
}
