import styled, { css } from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 16px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition-property: border-color, box-shadow;
  transition-duration: .2s;

  &:hover {
    border-color: rgb(205 80 173);
    box-shadow: 0 0 10px rgb(205 80 173 / 50%), inset 0 0 5px rgb(205 80 173 / 50%);
  }
`;

export const LinkIcon = styled.div`
  margin-right: 16px;
`;
