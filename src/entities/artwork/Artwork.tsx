import React from "react";
import styled from "styled-components";

type ArtworkProps = {
  variant: "primary" | "secondary";
  src: string;
};

const StyledArtwork = styled.img`
  display: block;
  max-width: 100%;
  margin: 0;
  border-radius: 4px;
  ${(p) => p.theme.effectStyles.cover.middle}
`;

export default function Artwork({ src, variant = "secondary" }: ArtworkProps) {
  return <StyledArtwork src={src} />;
}
