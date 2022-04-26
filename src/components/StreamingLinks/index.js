import React, { useCallback } from 'react';
import { List, Link, LinkIcon } from './styled';
// import { trackList, musicStores } from '../../data/tracklist';
import { musicStores } from '../../data/tracklist';
import { setGoal } from '../../helpers/analytics';
import Icon from '../Icon';

export default function StreamingLinks(props) {
  const { trackInfo } = props;
  const { links: trackLinks } = trackInfo;

  const onLinkClick = useCallback(
    (e) => {
      setGoal(e.target.dataset.targetId, {
        trackId: trackInfo.id,
        name: trackInfo.name,
      });
    },
    [trackInfo]
  );

  if (!trackLinks) return null;

  let list = [];

  for (const key in trackLinks) {
    if (trackLinks.hasOwnProperty(key)) {
      if (key in musicStores) {
        const musicStoreInfo = musicStores[key];

        list.push(
          <Link
            key={key}
            href={trackLinks[key]}
            onClick={onLinkClick}
            data-target-id={musicStoreInfo.id}
            target="_blank"
          >
            <LinkIcon>
              <Icon name={musicStoreInfo.icon} />
            </LinkIcon>
            {musicStoreInfo.title}
          </Link>
        );
      }
    }
  }

  return list.length > 0 ? <List>{list}</List> : null;
}
