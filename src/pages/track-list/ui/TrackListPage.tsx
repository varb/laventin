import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { MusicNotesPlus } from "@phosphor-icons/react";

import { Button, HeaderAction, Layout, Typography } from "shared/ui";
import { TrackList } from "entities/track";
import { useAuth } from "shared/providers";
import { RouteNames } from "shared/model/route-names";

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

      <Layout.PageWrap style={{ marginBottom: 32 }}>
        <Typography.H1 style={{ marginBottom: 24 }}>Discography</Typography.H1>

        <TrackList />
      </Layout.PageWrap>
    </>
  );
}
