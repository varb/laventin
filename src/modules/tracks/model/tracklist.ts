export enum MusicStoresEnum {
  apple = "apple",
  spotify = "spotify",
  vk = "vk",
  boom = "boom",
  soundcloud = "soundcloud",
  yandex = "yandex",
  itunes = "itunes",
}

export type MusicStoreInfo = {
  id: string;
  title: string;
  icon: string;
};

export type MusicStores = Record<MusicStoresEnum, MusicStoreInfo>;

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
