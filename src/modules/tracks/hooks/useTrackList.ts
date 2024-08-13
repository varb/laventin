import { useState, useEffect } from "react";
import { getTracksList } from "network/tracks";
import { TrackItem } from "modules/tracks/model/tracklist";

export const useTracksList = (
  networkProps?: Parameters<typeof getTracksList>[0]
) => {
  const [loading, setLoading] = useState(false);
  const [trackList, setTrackList] = useState<TrackItem[] | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchTracks = async () => {
      const tracksList = await getTracksList(networkProps);
      setTrackList(tracksList);
      setLoading(false);
    };

    fetchTracks();
  }, [networkProps]);

  return { data: trackList, loading };
};
