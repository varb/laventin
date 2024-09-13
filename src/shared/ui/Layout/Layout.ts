import styled from "styled-components";

const BasePageWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const PageWrap = styled(BasePageWrap)`
  padding: 0 32px;
`;

const Layout = {
  PageWrap,
  BasePageWrap,
};

export default Layout;
