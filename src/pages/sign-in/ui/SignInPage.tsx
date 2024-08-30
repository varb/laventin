import LoginForm from "features/sign-in";
import { Typography, Layout, Stack } from "shared/ui";

export default function LoginScreen() {
  return (
    <Layout.PageWrap>
      <Stack gap={3}>
        <Typography.H1>Sign In</Typography.H1>
        <LoginForm />
      </Stack>
    </Layout.PageWrap>
  );
}
