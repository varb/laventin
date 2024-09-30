import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Playlist } from "@phosphor-icons/react";

import LatestRelease from "widgets/LatestRelease";
import { TrackList, useTrackList } from "entities/track";
import { StreamingList } from "entities/streaming-link";
import { RouteNames } from "shared/model/route-names";
import Button from "shared/ui/Button";
import Layout from "shared/ui/Layout";
import Typography from "shared/ui/Typography";
import Box from "shared/ui/Box";

import { MainBgCover } from "./HomePage.styles";

function HomePage() {
  const { data: trackList } = useTrackList({ limit: 5 });
  const latestRelease = useMemo(() => {
    return trackList && trackList[0];
  }, [trackList]);

  return (
    <>
      <Layout.PageWrap>
        <MainBgCover />

        <LatestRelease trackInfo={latestRelease} />

        <Box mb={1} mt={5}>
          <Typography.H2 foreground="primary.main">Discography</Typography.H2>
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
            size="large"
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
