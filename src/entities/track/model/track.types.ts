import { MusicStoresEnum } from "entities/streaming-link";

export interface TrackItem {
  id: string;
  slug?: string;
  title: string;
  artist: string;
  active: boolean;
  links: Partial<Record<MusicStoresEnum, string>>;
  coverUrl: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  releaseDate?: Date;
}

export type TrackFormData = TrackItem;
