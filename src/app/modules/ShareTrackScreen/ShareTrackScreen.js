import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Redirect, useParams } from 'react-router-dom';

import {
  Root,
  Title,
  InfoContainer,
  InfoRow,
  Author,
  ArtworkCover,
  ControlTopBar,
  // ShareButton,
  ArtworkWrapper,
  ArtworkContainer,
} from './ShareTrackScreenStyles';
import StreamingLinks from '../../components/StreamingLinks';
import useTrackInfo from '../../hooks/useTrackInfo';
import BackButton from '../../components/BackButton';


function ShareTrackScreen() {
  const { id } = useParams();
  const trackInfo = useTrackInfo(id);

  if (trackInfo === null) {
    return (<Redirect to="/" />);
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${trackInfo.name} by ${trackInfo.artist}`}</title>
        <meta property="og:image" content={`/art/${trackInfo.id}/artwork.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
      </Helmet>
      <Root>
        <ControlTopBar>
          <BackButton to="/" />
          {/* <ShareButton>
            <Icon name="share" />
          </ShareButton> */}
        </ControlTopBar>
        <InfoContainer>
          <InfoRow>
            <ArtworkWrapper>
              <ArtworkContainer artPath={`/art/${trackInfo.id}/artwork.jpg`}>
                <ArtworkCover src={`/art/${trackInfo.id}/artwork.jpg`} />
              </ArtworkContainer>
            </ArtworkWrapper>
            <Title>{trackInfo.name}</Title>
            <Author>{trackInfo.artist}</Author>
          </InfoRow>
          <InfoRow>
            <StreamingLinks trackInfo={trackInfo} />
          </InfoRow>
        </InfoContainer>
      </Root>
    </Fragment>
  );
}

export default ShareTrackScreen;
