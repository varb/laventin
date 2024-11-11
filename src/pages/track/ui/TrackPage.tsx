import Helmet from "react-helmet";
import { useParams, Link, useLocation } from "react-router-dom";
import { PencilSimple } from "@phosphor-icons/react";

import { StreamingList } from "entities/streaming-link";
import { useAuth } from "shared/providers";
import Button from "shared/ui/Button";
import HeaderAction from "shared/ui/HeaderAction";
import Layout from "shared/ui/Layout";

import { useTrackInfo } from "../lib/useTrackInfo";
import {
  StyledTitle,
  StyledArtist,
  StyledArtworkWrapper,
  StyledHero,
  StyledReleaseDate,
  StyledDescription,
} from "./TrackPage.styles";
import Artwork from "entities/artwork";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";
import { formatTimestampToReadableDate } from "shared/lib/date";

export default function TrackPage() {
  const { id } = useParams<"id">();
  const { data: trackInfo } = useTrackInfo(id);
  const { user } = useAuth();
  const { pathname } = useLocation();

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
        <meta property="og:image" content={trackInfo.coverUrl} />
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

      <Layout.PageWrap>
        <Stack gap={4}>
          <StyledHero>
            <StyledArtworkWrapper>
              <Artwork src={trackInfo.coverUrl} />
            </StyledArtworkWrapper>
            <StyledTitle>{trackInfo.title}</StyledTitle>
            <StyledArtist>{trackInfo.artist}</StyledArtist>
          </StyledHero>

          <StreamingList trackInfo={trackInfo} />

          <Stack gap={2}>
            <Typography.H3 foreground="primary.main">
              About release
            </Typography.H3>
            {trackInfo.description && (
              <StyledDescription>{trackInfo.description}</StyledDescription>
            )}

            <StyledReleaseDate>
              {trackInfo.releaseDate
                ? formatTimestampToReadableDate(trackInfo.releaseDate)
                : "Release Date: TBA"}
            </StyledReleaseDate>
          </Stack>
        </Stack>
      </Layout.PageWrap>
    </>
  );
}
