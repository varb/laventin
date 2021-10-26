import styled, { css } from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 12px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition-property: border-color;
  transition-duration: .2s;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;

export const LinkIcon = styled.div`
  margin-right: 10px;
`;
