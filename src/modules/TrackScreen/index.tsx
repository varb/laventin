import Helmet from 'react-helmet';
import { Navigate, useParams, Link } from 'react-router-dom';

import StreamingLinks from 'components/StreamingLinks';
import useTrackInfo from 'hooks/useTrackInfo';
import {
  Root,
  Title,
  InfoRow,
  Author,
  ArtworkCover,
  // ShareButton,
  ArtworkWrapper,
  ArtworkContainer,
} from './styles';
import { useAuth } from 'providers/AuthProvider';
import { TextLink } from 'components/Typography';
import Box from 'components/Box';
// import Icon from 'components/Icon';


function TrackScreen() {
  const { id } = useParams<'id'>();
  const trackInfo = useTrackInfo(id);
  const { user } = useAuth();

  if (trackInfo === null) {
    return (<Navigate replace to="/" />);
  }

  const trackArtworkPath = `/art/${trackInfo.id}/artwork.jpg`;

  return (
    <>
      <Helmet>
        <title>{`${trackInfo.name} by ${trackInfo.artist}`}</title>
        <meta property="og:image" content={trackArtworkPath} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <Root>
        <Box mb={3}>
          <TextLink to='edit' as={Link}>Edit track</TextLink>
        </Box>
        <InfoRow>
          <ArtworkWrapper>
            <ArtworkContainer artPath={trackArtworkPath}>
              <ArtworkCover src={trackArtworkPath} />
            </ArtworkContainer>
          </ArtworkWrapper>
          <Title>{trackInfo.name}</Title>
          <Author>{trackInfo.artist}</Author>
        </InfoRow>

        <InfoRow>
          <StreamingLinks trackInfo={trackInfo} />
        </InfoRow>
      </Root>
    </>
  );
}

export default TrackScreen;
