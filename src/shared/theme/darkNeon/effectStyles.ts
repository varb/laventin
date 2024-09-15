import { css } from "styled-components";
import { EffectStyles } from "../theme.types";

/**
 * Primary Style
 */
const primaryHover = css`
  box-shadow: 0px 0px 10px ${(p) => p.theme.colors.primary.main}80,
    inset 0px 0px 5px ${(p) => p.theme.colors.primary.lighter}80;
`;

const primaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 0px 6px ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const primaryDisabled = css`
  filter: grayscale(1);
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[300]};
`;

const primaryFullBehavior = css`
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.primary.hover}
    }
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
  box-shadow: 0px 0px 10px ${(p) => p.theme.colors.secondary.lighter}80,
    inset 0px 0px 5px ${(p) => p.theme.colors.secondary.main};
`;

const secondaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 0px 6px ${(p) => p.theme.colors.secondary.darker};
  color: ${(p) => p.theme.colors.gray[800]};
`;

const secondaryDisabled = css`
  background-image: none;
  background-color: ${(p) => p.theme.colors.gray[500]};
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[700]};
`;

const secondaryFullBehavior = css`
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.secondary.hover}
    }
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
const outlinedHover = css`
  box-shadow: 0px 0px 10px ${(p) => p.theme.colors.primary.main}80,
    inset 0px 0px 5px ${(p) => p.theme.colors.primary.main}80;
`;

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
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.outlined.hover}
    }
  }

  &:active {
    ${(p) => p.theme.effectStyles.outlined.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.outlined.disabled}
  }
`;

/**
 * Success Style
 */
const successHover = css`
  box-shadow: 0px 0px 10px ${(p) => p.theme.colors.success.main}80,
    inset 0 0 5px ${(p) => p.theme.colors.success.main}80;
`;

const successActive = css`
  border-color: ${(p) => p.theme.colors.success.dark};
  box-shadow: 0 0 0 transparent,
    inset 0px 0px 6px ${(p) => p.theme.colors.success.dark};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const successFullBehavior = css`
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.success.hover}
    }
  }

  &:active {
    ${(p) => p.theme.effectStyles.success.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.success.disabled}
  }
`;

/**
 * Success Style
 */
const errorHover = css`
  box-shadow: 0 0 10px ${(p) => p.theme.colors.error.main}80,
    inset 0 0 5px ${(p) => p.theme.colors.error.main}80;
`;

const errorActive = css`
  border-color: ${(p) => p.theme.colors.error.dark};
  box-shadow: 0 0 0 transparent,
    inset 0px 0px 6px ${(p) => p.theme.colors.error.dark};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const errorFullBehavior = css`
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.error.hover}
    }
  }

  &:active {
    ${(p) => p.theme.effectStyles.error.active}
  }

  &:disabled {
    ${(p) => p.theme.effectStyles.error.disabled}
  }
`;

/**
 * Ghost Style
 */
const ghostHover = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  box-shadow: 0px 0px 10px ${(p) => p.theme.colors.gray[800]}80,
    inset 0 0 5px ${(p) => p.theme.colors.gray[800]}80;
  color: ${(p) => p.theme.colors.common.foreground};
`;

const ghostActive = css`
  background-color: ${(p) => p.theme.colors.gray[900]};
  box-shadow: 0 0 0 transparent,
    inset 0px 0px 6px ${(p) => p.theme.colors.common.background};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const ghostDisabled = css`
  color: ${(p) => p.theme.colors.gray[500]};
`;

const ghostFullBehavior = css`
  @media (hover: hover) {
    &:hover {
      ${(p) => p.theme.effectStyles.ghost.hover}
    }
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
    hover: outlinedHover,
    active: outlinedActive,
    disabled: outlinedDisabled,
    fullBehavior: outlinedFullBehavior,
  },
  success: {
    hover: successHover,
    active: successActive,
    disabled: outlinedDisabled,
    fullBehavior: successFullBehavior,
  },
  error: {
    hover: errorHover,
    active: errorActive,
    disabled: outlinedDisabled,
    fullBehavior: errorFullBehavior,
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
