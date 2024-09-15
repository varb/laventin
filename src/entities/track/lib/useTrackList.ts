import { useState, useEffect } from "react";

import { getTrackList } from "../api/track";
import { TrackItem } from "../model/track.types";
import { useAuth } from "shared/providers/AuthProvider";

/**
 * A custom React hook to fetch and manage a list of tracks.
 *
 * @param networkProps - Optional network parameters to pass to the {@link getTrackList} API call.
 * @return An object containing the track list data and a loading state.
 */
export const useTrackList = (networkProps?: { limit?: number }) => {
  const { user } = useAuth();
  const { limit } = networkProps || {};
  const [loading, setLoading] = useState(false);
  const [trackList, setTrackList] = useState<TrackItem[] | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchTracks = async () => {
      const tracksList = await getTrackList({
        isAuthorized: !!user,
        ...networkProps,
      });
      setTrackList(tracksList);
      setLoading(false);
    };

    fetchTracks();
  }, [limit]);

  return { data: trackList, loading };
};
