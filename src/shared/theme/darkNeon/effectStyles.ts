import { css } from "styled-components";
import { EffectStyles } from "../theme.types";

/**
 * Primary Style
 */
const primaryHover = css`
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.primary.main},
    inset 0 0 0 transparent;
`;

const primaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 1px 6px ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const primaryDisabled = css`
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[300]};
`;

/**
 * Secondary Style
 */
const secondaryHover = css`
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.secondary.lighter},
    inset 0 0 0 transparent;
`;

const secondaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 1px 6px ${(p) => p.theme.colors.secondary.darker};
  color: ${(p) => p.theme.colors.gray[800]};
`;

const secondaryDisabled = css`
  background-color: ${(p) => p.theme.colors.gray[500]};
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[700]};
`;

/**
 * Outlined Style
 */
const outlinedActive = css`
  border-color: ${(p) => p.theme.colors.primary.dark};
  ${primaryActive}
`;

const outlinedDisabled = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  border-color: ${(p) => p.theme.colors.gray[800]};
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[600]};
`;

/**
 * Ghost Style
 */
const ghostHover = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.gray[900]},
    inset 0 0 0 transparent;
`;

const ghostActive = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  box-shadow: 0 0 0 transparent,
    inset 0px 1px 6px ${(p) => p.theme.colors.common.background};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const ghostDisabled = css`
  color: ${(p) => p.theme.colors.gray[500]};
`;

export default {
  primary: {
    hover: primaryHover,
    active: primaryActive,
    disabled: primaryDisabled,
  },
  secondary: {
    hover: secondaryHover,
    active: secondaryActive,
    disabled: secondaryDisabled,
  },
  outlined: {
    hover: primaryHover,
    active: outlinedActive,
    disabled: outlinedDisabled,
  },
  ghost: {
    hover: ghostHover,
    active: ghostActive,
    disabled: ghostDisabled,
  },
} as EffectStyles;
