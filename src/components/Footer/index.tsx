import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "app/providers";
import { Typography } from "shared/ui";

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
  const logout = async (e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Root>
      Designed &amp; developed by me
      <div>
        <Typography.TextLink href="http://varb.me" target="_blank">
          varb.me
        </Typography.TextLink>
      </div>
      <div>
        {!user ? (
          <Typography.TextLink as={Link} to="login">
            Login
          </Typography.TextLink>
        ) : (
          <Typography.TextLink onClick={logout}>Sign out</Typography.TextLink>
        )}
      </div>
    </Root>
  );
}
