import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams, Link, useLocation } from "react-router-dom";
import { PencilSimple } from "@phosphor-icons/react";

import { TrackItem } from "entities/track";
import { StreamingLinks } from "entities/streaming-link";
import { useAuth } from "shared/providers";
import { Button, HeaderAction } from "shared/ui";

import {
  Root,
  Title,
  InfoRow,
  Author,
  ArtworkCover,
  ArtworkWrapper,
  ArtworkContainer,
} from "./TrackPage.styles";
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

export default function TrackPage() {
  const { id } = useParams<"id">();
  const { data: trackInfo } = useTrackInfo(id);
  const { user } = useAuth();
  const { pathname } = useLocation();

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

      {user && (
        <HeaderAction>
          <Button
            iconRight={<PencilSimple />}
            forwardedAs={Link}
            to={`${pathname}/edit`}
            variant="secondary"
            size="small"
          >
            Edit
          </Button>
        </HeaderAction>
      )}

      <Root>
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
