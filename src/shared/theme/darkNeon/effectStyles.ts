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
  filter: grayscale(1);
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[300]};
`;

const primaryFullBehavior = css`
  &:hover {
    ${(p) => p.theme.effectStyles.primary.hover}
  }

  &:active {
    ${(p) => p.theme.effectStyles.primary.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.primary.disabled}
  }
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
  background-image: none;
  background-color: ${(p) => p.theme.colors.gray[500]};
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[700]};
`;

const secondaryFullBehavior = css`
  &:hover {
    ${(p) => p.theme.effectStyles.secondary.hover}
  }

  &:active {
    ${(p) => p.theme.effectStyles.secondary.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.secondary.disabled}
  }
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

const outlinedFullBehavior = css`
  &:hover {
    ${(p) => p.theme.effectStyles.outlined.hover}
  }

  &:active {
    ${(p) => p.theme.effectStyles.outlined.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.outlined.disabled}
  }
`;

/**
 * Ghost Style
 */
const ghostHover = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.gray[900]},
    inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.common.foreground};
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

const ghostFullBehavior = css`
  &:hover {
    ${(p) => p.theme.effectStyles.ghost.hover}
  }

  &:active {
    ${(p) => p.theme.effectStyles.ghost.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.ghost.disabled}
  }
`;

/**
 * Cover Style
 */
const coverShadowMiddle = css`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
`;

const coverShadowLarge = css`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;

export default {
  primary: {
    hover: primaryHover,
    active: primaryActive,
    disabled: primaryDisabled,
    fullBehavior: primaryFullBehavior,
  },
  secondary: {
    hover: secondaryHover,
    active: secondaryActive,
    disabled: secondaryDisabled,
    fullBehavior: secondaryFullBehavior,
  },
  outlined: {
    hover: primaryHover,
    active: outlinedActive,
    disabled: outlinedDisabled,
    fullBehavior: outlinedFullBehavior,
  },
  ghost: {
    hover: ghostHover,
    active: ghostActive,
    disabled: ghostDisabled,
    fullBehavior: ghostFullBehavior,
  },
  cover: {
    middle: coverShadowMiddle,
    large: coverShadowLarge,
  },
} as EffectStyles;
