import LoginForm from "features/sign-in";
import Layout from "shared/ui/Layout";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";

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
