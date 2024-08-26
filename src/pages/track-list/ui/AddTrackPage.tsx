import { useState } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

import { Box, Typography, Layout } from "shared/ui";
import CreateOrUpdateTrackForm from "components/CreateOrUpdateTrackForm";
import { TrackFormData } from "modules/tracks/model/tracklist";
import { firebaseDB } from "shared/api/firebase";

export default function AddTrackPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async ({ id, ...data }: TrackFormData) => {
    console.log("onSubmit", data);
    setIsLoading(true);
    const trackRef = doc(firebaseDB, "tracks", id);
    await setDoc(trackRef, data);

    setIsLoading(false);
    navigate(`/t/${id}`, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Add new track</title>
      </Helmet>
      <Layout.PageWrap style={{ marginBottom: 32 }}>
        <Box mb={3}>
          <Typography.H1>New Track</Typography.H1>
          <CreateOrUpdateTrackForm onSubmit={onSubmit} />
          {isLoading && "Loading..."}
        </Box>
      </Layout.PageWrap>
    </>
  );
}
