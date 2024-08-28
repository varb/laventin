import React from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "@phosphor-icons/react";

import { RouteNames } from "shared/model/route-names";
import { useAuth } from "shared/providers";
import { Button, Stack } from "shared/ui";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const formElements = e.target.elements as HTMLFormControlsCollection &
      Record<string, HTMLInputElement>;
    const email = formElements.email.value;
    const password = formElements.password.value;

    await signIn(email, password);
    navigate(RouteNames.root);
  };

  return (
    <Stack forwardedAs="form" onSubmit={onSubmit} gap={3} pb={3}>
      <Stack gap={2.5}>
        <label>
          <input type="email" name="email" id="email" placeholder="email" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
      </Stack>
      <Button type="submit" iconLeft={<SignIn />} width="full">
        Sign In
      </Button>
    </Stack>
  );
}
