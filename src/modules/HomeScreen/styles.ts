import styled from 'styled-components';
import { H2 } from 'components/Typography';

export const Root = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 87px;
  height: 104px;
  background-image: url('/art/logo.svg');
  background-size: 87px;
  background-repeat: no-repeat;
  background-position: 0 50%;
  /* filter:
    drop-shadow(1px -1px 0px ${(p) => p.theme.colors.secondary.main})
    drop-shadow(-1px 1px 0px ${(p) => p.theme.colors.primary.main}); */
`;

export const MainBgCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 300px;
  padding-bottom: 42%;
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, ${(p) => p.theme.colors.background.default} 100%);
  }
`;

export const LastReleaseInfo = styled.div`
  margin-top: 115px;
  margin-bottom: 30px;
`;

export const LastReleaseLabel = styled.div`
  width: fit-content;
  margin-bottom: 5px;
  padding: 4px 9px;

  background: ${(p) => p.theme.colors.secondary.main};
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  /* letter-spacing: 0.05em; */
  /* text-transform: uppercase; */
`;

export const LastReleaseTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const LastReleaseAuthor = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary.main};
`;

export const SectionWrapper = styled.div`
  margin-bottom: 50px;
`;

export const InfoRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SubTitle = styled(H2)`
  margin: 0 0 30px;
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

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  transition-property: border-color, box-shadow;
  transition-duration: .2s;

  &:hover {
    border-color: rgb(205 80 173);
    box-shadow: 0 0 10px rgb(205 80 173 / 50%), inset 0 0 5px rgb(205 80 173 / 50%);
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
