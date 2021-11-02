import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Root,
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
  LastReleaseLabel,
} from './HomeScreenStyles';
import { trackList } from '../../data/tracklist';
import StreamingLinks from '../../components/StreamingLinks';
import SocialLinks from '../../components/SocialLinks';
import { PageWrap } from '../../components/Layout/styles';

const filteredList = trackList.filter((item) => item.active);

const lastRelease = filteredList[0];

function HomeScreen() {
  return (
    <Root>
      <PageWrap>
        <Logo />

        <MainBgCover />
        <LastReleaseInfo>
          <LastReleaseLabel>New release</LastReleaseLabel>
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

        <SubTitle>Socials</SubTitle>
        <SectionWrapper>
          <SocialLinks />
        </SectionWrapper>

      </PageWrap>
    </Root>
  )
}

export default HomeScreen;
