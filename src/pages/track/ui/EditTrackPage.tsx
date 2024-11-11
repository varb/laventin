import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import { EditTrackForm } from "widgets/EditTrackForm";
import Layout from "shared/ui/Layout";
import Stack from "shared/ui/Stack";
import Typography from "shared/ui/Typography";
import { RouteNames } from "shared/model/route-names";
import ModalProvider from "shared/providers/ModalProvider";
import { useTrackInfo } from "../lib/useTrackInfo";

export default function EditTrackPage() {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const { data: trackInfo, loading } = useTrackInfo(id);

  const onSubmit = (trackId: string) => {
    navigate(`${RouteNames.tracks}/${trackId}`, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Edit track</title>
      </Helmet>
      <Layout.PageWrap>
        <Stack gap={3}>
          <Typography.H1>Edit Track</Typography.H1>
          {loading && "Loading..."}
          {trackInfo && (
            <ModalProvider>
              <EditTrackForm trackInfo={trackInfo} onSubmit={onSubmit} />
            </ModalProvider>
          )}
        </Stack>
      </Layout.PageWrap>
    </>
  );
}
