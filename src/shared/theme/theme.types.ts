import { css } from "styled-components";
import { createTransition } from ".";

type StyledCSS = ReturnType<typeof css>;

export type ColorScheme = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
};

export type DefaultThemeColors = {
  common: {
    background: string;
    foreground: string;
    white: string;
  };
  primary: ColorScheme;
  accent: ColorScheme;
  secondary: ColorScheme;
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  background: {
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  gradient: {
    transparent: string;
    primary: string;
    primaryDisabled: string;
    secondary: string;
  };
};

export type Typography = {
  fontFamily: {
    regular: string;
    primary: string;
  };
  header1: StyledCSS;
  header2: StyledCSS;
  header3: StyledCSS;
  header4: StyledCSS;
  header5: StyledCSS;
  header6: StyledCSS;
  label: StyledCSS;
  truncateText: StyledCSS;
};

type ButtonEffect = {
  hover: StyledCSS;
  active: StyledCSS;
  disabled?: StyledCSS;
  fullBehavior?: StyledCSS;
};

export type EffectStyles = {
  primary: ButtonEffect;
  secondary: ButtonEffect;
  outlined: ButtonEffect;
  ghost: ButtonEffect;
  cover: {
    middle: StyledCSS;
    large: StyledCSS;
  };
};

declare module "styled-components" {
  export interface DefaultTheme {
    indents: {
      base: number;
      calc: (n: number) => string;
      borderWidth: string;
    };
    colors: DefaultThemeColors;
    typography: Typography;
    effectStyles: EffectStyles;
    helpers: {
      createTransition: typeof createTransition;
    };
  }
}
