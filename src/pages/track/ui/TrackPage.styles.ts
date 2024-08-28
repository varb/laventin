import styled, { css } from "styled-components";
import { Typography, Layout } from "shared/ui";

export const Root = styled(Layout.PageWrap)`
  position: relative;
  z-index: 100;
  margin-bottom: 50px;
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    width: 90%;
    height: 90%;

    ${(p) =>
      p.artPath &&
      css`
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

export const Title = styled(Typography.H1)`
  margin-bottom: 5px;
`;

export const Author = styled(Typography.H3)``;
