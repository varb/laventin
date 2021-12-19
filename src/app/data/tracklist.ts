interface IMusicStores {
  [key: string]: {
    id: string,
    title: string,
    icon: string,
  }
}

export const musicStores: IMusicStores = {
  apple: {
    id: 'apple',
    title: 'Apple Music',
    icon: 'appleMusic',
  },
  spotify: {
    id: 'spotify',
    title: 'Spotify',
    icon: 'spotify',
  },
  vk: {
    id: 'vk',
    title: 'VK',
    icon: 'vk',
  },
  boom: {
    id: 'boom',
    title: 'Boom',
    icon: 'boomMusic',
  },
  soundcloud: {
    id: 'sc',
    title: 'SoundCloud',
    icon: 'soundCloud',
  },
  yandex: {
    id: 'yandex',
    title: 'Yandex.Music',
    icon: 'yandexMusic',
  },
  itunes: {
    id: 'itunes',
    title: 'iTunes',
    icon: 'iTunes',
  },
};

type MusicStores = typeof musicStores;

interface ITrackItem {
  id: string,
  active: boolean,
  name: string,
  artist: string,
  links: {
    [key: keyof typeof musicStores]: string
  }
}

export const trackList: ITrackItem[] = [
  {
    id: 'lovely',
    active: true,
    name: 'Lovely',
    artist: 'Laventin & Hissumi',
    links: {
      soundcloud: 'https://soundcloud.com/laventin/lovely/',
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
