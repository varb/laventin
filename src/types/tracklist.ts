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
  id: string,
  title: string,
  icon: string,
}

export type MusicStores = Record<MusicStoresEnum, MusicStoreInfo>

export interface TrackItem {
  id: string,
  active: boolean,
  name: string,
  artist: string,
  links: Partial<Record<MusicStoresEnum, string>>
}
