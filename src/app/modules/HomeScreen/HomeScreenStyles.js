import styled, { css } from 'styled-components';


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

    background: url('/bg.jpg');
    background-size: cover;
    background-position: 50% 0;

    filter: blur(10px);

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
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */

  position: relative;
  z-index: 100;

  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 20px 40px;
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

export const SubTitle = styled.h3`
  margin: 0 0 30px;
  font-size: 28px;
  font-weight: 600;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MediaLink = styled.a`
  position: relative;
  padding: 0 1px;
  color: inherit;
  font-weight: 600;
  font-size: 24px;
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
