import { useNavigate } from "react-router-dom";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { SignIn, User } from "@phosphor-icons/react";

import { RouteNames } from "shared/model/route-names";
import { useAuth } from "shared/providers";
import Stack from "shared/ui/Stack";
import Button from "shared/ui/Button";
import TextInput from "shared/ui/TextInput";

import { LoginFormData } from "./model";
import FormPasswordInput from "./FormPasswordInput";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const formMethods = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { control, handleSubmit, formState } = formMethods;

  const onFormSubmit: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    await signIn(email, password);
    navigate(RouteNames.root);
  };

  return (
    <FormProvider {...formMethods}>
      <Stack
        forwardedAs="form"
        onSubmit={handleSubmit(onFormSubmit)}
        gap={3}
        pb={3}
      >
        <Stack gap={2.5}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                type="email"
                inputMode="email"
                label="Username"
                placeholder="Eg. Jack"
                leftSlot={<User />}
                {...field}
              />
            )}
          />
          <FormPasswordInput />
        </Stack>

        <Button
          type="submit"
          iconLeft={<SignIn />}
          width="full"
          disabled={!formState.isValid}
        >
          Sign In
        </Button>
      </Stack>
    </FormProvider>
  );
}
