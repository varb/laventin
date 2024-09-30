import styled from "styled-components";

import Artwork from "entities/artwork";
import { ReleaseType, TrackItem } from "entities/track";
import Layout from "shared/ui/Layout";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";
import { StreamingList } from "entities/streaming-link";

const StyledArtwork = styled.div`
  width: 96px;
`;

const StyledInfoRow = styled(Layout.BulletRow)`
  color: ${(p) => p.theme.colors.gray[400]};
  font-size: 12px;
`;

const StyledArtist = styled.p`
  color: ${(p) => p.theme.colors.primary.main};
`;

const StyledStreamingCaption = styled.p`
  margin: ${(p) => `${p.theme.indents.calc(5)} 0 ${p.theme.indents.calc(2)}`};
  color: ${(p) => p.theme.colors.gray[300]};
`;

type LatestReleaseProps = {
  trackInfo?: TrackItem | null;
};

export default function LatestRelease({ trackInfo }: LatestReleaseProps) {
  if (!trackInfo) return null;

  return (
    <>
      <Stack gap={3} direction="row" alignItems="center">
        <StyledArtwork>
          <Artwork src={trackInfo.coverUrl} />
        </StyledArtwork>

        <Stack gap={0}>
          <StyledInfoRow>
            <span>Latest release</span>
            {trackInfo.releaseType && (
              <span>{ReleaseType[trackInfo.releaseType]}</span>
            )}
          </StyledInfoRow>
          <Typography.H4>{trackInfo.title}</Typography.H4>
          <StyledArtist>{trackInfo.artist}</StyledArtist>
        </Stack>
      </Stack>

      {trackInfo.links?.length && (
        <StyledStreamingCaption>
          Available to stream here
        </StyledStreamingCaption>
      )}

      <StreamingList trackInfo={trackInfo} />
    </>
  );
}
