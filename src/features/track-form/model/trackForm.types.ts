import { TrackItem } from "entities/track";

export interface TrackFormData
  extends Pick<
    TrackItem,
    | "title"
    | "slug"
    | "artist"
    | "coverUrl"
    | "active"
    | "description"
    | "links"
    | "releaseType"
  > {
  releaseDate: string;
}
