import Helmet from "react-helmet";

import { AddTrackForm } from "widgets/AddTrackForm";
import { Typography, Layout, Stack } from "shared/ui";

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
