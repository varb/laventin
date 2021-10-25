import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Root,
  InfoContainer,
  InfoWrapper,
  Title,
  LinksList,
  TrackLink,
  Logo,
  MainBgCover,
  LastReleaseInfo,
  LastReleaseTitle,
  LastReleaseAuthor,
  SubTitle,
  SectionWrapper,
  TrackTitle,
  TrackArtist,
  TrackArtwork,
} from './HomeScreenStyles';
import { trackList } from '../../data/tracklist';
import StreamingLinks from '../../components/StreamingLinks';
import SocialLinks from '../../components/SocialLinks';

const filteredList = trackList.filter((item) => item.active);

const lastRelease = filteredList[0];

function HomeScreen() {
  console.log('lastRelease', lastRelease);
  return (
    <Root>
      <InfoContainer>
        <InfoWrapper>
          <Logo />

          <MainBgCover style={{ backgroundImage: `url('/art/${lastRelease.id}/bg-layer.jpg')` }} />
          <LastReleaseInfo>
            <LastReleaseTitle>{lastRelease.name}</LastReleaseTitle>
            <LastReleaseAuthor>{lastRelease.artist}</LastReleaseAuthor>
          </LastReleaseInfo>

          <SectionWrapper>
            <StreamingLinks trackInfo={lastRelease} />
          </SectionWrapper>

          <SubTitle>Discography</SubTitle>
          <SectionWrapper>
            <LinksList>
              {filteredList.map((track, index) => (
                <TrackLink
                  key={index}
                  to={`/t/${track.id}`}
                  as={Link}
                >
                  <TrackArtwork src={`/art/${track.id}/artwork.jpg`} />
                  <div>
                    <TrackTitle>{track.name}</TrackTitle>
                    <TrackArtist>{track.artist}</TrackArtist>
                  </div>
                </TrackLink>
              ))}
            </LinksList>
          </SectionWrapper>

          <SubTitle>Social</SubTitle>
          <SocialLinks />

        </InfoWrapper>
      </InfoContainer>
    </Root>
  )
}

export default HomeScreen;
