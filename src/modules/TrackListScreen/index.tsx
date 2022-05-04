import Helmet from 'react-helmet';
import { PageWrap } from 'components/Layout/styles'
import TracksList from 'components/TracksList'
import { H1, TextLink } from 'components/Typography';
import { Link } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

export default function TrackListScreen() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>All Laventin's tracks</title>
      </Helmet>

      <PageWrap style={{ marginBottom: 32 }}>
        <H1 style={{ marginBottom: 24 }}>All tracks</H1>
        {user && (
          <TextLink as={Link} to='new'>Add new track</TextLink>
        )}
        <TracksList />
      </PageWrap>
    </>
  )
}
