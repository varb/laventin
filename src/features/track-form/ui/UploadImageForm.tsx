import { useState } from "react";
import styled from "styled-components";
import { StorageError } from "firebase/storage";
import { useFormContext, useWatch } from "react-hook-form";

import { Stack, Typography } from "shared/ui";
import ImageUploader from "./ImageUploader";
import ImageViewer from "./ImageViewer";
import ImagePicker from "./ImagePicker";
import { TrackFormData } from "../model/trackForm.types";

const StyledUploadImage = styled(Stack)`
  position: relative;
  height: 200px;

  border: 2px dashed ${(p) => p.theme.colors.gray[700]};
  border-radius: ${(p) => p.theme.indents.calc(1)};
`;

interface UploadImageFormProps {
  label?: string;
}

const UploadImageForm = ({ label }: UploadImageFormProps) => {
  const { control, setValue } = useFormContext<TrackFormData>();
  const imageUrl = useWatch({ control, name: "coverUrl" });

  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "done">(
    imageUrl ? "done" : "idle"
  );
  const [artowrk, setArtowrk] = useState<File | null>(null);

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      setArtowrk(imageFile);
      setUploadState("uploading");
    }
  };

  const onUploadDone = (imageUrl: string) => {
    setValue("coverUrl", imageUrl);
    setUploadState("done");
  };

  const onUploadError = (error: StorageError) => {
    console.error("Error uploading image:", error);
    setUploadState("idle");
  };

  const onRemoveImage = () => {
    setArtowrk(null);
    setValue("coverUrl", "");
    setUploadState("idle");
  };

  return (
    <Stack gap={0.5}>
      {label && <Typography.Label as="label">{label}</Typography.Label>}

      {uploadState === "idle" && (
        <ImagePicker onChangeImage={handleImageChange} />
      )}

      {uploadState === "uploading" && (
        <StyledUploadImage justifyContent="center" alignItems="center" p={2.75}>
          <ImageUploader
            image={artowrk}
            onUploadDone={onUploadDone}
            onUploadError={onUploadError}
          />
        </StyledUploadImage>
      )}

      {uploadState === "done" && (
        <StyledUploadImage
          justifyContent="flex-start"
          gap={3}
          direction="row"
          alignItems="center"
          p={2.75}
        >
          <ImageViewer
            imageUrl={imageUrl}
            onChangeImage={handleImageChange}
            onRemoveImage={onRemoveImage}
          />
        </StyledUploadImage>
      )}
    </Stack>
  );
};

export default UploadImageForm;
