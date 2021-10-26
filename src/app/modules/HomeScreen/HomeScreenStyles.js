import styled, { css } from 'styled-components';

const background = 'rgba(0,0,0,0.6)';
const accent = '#CD50AD';

export const Root = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 100%;
  height: 104px;
  background-image: url('./art/logo.svg');
  background-size: 87px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainBgCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1C1421 100%);
  }
`;

export const LastReleaseInfo = styled.div`
  margin-top: 140px;
  margin-bottom: 30px;
`;

export const LastReleaseLabel = styled.div`
  width: fit-content;
  margin-bottom: 5px;
  padding: 2px 8px;

  background: #CD50AD;
  border-radius: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const LastReleaseTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const LastReleaseAuthor = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${accent};
`;

export const SectionWrapper = styled.div`
  margin-bottom: 50px;
`;

export const InfoContainer = styled.div`
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 30px 60px;
`;

export const InfoWrapper = styled.div`
  color: #fff;
`;

export const InfoRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 60px;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  word-spacing: 8px;
  /* text-align: center; */
  text-transform: uppercase;
`;
export const TitleSpan = styled.span`
  background-color: ${background};
`;

export const SubTitle = styled.h2`
  margin: 0 0 30px;
  color: ${accent};
  font-size: 24px;
  font-weight: 900;
  text-align: center;
`;

export const LinksList = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const TrackLink = styled.a`
  display: flex;
  align-items: center;
  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  color: inherit;
  text-decoration: none;
  transition-property: border-color;
  transition-duration: .2s;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;

export const TrackTitle = styled.div`
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
`;

export const TrackArtist = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
`;

export const TrackArtwork = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
`;
