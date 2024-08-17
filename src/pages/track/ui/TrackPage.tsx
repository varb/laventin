import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Navigate, useParams, Link } from "react-router-dom";

import { Box, Typography } from "shared/ui";
import { StreamingLinks } from "entities/streaming-link";
// import useTrackInfo from "shared/hooks/useTrackInfo";
// import { useAuth } from "providers/AuthProvider";
import {
  Root,
  Title,
  InfoRow,
  Author,
  ArtworkCover,
  // ShareButton,
  ArtworkWrapper,
  ArtworkContainer,
} from "./TrackPage.styles";
import { getTrackInfo } from "../api/getTrackInfo";
import { TrackItem } from "modules/tracks/model/tracklist";

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

export default function TrackPage() {
  const { id } = useParams<"id">();
  const { data: trackInfo } = useTrackInfo(id);

  // const { user } = useAuth();

  console.log("trackInfo", id, trackInfo);

  if (trackInfo === null) {
    // return <Navigate replace to="/" />;
    return null;
  }

  const trackArtworkPath =
    trackInfo.coverUrl || `/art/${trackInfo.id}/artwork.jpg`;

  return (
    <>
      <Helmet>
        <title>
          {trackInfo.title} by {trackInfo.artist}
        </title>
        <meta property="og:image" content={trackArtworkPath} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <Root>
        <Box mb={3}>
          <Typography.TextLink to="edit" as={Link}>
            Edit track
          </Typography.TextLink>
        </Box>
        <InfoRow>
          <ArtworkWrapper>
            <ArtworkContainer artPath={trackArtworkPath}>
              <ArtworkCover src={trackArtworkPath} />
            </ArtworkContainer>
          </ArtworkWrapper>
          <Title>{trackInfo.title}</Title>
          <Author>{trackInfo.artist}</Author>
        </InfoRow>

        <InfoRow>
          <StreamingLinks trackInfo={trackInfo} />
        </InfoRow>
      </Root>
    </>
  );
}
