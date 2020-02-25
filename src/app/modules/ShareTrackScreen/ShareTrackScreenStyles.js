import styled, { css } from 'styled-components';


// const background = '#fff';
// const hover = '#63FFB9';
// const accent = '#282828';
const background = 'rgba(0,0,0,0.6)';
const hover = '#1A936F';
const accent = '#f1f1f1';

export const Root = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    z-index: 20;

    width: calc(100% + 60px);
    height: calc(100% + 60px);

    /* width: 100%;
    height: 100%; */

    ${(p) => p.artPath && css`
      background: url('/art/${p.artPath}/bg-layer.jpg');
      background-size: cover;
      background-position: 50%;
    `}

    filter: grayscale(0.8) blur(6px);

    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.35);
    pointer-events: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 100;

  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 20px 20%;
`;

export const InfoWrapper = styled.div`
  color: ${accent};
`;

export const InfoRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Author = styled.h1`
  margin: 0 0 5px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  word-spacing: 1px;
  text-transform: uppercase;
`;
export const AuthorSpan = styled.span`
  background-color: ${background};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  word-spacing: 8px;
  text-transform: uppercase;
`;
export const TitleSpan = styled.span`
  background-color: ${background};
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MediaLink = styled.a`
  padding: 0 1px;
  background-color: ${background};
  color: inherit;
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    background-color: ${hover};
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
