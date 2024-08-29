import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;
    background-color: ${(p) => p.theme.colors.common.background};
    color: ${(p) => p.theme.colors.common.foreground};
    font-family: ${(p) => p.theme.typography.fontFamily.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${(p) => p.theme.typography.fontFamily.primary};
  }

  button {
    border: 0;
    font-weight: 600;
  }

  input {
    font-family: ${(p) => p.theme.typography.fontFamily.regular};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    opacity: 0;
    transition: opacity 600ms 1000ms ease-out;

    ._loaded & {
      opacity: 1;
    }
  }

  main {
    flex-grow: 1;
  }
`;

export default GlobalStyle;
