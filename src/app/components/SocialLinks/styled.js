import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 10px;
  }

  & > :first-child {
    margin-left: 0;
  }

  & > :last-child {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  transition-property: border-color, box-shadow;
  transition-duration: .2s;

  &:hover {
    border-color: rgb(205 80 173);
    box-shadow: 0 0 5px rgb(205 80 173 / 30%), inset 0 0 3px rgb(205 80 173 / 50%);
    filter: drop-shadow(0 0 2px rgb(205 80 173 / 100%));
  }
`;
