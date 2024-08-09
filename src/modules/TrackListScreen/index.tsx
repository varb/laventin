import Helmet from "react-helmet";
import { PageWrap } from "components/Layout/styles";
import TracksList from "components/TracksList";
import { Typography } from "design-system";
import { Link } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";

export default function TrackListScreen() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>All Laventin's tracks</title>
      </Helmet>

      <PageWrap style={{ marginBottom: 32 }}>
        <Typography.H1 style={{ marginBottom: 24 }}>All tracks</Typography.H1>
        {user && (
          <Typography.TextLink as={Link} to="new">
            Add new track
          </Typography.TextLink>
        )}
        <TracksList />
      </PageWrap>
    </>
  );
}
