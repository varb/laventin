import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { MusicNotesPlus } from "@phosphor-icons/react";

import { TrackList } from "entities/track";
import Button from "shared/ui/Button";
import HeaderAction from "shared/ui/HeaderAction";
import Layout from "shared/ui/Layout";
import Typography from "shared/ui/Typography";
import { useAuth } from "shared/providers";
import { RouteNames } from "shared/model/route-names";
import Stack from "shared/ui/Stack";

export default function TrackListPage() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>All Laventin's tracks</title>
      </Helmet>

      {user && (
        <HeaderAction>
          <Button
            iconRight={<MusicNotesPlus />}
            forwardedAs={Link}
            to={RouteNames.addTrack}
            variant="secondary"
            size="small"
          >
            Add track
          </Button>
        </HeaderAction>
      )}

      <Stack>
        <Layout.PageWrap>
          <Typography.H1>Discography</Typography.H1>
        </Layout.PageWrap>

        <Layout.BasePageWrap>
          <TrackList />
        </Layout.BasePageWrap>
      </Stack>
    </>
  );
}
