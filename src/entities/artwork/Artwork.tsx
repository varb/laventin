import styled, { css } from "styled-components";

type ArtworkProps = {
  variant?: "primary" | "secondary";
  src?: string;
};

const StyledRoot = styled.div<{ $artPath?: string }>`
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
      p.$artPath &&
      css`
        background: url(${p.$artPath});
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        filter: blur(60px) brightness(0.5);
      `}

    pointer-events: none;
    transform: translate(-50%, -50%);
  }
`;

const StyledArtwork = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  ${(p) => p.theme.effectStyles.cover.large}
`;

export default function Artwork({
  src = `/art/empty-cover.svg`,
  variant = "secondary",
}: ArtworkProps) {
  return (
    <StyledRoot $artPath={src}>
      <StyledArtwork src={src} />
    </StyledRoot>
  );
}
