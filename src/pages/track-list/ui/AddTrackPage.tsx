import Helmet from "react-helmet";

import { AddTrackForm } from "widgets/AddTrackForm";
import Layout from "shared/ui/Layout";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";

export default function AddTrackPage() {
  return (
    <>
      <Helmet>
        <title>Add new track</title>
      </Helmet>
      <Layout.PageWrap>
        <Stack gap={3}>
          <Typography.H1>New Track</Typography.H1>
          <AddTrackForm />
        </Stack>
      </Layout.PageWrap>
    </>
  );
}
