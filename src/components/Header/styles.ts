import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopBarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 24px 20px 20px;

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

export const Logo = styled.div`
  display: block;
  width: 87px;
  height: 104px;
  margin-left: 30px;
  background-image: url('/art/logo.svg');
  background-size: 87px;
  background-repeat: no-repeat;
  background-position: 0 50%;
`;

export const IconWrap = styled.div`
  margin-right: 3px;
  font-size: 26px;
`;