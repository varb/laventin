import React from 'react';
import Icon from '../Icon';
import { Root, Link } from './styled';

const list = [
  {
    title: 'SoundCloud',
    url: 'https://soundcloud.com/laventin',
    iconName: 'soundCloud',
  }, {
    title: 'Instagram',
    url: 'https://www.instagram.com/lavent.in/',
    iconName: 'instagram',
  }, {
    title: 'Telegram',
    url: 'https://t.me/laventinmusic',
    iconName: 'telegram',
  }, {
    title: 'VK',
    url: 'https://vk.com/laventinmusic',
    iconName: 'vk',
  },
];

export default function SocialLinks() {
  return (
    <Root>
      {list.map((link, index) => (
        <Link href={link.url} target="_blank">
          <Icon name={link.iconName} />
        </Link>
      ))}
    </Root>
  )
}
