import styled, { css } from 'styled-components';
import { PageWrap } from '../../components/Layout/styles';
import { H1, H3 } from '../../components/Typography';


// const background = '#fff';
// const hover = '#63FFB9';
// const accent = '#282828';
const background = 'rgba(0,0,0,0.6)';
const hover = '#FF9B71';
const hoverColor = '#2f1f18';
const accent = '#f1f1f1';

export const Root = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const InfoContainer = styled(PageWrap)`
  position: relative;
  z-index: 100;
`;

export const ControlTopBar = styled(PageWrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 20px 20px;
`;

export const ShareButton = styled.div`
  font-size: 26px;
  color: ${(p) => p.theme.colors.text.secondary};
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

export const ArtworkCoverWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  padding: 0 35px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    width: 80%;
    height: 80%;

    ${(p) => p.artPath && css`
      background: url(${p.artPath});
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
      /* filter: blur(50px) brightness(0.65); */
      filter: blur(100px) brightness(0.8);
    `}

    pointer-events: none;
    transform: translate(-50%, -50%);
  }
`;

export const ArtworkCover = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

export const Title = styled(H1)`
  margin-bottom: 5px;
`;

export const Author = styled(H3)`
`;

export const MediaLink = styled.a`
  position: relative;
  padding: 0 1px;
  background-color: ${background};
  color: inherit;
  font-weight: 600;
  font-size: ${(p) => p.small ? 20 : 24}px;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${hover};
  }

  &:hover {
    background-color: ${hover};
    color: ${hoverColor};
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
