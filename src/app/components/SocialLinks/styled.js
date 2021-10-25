import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  transition-property: border-color;
  transition-duration: .2s;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;
