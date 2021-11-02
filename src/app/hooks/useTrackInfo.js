import { useMemo } from 'react';
import { trackList } from '../data/tracklist';

export default (id) =>
  useMemo(() => {
    if (!id) return null;

    let trackInfo = null

    for (let key in trackList) {
      if (trackList[key].id === id) {
        trackInfo = trackList[key]
      }
    }

    return trackInfo;
  },
  [id]
);