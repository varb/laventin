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
  // links?: Partial<Record<MusicStoresEnum, string>>;
  // links?: Array<{ [key in MusicStoresEnum]: string }>;
  links?: Array<{ resourceId: string; url: string }>;
  description?: string;
}

const links = [
  {
    resourceId: "apple",
    url: "https://music.apple.com/ru/album/lovely/1500734346?i=1500734349",
  },
];
