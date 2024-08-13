type ColorScheme = {
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
    primary: string;
    primaryDisabled: string;
    secondary: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme {
    indents: {
      base: number;
      calc: (n: number) => string;
    };
    colors: DefaultThemeColors;
  }
}
