import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import { Layout, Typography } from "shared/ui";
import TracksList from "components/TracksList";
import { useAuth } from "app/providers/AuthProvider";

export default function TrackListScreen() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>All Laventin's tracks</title>
      </Helmet>

      <Layout.PageWrap style={{ marginBottom: 32 }}>
        <Typography.H1 style={{ marginBottom: 24 }}>All tracks</Typography.H1>
        {user && (
          <Typography.TextLink as={Link} to="new">
            Add new track
          </Typography.TextLink>
        )}
        <TracksList />
      </Layout.PageWrap>
    </>
  );
}
