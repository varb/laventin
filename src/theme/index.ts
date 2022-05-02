import darkNeon from './darkNeon';

export type DefaultThemeColors = {
  primary: {
    main: string
  }
  secondary: {
    main: string,
  },
  background: {
    default: string,
  },
  text: {
    primary: string,
    secondary: string,
  },
}

declare module 'styled-components' {
  export interface DefaultTheme {
    indents: {
      base: number,
      calc: (n: number) => string,
    }
    colors: DefaultThemeColors
  }
}

export default {
  darkNeon
};
