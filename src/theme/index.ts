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
    colors: DefaultThemeColors
  }
}

export default {
  darkNeon
};
