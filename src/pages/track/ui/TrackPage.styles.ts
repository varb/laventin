import styled from "styled-components";
import Typography from "shared/ui/Typography";

export const StyledHero = styled.div`
  text-align: center;
`;

export const StyledTitle = styled(Typography.H2)`
  margin-bottom: ${(p) => p.theme.indents.calc(0.5)};
`;

export const StyledArtist = styled.p`
  color: ${(p) => p.theme.colors.primary.main};
  font-weight: 500;
`;

export const StyledArtworkWrapper = styled.div`
  padding: 0 ${(p) => p.theme.indents.calc(4.5)};
  margin-bottom: ${(p) => p.theme.indents.calc(4)};
`;

export const StyledReleaseDate = styled.p`
  color: ${(p) => p.theme.colors.gray[300]};
  ${(p) => p.theme.typography.label};
`;

export const StyledDescription = styled.p`
  white-space: pre-wrap;
  line-height: 1.38;
`;
