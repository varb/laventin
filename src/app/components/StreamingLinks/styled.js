import styled, { css } from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;
