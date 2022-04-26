import { MusicStoresEnum, MusicStores, TrackItem } from 'types/tracklist';

export const musicStores: MusicStores = {
  [MusicStoresEnum.apple]: {
    id: MusicStoresEnum.apple,
    title: 'Apple Music',
    icon: 'appleMusic',
  },
  [MusicStoresEnum.spotify]: {
    id: MusicStoresEnum.spotify,
    title: 'Spotify',
    icon: 'spotify',
  },
  [MusicStoresEnum.vk]: {
    id: MusicStoresEnum.vk,
    title: 'VK',
    icon: 'vk',
  },
  [MusicStoresEnum.boom]: {
    id: MusicStoresEnum.boom,
    title: 'Boom',
    icon: 'boomMusic',
  },
  [MusicStoresEnum.soundcloud]: {
    id: MusicStoresEnum.soundcloud,
    title: 'SoundCloud',
    icon: 'soundCloud',
  },
  [MusicStoresEnum.yandex]: {
    id: MusicStoresEnum.yandex,
    title: 'Yandex.Music',
    icon: 'yandexMusic',
  },
  [MusicStoresEnum.itunes]: {
    id: MusicStoresEnum.itunes,
    title: 'iTunes',
    icon: 'iTunes',
  },
};

export const trackList: TrackItem[] = [
  {
    id: 'lovely',
    active: true,
    name: 'Lovely',
    artist: 'Laventin & Hissumi',
    links: {
      soundcloud: 'https://soundcloud.com/laventin/lovely?si=498cb57e15aa4cfd92563d1d2a223345&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: 'night-lights',
    active: true,
    name: 'Night Lights',
    artist: 'Laventin',
    links: {
      apple: 'https://music.apple.com/ru/album/night-lights/1500734346?i=1500734349',
      spotify: 'https://open.spotify.com/album/7vpaMsBq5V1dEV1TF9gLrF',
      vk: 'https://vk.com/music/album/-2000817338_6817338_8e3d1bd9d7ab920c23',
      soundcloud: 'https://soundcloud.com/laventin/night-lights',
      boom: 'https://vk.cc/apCABH',
      yandex: 'https://music.yandex.ru/album/10024559/track/63165652',
      itunes: 'https://music.apple.com/ru/album/night-lights-single/1500734346',
    },
  },
  {
    id: 'rising',
    active: true,
    name: 'Rising',
    artist: 'Varb',
    links: {
      soundcloud: 'https://soundcloud.com/laventin/rising',
    },
  },
  {
    id: 'snow',
    active: true,
    name: 'Snow',
    artist: 'Varb',
    links: {
      soundcloud: 'https://soundcloud.com/laventin/snow',
    },
  },
];
