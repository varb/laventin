import styled from "styled-components";
import Typography from "shared/ui/Typography";

export const MainBgCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 300px;
  padding-bottom: 42%;
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  mix-blend-mode: luminosity;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      ${(p) => p.theme.colors.common.background} 100%
    );
  }
`;
