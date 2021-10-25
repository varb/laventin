import styled, { css } from 'styled-components';

export const Root = styled.span`
  display: ${(p) => (p.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  width: 1em;
  height: 1em;
  line-height: 0;

  & svg {
    width: 100%;
    height: 100%;
  }

  & svg,
  & path,
  & g {
    fill: currentColor;

    ${(p) =>
      p.stroked &&
      css`
        stroke: currentColor;
      `}
  }

  ${(p) =>
    p.block &&
    css`
      /* display: block; */
      height: 100%;
    `}
`;
