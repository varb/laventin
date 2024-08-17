import {
  SoundcloudLogo,
  InstagramLogo,
  TelegramLogo,
} from "@phosphor-icons/react";

export interface SocialLink {
  id: string;
  url: string;
  icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    id: "SoundCloud",
    url: "https://soundcloud.com/laventin",
    icon: <SoundcloudLogo />,
  },
  {
    id: "Instagram",
    url: "https://www.instagram.com/lavent.in/",
    icon: <InstagramLogo />,
  },
  {
    id: "Telegram",
    url: "https://t.me/laventinmusic",
    icon: <TelegramLogo />,
  },
  // {
  //   id: "VK",
  //   url: "https://vk.com/laventinmusic",
  //   icon: "vk",
  // },
];
