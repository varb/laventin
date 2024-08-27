import { Link } from "react-router-dom";
import styled from "styled-components";
import { SignIn, SignOut } from "@phosphor-icons/react";

import { useAuth } from "shared/providers";
import { Button, Typography } from "shared/ui";
import { RouteNames } from "shared/model/route-names";

export const Root = styled.footer`
  display: grid;
  gap: ${(p) => p.theme.indents.calc(1)};
  padding-bottom: ${(p) => p.theme.indents.calc(8)};

  color: ${(p) => p.theme.colors.text.secondary};
  font-size: 12px;
`;

export const StyledAuthButton = styled(Button)`
  margin-left: -12px;
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
          <StyledAuthButton
            forwardedAs={Link}
            to={RouteNames.signIn}
            variant="ghost"
            size="small"
            iconRight={<SignIn />}
          >
            Sign In
          </StyledAuthButton>
        ) : (
          <StyledAuthButton
            variant="ghost"
            size="small"
            iconLeft={<SignOut />}
            onClick={logout}
          >
            Sign out
          </StyledAuthButton>
        )}
      </div>
    </Root>
  );
}
