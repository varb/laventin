import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextLink } from '../Typography'
import { useAuth } from 'providers/AuthProvider';

export const Root = styled.div`
  display: grid;
  grid-gap: 5px;
  padding-bottom: 60px;

  color: ${(p) => p.theme.colors.text.secondary};
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;

export default function Footer() {
  const { user, signOut } = useAuth();
  const logout = async(e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
  }

  return (
    <Root>
      Designed &amp; developed by me
      <div>
        <TextLink href="http://varb.me" target="_blank">varb.me</TextLink>
      </div>

      <div>
        {!user ? (
          <TextLink as={Link} to='login'>Login</TextLink>
        ) : (
          <TextLink onClick={logout}>Sign out</TextLink>
        )}
      </div>
    </Root>
  )
}
