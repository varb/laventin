import { Link } from 'react-router-dom';

import { trackList } from 'data/tracklist';
import StreamingLinks from 'components/StreamingLinks';
import SocialLinks from 'components/SocialLinks';
import { PageWrap } from 'components/Layout/styles';
import {
  MainBgCover,
  LastReleaseInfo,
  LastReleaseTitle,
  LastReleaseAuthor,
  SubTitle,
  SectionWrapper,
  LastReleaseLabel,
} from './styles';
import TracksList from 'components/TracksList';
import { TextLink } from 'components/Typography';
import { useAuth } from 'providers/AuthProvider';

const filteredList = trackList.filter((item) => item.active);
const lastRelease = filteredList[0];

function HomeScreen() {
  const { user } = useAuth();

  return (
    <PageWrap>

      <MainBgCover />
      <LastReleaseInfo>
        <LastReleaseLabel>Last release</LastReleaseLabel>
        <LastReleaseTitle>{lastRelease.name}</LastReleaseTitle>
        <LastReleaseAuthor>{lastRelease.artist}</LastReleaseAuthor>
      </LastReleaseInfo>

      <SectionWrapper>
        <StreamingLinks trackInfo={lastRelease} />
      </SectionWrapper>

      <SubTitle>Discography</SubTitle>
      <SectionWrapper>
        <TracksList />
        {user && (
          <TextLink as={Link} to='/t'>All tracks</TextLink>
        )}
      </SectionWrapper>

      <SubTitle>Socials</SubTitle>
      <SectionWrapper>
        <SocialLinks />
      </SectionWrapper>

    </PageWrap>
  )
}

export default HomeScreen;
