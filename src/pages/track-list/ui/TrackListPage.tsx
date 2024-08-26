import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import { Layout, Typography } from "shared/ui";
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

      <Layout.PageWrap style={{ marginBottom: 32 }}>
        <Typography.H1 style={{ marginBottom: 24 }}>Discography</Typography.H1>
        {user && (
          <Typography.TextLink as={Link} to={RouteNames.addTrack}>
            Add new track
          </Typography.TextLink>
        )}

        <TrackList />
      </Layout.PageWrap>
    </>
  );
}
