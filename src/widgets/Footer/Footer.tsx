import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "shared/providers";
import { Typography } from "shared/ui";
import { RouteNames } from "shared/model/route-names";

export const Root = styled.div`
  display: grid;
  grid-gap: 5px;
  padding-bottom: ${(p) => p.theme.indents.calc(8)};

  color: ${(p) => p.theme.colors.text.secondary};
  font-size: 12px;
`;

export default function Footer() {
  const { user, signOut } = useAuth();
  const logout = async (e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Root>
      <div>
        Designed &amp; developed by me:{" "}
        <Typography.TextLink href="https://varb.me" target="_blank">
          varb.me
        </Typography.TextLink>
      </div>
      <div>
        {!user ? (
          <Typography.TextLink as={Link} to={RouteNames.signIn}>
            Login
          </Typography.TextLink>
        ) : (
          <Typography.TextLink onClick={logout}>Sign out</Typography.TextLink>
        )}
      </div>
    </Root>
  );
}
