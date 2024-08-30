import {
  AppleLogo,
  MusicNotes,
  MusicNotesPlus,
  SoundcloudLogo,
  SpotifyLogo,
} from "@phosphor-icons/react";
import { MusicStoresEnum, MusicStores } from "./musicStores.types";

export const musicStores: MusicStores = {
  [MusicStoresEnum.apple]: {
    id: MusicStoresEnum.apple,
    title: "Apple Music",
    icon: <AppleLogo />,
  },
  [MusicStoresEnum.spotify]: {
    id: MusicStoresEnum.spotify,
    title: "Spotify",
    icon: <SpotifyLogo />,
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
    icon: <SoundcloudLogo />,
  },
  [MusicStoresEnum.yandex]: {
    id: MusicStoresEnum.yandex,
    title: "Yandex.Music",
    icon: "yandexMusic",
  },
  [MusicStoresEnum.itunes]: {
    id: MusicStoresEnum.itunes,
    title: "iTunes",
    icon: <MusicNotes />,
  },
};

export function extractDomains(url: string): string[] {
  try {
    const parsedUrl = new URL(url);
    const domains = parsedUrl.hostname.split(".").filter(Boolean);

    return domains.slice(0, -1);
  } catch (error) {
    // console.error("Invalid URL:", error);
    return [];
  }
}

export function findMusicStoreKey(
  domains: string[],
  stores: MusicStores
): string {
  for (const domain of domains) {
    if (domain in stores) {
      return domain;
    }
  }

  return "unknown";
}

export const getResourceIdFromLink = (url: string): string => {
  const domains = extractDomains(url);
  return findMusicStoreKey(domains, musicStores);
};

export const getStreamingLinkIcon = (id?: string | null) => {
  const resourceId = musicStores[id as MusicStoresEnum];

  if (resourceId) {
    return resourceId.icon;
  } else if (id === "unknown") {
    return <MusicNotes />;
  } else {
    return <MusicNotesPlus />;
  }
};
