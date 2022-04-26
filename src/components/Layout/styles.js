import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;
    background-color: ${(p) => p.theme.colors.background.default};
    color: ${(p) => p.theme.colors.text.primary};
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  #root {
    min-height: 100vh;
  }
`;

export const PageWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const PageLayout = styled.div`
  opacity: 0;
  transition: opacity 600ms 1000ms ease-out;
  /* transition-delay: 1000ms;
  transition-property: opacity; */

  ._loaded & {
    opacity: 1;
  }
`;
