import styled, { css } from "styled-components";
import Button from "shared/ui/Button";
import Layout from "shared/ui/Layout";

const horizontalIndent = 4;
const verticalIndent = 20;

export const HeaderRoot = styled.header`
  display: flex;
  justify-content: space-between;

  & ${Button} {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -${verticalIndent}px;
      left: -${horizontalIndent}px;
      width: calc(100% + ${horizontalIndent * 2}px);
      height: calc(100% + ${verticalIndent * 2}px);
      background-color: transparent;
    }
  }
`;

export const HeaderWrapper = styled(Layout.PageWrap)<{ $isHome?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(p) =>
    !p.$isHome
      ? css`
          height: 70px;
          padding: 0 20px;
        `
      : css`
          height: 106px;
        `}
`;

export const HeaderRigthAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.div`
  display: block;
  width: 87px;
  height: 30px;
  background-image: url("/art/logo.svg");
  background-size: 87px;
  background-repeat: no-repeat;
  background-position: 0 50%;
`;
