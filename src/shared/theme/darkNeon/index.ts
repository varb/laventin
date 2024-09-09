import { DefaultTheme } from "styled-components";
import { typography } from "../typography";
import colors from "./colors";
import effectStyles from "./effectStyles";
import { createTransition } from "../transition";
// import breakpoints from './breakpoints'
// import media from './media'
// import keyframes from './keyframes'
// import animation from './animation'

const indents = {
  base: 8,
  calc: function (indent: number) {
    return `${indent * this.base}px`;
  },
  borderWidth: "2px",
};

export default {
  indents,
  colors,
  typography,
  effectStyles,
  helpers: {
    createTransition,
  },
  // breakpoints,
  // media,
  // keyframes,
  // animation,
} as DefaultTheme;
