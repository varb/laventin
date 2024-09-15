import { memo } from "react";
import styled from "styled-components";

import { TrackItem } from "entities/track";
import { setGoal } from "shared/helpers/analytics";
import Stack from "shared/ui/Stack";
import { getStreamingLinkIcon, getStreamingTitle } from "./model/musicStores";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(1.5)};
  height: 40px;
  padding: 8px ${(p) => p.theme.indents.calc(1.75)};

  border: ${(p) => p.theme.indents.borderWidth} solid
    ${(p) => p.theme.colors.gray[800]};
  border-radius: ${(p) => p.theme.indents.calc(5)};
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  ${(p) => p.theme.helpers.createTransition(["border-color", "box-shadow"])}

  &:hover {
    border-color: ${(p) => p.theme.colors.primary.main};
    ${(p) => p.theme.effectStyles.primary.hover}
  }

  &:active {
    ${(p) => p.theme.effectStyles.primary.active}
  }
`;

const StyledIcon = styled.span`
  align-self: stretch;
  font-size: 20px;
`;

type StreamingListProps = {
  trackInfo?: TrackItem | null;
};

function StreamingList({ trackInfo }: StreamingListProps) {
  if (!trackInfo || !trackInfo.links || !trackInfo.links.length) return null;

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { targetId } = e.currentTarget.dataset;
    if (targetId) {
      setGoal(targetId, {
        trackId: trackInfo.id,
        name: trackInfo.title,
      });
    }
  };

  return (
    <Stack gap={2.5}>
      {trackInfo.links.map(({ resourceId, url }) => (
        <StyledLink
          key={resourceId}
          href={url}
          target="_blank"
          data-target-id={resourceId}
          onClick={onLinkClick}
        >
          <StyledIcon>{getStreamingLinkIcon(resourceId)}</StyledIcon>
          {getStreamingTitle(resourceId)}
        </StyledLink>
      ))}
    </Stack>
  );
}

export default memo(StreamingList);
