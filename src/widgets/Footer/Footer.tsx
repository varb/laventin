import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { SignIn, SignOut } from "@phosphor-icons/react";

import { SocialLinks } from "entities/social-link";
import { useAuth } from "shared/providers";
import Button from "shared/ui/Button";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";
import { RouteNames } from "shared/model/route-names";

const StyledAuthButton = styled(Button)`
  margin-left: -12px;
`;

export default function Footer() {
  const isShowSocials = !!useMatch("/");
  const { user, signOut } = useAuth();
  const logout = async (e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Stack pt={5} pb={8}>
      {isShowSocials && (
        <Stack pb={2} gap={1.5}>
          <Typography.H3 foreground="primary.main">Socials</Typography.H3>
          <SocialLinks />
        </Stack>
      )}

      <Typography.Label foreground="gray.600">
        Designed &amp; developed by me:{" "}
        <Typography.TextLink href="https://varb.me" target="_blank">
          varb.me
        </Typography.TextLink>
      </Typography.Label>

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
    </Stack>
  );
}
