import React from 'react';
import Icon from '../Icon';
import { Root, Link } from './styled';

const list = [
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/lavent.in/',
    iconName: 'instagram',
  }, {
    title: 'VK',
    url: 'https://vk.com/laventinmusic',
    iconName: 'vk',
  }, {
    title: 'Telegram',
    url: 'https://t.me/laventinmusic',
    iconName: 'telegram',
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
