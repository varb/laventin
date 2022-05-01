import Helmet from 'react-helmet';
import { Navigate, useParams } from 'react-router-dom';

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
// import Icon from 'components/Icon';


function ShareTrackScreen() {
  const { id } = useParams<'id'>();
  const trackInfo = useTrackInfo(id);

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

export default ShareTrackScreen;
