import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

export const Root = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.text.secondary};
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  transition: color .2s;
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

export const IconWrap = styled.div`
  margin-right: 3px;
  font-size: 26px;
`;

export default function BackButton(props) {
  const { to = '/', text = 'Back' } = props;

  return (
    <Root to={to} as={Link}>
      <IconWrap>
        <Icon name="chevronLeft" />
      </IconWrap>
      {text}
    </Root>
  )
}
