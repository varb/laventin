import Helmet from "react-helmet";

import { AddTrackForm } from "widgets/AddTrackForm";
import { Box, Typography, Layout } from "shared/ui";

export default function AddTrackPage() {
  return (
    <>
      <Helmet>
        <title>Add new track</title>
      </Helmet>
      <Layout.PageWrap style={{ marginBottom: 32 }}>
        <Box mb={3}>
          <Typography.H1>New Track</Typography.H1>
          <AddTrackForm />
        </Box>
      </Layout.PageWrap>
    </>
  );
}
