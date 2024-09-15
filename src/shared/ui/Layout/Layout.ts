import styled from "styled-components";

const BasePageWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const PageWrap = styled(BasePageWrap)`
  padding: 0 32px;
`;

const BulletRow = styled.p`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(0.5)};

  & > *:not(:last-child) {
    display: inline-flex;
    align-items: center;
    gap: ${(p) => p.theme.indents.calc(0.5)};

    &::after {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.gray[600]};
    }
  }
`;

const Layout = {
  PageWrap,
  BasePageWrap,
  BulletRow,
};

export default Layout;
