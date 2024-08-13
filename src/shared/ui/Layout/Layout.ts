import styled from "styled-components";

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

const Layout = {
  PageWrap,
  PageLayout,
};

export default Layout;
