import styled, { css } from 'styled-components';
import { PageWrap } from '../../components/Layout/styles';
import { H1, H3 } from '../../components/Typography';

export const Root = styled.div`
  position: relative;
  overflow: hidden;
`;

export const InfoContainer = styled(PageWrap)`
  position: relative;
  z-index: 100;
  margin-bottom: 50px;
`;

export const ControlTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 20px 20px;
`;

export const ShareButton = styled.div`
  padding-right: 4px;
  color: ${(p) => p.theme.colors.text.secondary};
  font-size: 26px;
  transition: color .2s;

  &:hover {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

export const InfoRow = styled.div`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const ArtworkWrapper = styled.div`
  padding: 0 35px;
  margin-bottom: 30px;
`;

export const ArtworkContainer = styled.div<{ artPath?: string }>`
  position: relative;
  padding-bottom: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    width: 90%;
    height: 90%;

    ${(p) => p.artPath && css`
      background: url(${p.artPath});
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
      filter: blur(60px) brightness(0.5);
    `}

    pointer-events: none;
    transform: translate(-50%, -50%);
  }
`;

export const ArtworkCover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  max-width: 100%;
  margin: 0;

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

export const Title = styled(H1)`
  margin-bottom: 5px;
`;

export const Author = styled(H3)`
`;
