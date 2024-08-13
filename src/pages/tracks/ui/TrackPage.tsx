import Helmet from "react-helmet";
import { Navigate, useParams, Link } from "react-router-dom";

import { Box, Typography } from "shared/ui";
import StreamingLinks from "components/StreamingLinks";
import useTrackInfo from "shared/hooks/useTrackInfo";
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

export function TrackPage() {
  const { id } = useParams<"id">();
  const trackInfo = useTrackInfo(id);

  // const { user } = useAuth();

  if (trackInfo === null) {
    return <Navigate replace to="/" />;
  }

  const trackArtworkPath = `/art/${trackInfo.id}/artwork.jpg`;

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
