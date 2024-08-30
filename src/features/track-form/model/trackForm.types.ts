import { TrackItem } from "entities/track";

export type TrackFormData = Pick<
  TrackItem,
  | "title"
  | "slug"
  | "artist"
  | "coverUrl"
  | "active"
  | "description"
  | "links"
  | "releaseDate"
>;
