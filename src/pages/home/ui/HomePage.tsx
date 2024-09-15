import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Playlist } from "@phosphor-icons/react";

import { TrackList, useTrackList } from "entities/track";
import { StreamingList } from "entities/streaming-link";
import { RouteNames } from "shared/model/route-names";
import Button from "shared/ui/Button";
import Layout from "shared/ui/Layout";
import Typography from "shared/ui/Typography";
import Box from "shared/ui/Box";

import {
  MainBgCover,
  LastReleaseInfo,
  LastReleaseTitle,
  LastReleaseAuthor,
  SectionWrapper,
  LastReleaseLabel,
} from "./HomePage.styles";

function HomePage() {
  const { data: trackList } = useTrackList({ limit: 5 });
  const latestRelease = useMemo(() => {
    return trackList && trackList[0];
  }, [trackList]);

  return (
    <>
      <Layout.PageWrap>
        <MainBgCover />

        <LastReleaseInfo>
          <LastReleaseLabel>Last release</LastReleaseLabel>
          <LastReleaseTitle>{latestRelease?.title}</LastReleaseTitle>
          <LastReleaseAuthor>{latestRelease?.artist}</LastReleaseAuthor>
        </LastReleaseInfo>

        <SectionWrapper>
          <StreamingList trackInfo={latestRelease} />
        </SectionWrapper>

        <Box mb={1}>
          <Typography.H2>Discography</Typography.H2>
        </Box>
      </Layout.PageWrap>

      <Layout.BasePageWrap>
        <TrackList dataList={trackList} />
      </Layout.BasePageWrap>

      <Layout.PageWrap>
        <Box mt={2}>
          <Button
            iconRight={<Playlist />}
            forwardedAs={Link}
            to={RouteNames.tracks}
            width="full"
          >
            View all tracks
          </Button>
        </Box>
      </Layout.PageWrap>
    </>
  );
}

export default HomePage;
