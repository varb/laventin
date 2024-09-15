import { Link } from "react-router-dom";
import styled from "styled-components";

import Stack from "shared/ui/Stack";
import { RouteNames } from "shared/model/route-names";
import { TrackItem as ITrackItem, ReleaseType } from "../model/track.types";

const StyledTrackItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(2.5)};
  width: 100%;
  padding: ${(p) => p.theme.indents.calc(1.5)};
  border: ${(p) => p.theme.indents.borderWidth} solid transparent;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  ${(p) => p.theme.helpers.createTransition(["border-color", "box-shadow"])}
`;

const StyledTrackLink = styled.a`
  display: flex;
  justify-content: center;
  padding: ${(p) =>
    `${p.theme.indents.calc(0.5)} ${p.theme.indents.calc(2.5)}`};
  color: inherit;
  text-decoration: none;

  @media (hover: hover) {
    &:hover ${StyledTrackItemWrapper} {
      border-color: ${(p) => p.theme.colors.primary.main};
      ${(p) => p.theme.effectStyles.outlined.hover}
    }
  }

  &:active ${StyledTrackItemWrapper} {
    border-color: ${(p) => p.theme.colors.primary.dark};
    ${(p) => p.theme.effectStyles.outlined.active}
  }

  &:focus-visible {
    outline: none;

    & ${StyledTrackItemWrapper} {
      outline: ${(p) => p.theme.indents.borderWidth} solid
        ${(p) => p.theme.colors.accent.main};
      outline-offset: 0;
    }
  }
`;

const StyledTrackArtwork = styled.img`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: ${(p) => p.theme.indents.calc(0.5)};
`;

const StyledTrackTitle = styled.p`
  font-weight: 700;
`;

const StyledTrackArtist = styled.p`
  color: ${(p) => p.theme.colors.gray[200]};
  font-size: 12px;
`;

const StyledTrackInfoRow = styled(Stack).attrs({
  direction: "row",
  gap: 0.5,
})`
  color: ${(p) => p.theme.colors.gray[600]};
  font-size: 12px;

  & > *:not(:last-child) {
    display: flex;
    align-items: center;
    gap: ${(p) => p.theme.indents.calc(0.5)};

    &::after {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.gray[600]};
    }
  }
`;

function TrackItem({
  id,
  coverUrl,
  title,
  artist,
  releaseType,
  releaseDate,
}: ITrackItem) {
  const year = releaseDate?.toDate().getFullYear();

  return (
    <StyledTrackLink to={`${RouteNames.tracks}/${id}`} as={Link}>
      <StyledTrackItemWrapper>
        <StyledTrackArtwork src={coverUrl || `/art/empty-cover.svg`} />
        <Stack gap={0.25}>
          <StyledTrackTitle>{title}</StyledTrackTitle>
          <StyledTrackArtist>{artist}</StyledTrackArtist>
          {(releaseDate || releaseType) && (
            <StyledTrackInfoRow>
              {year && <span>{year}</span>}
              {releaseType && <span>{ReleaseType[releaseType]}</span>}
            </StyledTrackInfoRow>
          )}
        </Stack>
      </StyledTrackItemWrapper>
    </StyledTrackLink>
  );
}

export default TrackItem;
