import Helmet from "react-helmet";
import { useParams, Link, useLocation } from "react-router-dom";
import { PencilSimple } from "@phosphor-icons/react";

import { StreamingList } from "entities/streaming-link";
import { useAuth } from "shared/providers";
import Button from "shared/ui/Button";
import HeaderAction from "shared/ui/HeaderAction";

import { useTrackInfo } from "../lib/useTrackInfo";
import {
  Root,
  Title,
  InfoRow,
  Author,
  ArtworkCover,
  ArtworkWrapper,
  ArtworkContainer,
} from "./TrackPage.styles";

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
          <StreamingList trackInfo={trackInfo} />
        </InfoRow>
      </Root>
    </>
  );
}
