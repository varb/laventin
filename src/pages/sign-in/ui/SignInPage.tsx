import LoginForm from "features/sign-in";
import { Typography, Layout } from "shared/ui";

export default function LoginScreen() {
  return (
    <Layout.PageWrap>
      <Typography.H1>Login</Typography.H1>
      <LoginForm />
    </Layout.PageWrap>
  );
}
