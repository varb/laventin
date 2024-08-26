import { useState, useEffect } from "react";

import { getTrackList } from "../api/track";
import { TrackItem } from "../model/track.types";

/**
 * A custom React hook to fetch and manage a list of tracks.
 *
 * @param networkProps - Optional network parameters to pass to the {@link getTrackList} API call.
 * @return An object containing the track list data and a loading state.
 */
export const useTrackList = (
  networkProps?: Parameters<typeof getTrackList>[0]
) => {
  const { isPublic, limit } = networkProps || {};
  const [loading, setLoading] = useState(false);
  const [trackList, setTrackList] = useState<TrackItem[] | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchTracks = async () => {
      const tracksList = await getTrackList(networkProps);
      setTrackList(tracksList);
      setLoading(false);
    };

    fetchTracks();
  }, [isPublic, limit]);

  return { data: trackList, loading };
};
