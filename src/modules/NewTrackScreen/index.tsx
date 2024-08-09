import { useState } from "react";
import Helmet from "react-helmet";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

import { Box, Typography } from "design-system";
import CreateOrUpdateTrackForm from "components/CreateOrUpdateTrackForm";
import { PageWrap } from "components/Layout/styles";
import { TrackFormData } from "types/tracklist";
import { firebaseDB } from "network/firebase";
import { useNavigate } from "react-router-dom";

export default function NewTrackScreen() {
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
      <PageWrap style={{ marginBottom: 32 }}>
        <Box mb={3}>
          <Typography.H1>New Track</Typography.H1>
          <CreateOrUpdateTrackForm onSubmit={onSubmit} />
          {isLoading && "Loading..."}
        </Box>
      </PageWrap>
    </>
  );
}
