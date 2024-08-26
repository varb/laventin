import React, { useCallback, useMemo } from "react";
import { List, Link, LinkIcon } from "./StreamingLinks.styles";
import { musicStores } from "./model/musicStores";
/** #TODO: cross-import */
import { MusicStores, TrackItem } from "entities/track";
import { setGoal } from "shared/helpers/analytics";

type StreamingLinksProps = {
  trackInfo: TrackItem;
};

export default function StreamingLinks(
  props: StreamingLinksProps
): React.ReactElement | null {
  const { trackInfo } = props;
  const { links: trackLinks } = trackInfo;

  const onLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { targetId } = e.currentTarget.dataset;

      console.log("onLinkClick", targetId);
      if (targetId) {
        setGoal(targetId, {
          trackId: trackInfo.id,
          name: trackInfo.title,
        });
      }
    },
    [trackInfo]
  );

  const streamingLinks = useMemo(() => {
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
              <LinkIcon>{musicStoreInfo.icon}</LinkIcon>
              {musicStoreInfo.title}
            </Link>
          );
        }
      }
    }

    return list;
  }, [onLinkClick, trackLinks]);

  if (!trackLinks) return null;

  return streamingLinks.length > 0 ? <List>{streamingLinks}</List> : null;
}
