import { Link } from "react-router-dom";
import { Playlist } from "@phosphor-icons/react";

import { Typography, Button } from "design-system";
import { trackList } from "data/tracklist";
import StreamingLinks from "components/StreamingLinks";
import SocialLinks from "components/SocialLinks";
import { PageWrap } from "components/Layout/styles";
import TracksList from "components/TracksList";
import { useAuth } from "providers/AuthProvider";

import {
  MainBgCover,
  LastReleaseInfo,
  LastReleaseTitle,
  LastReleaseAuthor,
  SubTitle,
  SectionWrapper,
  LastReleaseLabel,
} from "./styles";

const filteredList = trackList.filter((item) => item.active);
const lastRelease = filteredList[0];

function HomeScreen() {
  const { user } = useAuth();

  return (
    <PageWrap>
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
        <Button iconLeft={<Playlist />}>View all tracks</Button>
      </SectionWrapper>

      <SubTitle>Socials</SubTitle>
      <SectionWrapper>
        <SocialLinks />
      </SectionWrapper>
    </PageWrap>
  );
}

export default HomeScreen;
