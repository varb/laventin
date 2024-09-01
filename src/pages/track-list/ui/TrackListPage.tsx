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
