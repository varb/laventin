import { MusicStoresEnum, MusicStores } from "./musicStores.types";

export const musicStores: MusicStores = {
  [MusicStoresEnum.apple]: {
    id: MusicStoresEnum.apple,
    title: "Apple Music",
    icon: "appleMusic",
  },
  [MusicStoresEnum.spotify]: {
    id: MusicStoresEnum.spotify,
    title: "Spotify",
    icon: "spotify",
  },
  [MusicStoresEnum.vk]: {
    id: MusicStoresEnum.vk,
    title: "VK",
    icon: "vk",
  },
  [MusicStoresEnum.boom]: {
    id: MusicStoresEnum.boom,
    title: "Boom",
    icon: "boomMusic",
  },
  [MusicStoresEnum.soundcloud]: {
    id: MusicStoresEnum.soundcloud,
    title: "SoundCloud",
    icon: "soundCloud",
  },
  [MusicStoresEnum.yandex]: {
    id: MusicStoresEnum.yandex,
    title: "Yandex.Music",
    icon: "yandexMusic",
  },
  [MusicStoresEnum.itunes]: {
    id: MusicStoresEnum.itunes,
    title: "iTunes",
    icon: "iTunes",
  },
};
