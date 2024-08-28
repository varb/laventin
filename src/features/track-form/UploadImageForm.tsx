import { useState } from "react";
import styled from "styled-components";
import { StorageError } from "firebase/storage";

import { Stack, Typography } from "shared/ui";
import ImageUploader from "./ImageUploader";
import ImageViewer from "./ImageViewer";
import ImagePicker from "./ImagePicker";

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
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "done">(
    "idle"
  );
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      setImage(imageFile);
      setUploadState("uploading");
    }
  };

  const onUploadDone = (imageUrl: string) => {
    setImageUrl(imageUrl);
    setUploadState("done");
  };

  const onUploadError = (error: StorageError) => {
    console.error("Error uploading image:", error);
    setUploadState("idle");
  };

  const onRemoveImage = () => {
    setImage(null);
    setImageUrl(null);
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
            image={image}
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
