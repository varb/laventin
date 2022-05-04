import styled from 'styled-components';
import { H2 } from 'components/Typography';

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

  /* background: ${(p) => p.theme.colors.secondary.main}; */
  background: linear-gradient(45deg, #DE4BB8 -3.45%, #3185FC 109.36%);
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
