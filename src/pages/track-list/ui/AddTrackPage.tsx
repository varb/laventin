import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";

import { AddTrackForm } from "widgets/AddTrackForm";
import { RouteNames } from "shared/model/route-names";
import Layout from "shared/ui/Layout";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";

export default function AddTrackPage() {
  const navigate = useNavigate();

  const onSubmit = (trackId: string) => {
    navigate(`${RouteNames.tracks}/${trackId}`, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Add new track</title>
      </Helmet>
      <Layout.PageWrap>
        <Stack gap={3}>
          <Typography.H1>New Track</Typography.H1>
          <AddTrackForm onSubmit={onSubmit} />
        </Stack>
      </Layout.PageWrap>
    </>
  );
}
