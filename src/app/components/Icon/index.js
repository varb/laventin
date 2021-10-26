import React, { PureComponent } from 'react';
import { Root } from './styled';

import vk from './icons/VkIcon';
import instagram from './icons/InstagramIcon';
import telegram from './icons/TelegramIcon';
import appleMusic from './icons/AppleMusicIcon';
import boomMusic from './icons/BoomMusicIcon';
import iTunes from './icons/iTunesIcon';
import soundCloud from './icons/SoundCloudIcon';
import spotify from './icons/SpotifyIcon';
import yandexMusic from './icons/YandexMusicIcon';

export const icons = {
  vk,
  instagram,
  telegram,
  appleMusic,
  boomMusic,
  iTunes,
  soundCloud,
  spotify,
  yandexMusic,
};

// Make icon aliases
for (const key in icons) {
  const aliases = [];

  aliases.push(key.toLowerCase());
  aliases.push(key.replace(/^(.)/, ($1) => $1.toLowerCase()));
  aliases.push(
    key
      .replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`)
      .replace(/^-/, '')
  );

  aliases.forEach((alias) => {
    if (alias in icons) {
      return;
    }
    icons[alias] = icons[key];
  });
}

class Icon extends PureComponent {
  static defaultProps = {
    stroked: false,
    block: false,
    inline: false,
  };

  render = () => {
    const { name, stroked, block, inline, ...otherProps } = this.props;

    if (!(name in icons)) {
      return null;
    }

    const IconComponent = icons[name];

    return (
      <Root isSrtoked={stroked} inline={inline} block={block}>
        <IconComponent key={name} {...otherProps} />
      </Root>
    );
  };
}

export default Icon;
