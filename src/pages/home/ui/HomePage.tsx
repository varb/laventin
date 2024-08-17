import { Link } from "react-router-dom";
import { Playlist } from "@phosphor-icons/react";

/**
 * @deprecated imports
 */
import { trackList } from "data/tracklist";
import TracksList from "components/TracksList";

import { StreamingLinks } from "entities/streaming-link";
import { SocialLinks } from "entities/social-link";
import { useAuth } from "shared/providers";
import { Typography, Button, Layout } from "shared/ui";
import { RouteNames } from "shared/model/route-names";

import {
  MainBgCover,
  LastReleaseInfo,
  LastReleaseTitle,
  LastReleaseAuthor,
  SubTitle,
  SectionWrapper,
  LastReleaseLabel,
} from "./HomePage.styles";

const filteredList = trackList.filter((item) => item.active);
const lastRelease = filteredList[0];

function HomePage() {
  const { user } = useAuth();

  return (
    <Layout.PageWrap>
      <MainBgCover />
      <LastReleaseInfo>
        <LastReleaseLabel>Last release</LastReleaseLabel>
        <LastReleaseTitle>{lastRelease.title}</LastReleaseTitle>
        <LastReleaseAuthor>{lastRelease.artist}</LastReleaseAuthor>
      </LastReleaseInfo>

      <SectionWrapper>
        <StreamingLinks trackInfo={lastRelease} />
      </SectionWrapper>

      <SubTitle>Discography</SubTitle>
      <SectionWrapper>
        <TracksList />
        {user && (
          <Typography.TextLink as={Link} to="/t">
            All tracks
          </Typography.TextLink>
        )}

        <Button
          iconRight={<Playlist />}
          forwardedAs={Link}
          to={RouteNames.tracks}
        >
          View all tracks
        </Button>
      </SectionWrapper>

      <SubTitle>Socials</SubTitle>
      <SectionWrapper>
        <SocialLinks />
      </SectionWrapper>
    </Layout.PageWrap>
  );
}

export default HomePage;
