import { useEffect, useState } from "react";
import { TrackItem } from "entities/track";
import { getTrackInfo } from "../api/getTrackInfo";

export const useTrackInfo = (
  networkProps: Parameters<typeof getTrackInfo>[0]
) => {
  const [loading, setLoading] = useState(false);
  const [trackInfo, setTrackInfo] = useState<TrackItem | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchTrackInfo = async () => {
      const trackInfo = await getTrackInfo(networkProps);

      setTrackInfo(trackInfo);
      setLoading(false);
    };

    fetchTrackInfo();
  }, [networkProps]);

  return { data: trackInfo, loading };
};
