import React, { useCallback } from 'react';
import { List, Link, LinkIcon } from './styled';
import { musicStores } from 'data/tracklist';
import { setGoal } from 'helpers/analytics';
import Icon from '../Icon';
import { MusicStores, TrackItem } from 'types/tracklist';

type StreamingLinksProps = {
  trackInfo: TrackItem
};

export default function StreamingLinks(props: StreamingLinksProps): React.ReactElement | null {
  const { trackInfo } = props;
  const { links: trackLinks } = trackInfo;

  const onLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { targetId } = e.currentTarget.dataset;

      console.log('onLinkClick', targetId);
      if (targetId) {
        setGoal(targetId, {
          trackId: trackInfo.id,
          name: trackInfo.name,
        });
      }
    },
    [trackInfo]
  );

  if (!trackLinks) return null;

  let list = [];

  for (const key in trackLinks) {
    if (trackLinks.hasOwnProperty(key)) {
      if (key in musicStores) {
        const musicStoreInfo = musicStores[key as keyof MusicStores];

        list.push(
          <Link
            key={key}
            href={trackLinks[key as keyof MusicStores]}
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
