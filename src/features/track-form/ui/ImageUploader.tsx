import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ImageSquare } from "@phosphor-icons/react";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  StorageError,
  UploadTask,
} from "firebase/storage";

import { firebaseStorage } from "shared/api";
import { Button, ProgressBar, Stack } from "shared/ui";

const imageSize = 152;

const StyledBackgroundIcon = styled.div`
  position: absolute;
  top: ${(p) => p.theme.indents.calc(2.75)};
  left: ${(p) => p.theme.indents.calc(2.75)};
  z-index: -1;
  width: ${imageSize}px;
  height: ${imageSize}px;
  color: ${(p) => p.theme.colors.gray[900]};
  pointer-events: none;

  img {
    display: block;
    max-width: 100%;
    border-radius: 4px;
    ${(p) => p.theme.effectStyles.cover.middle}
    filter: brightness(0.35);
  }
`;

const StyledFileName = styled.div`
  flex-grow: 1;
  ${(p) => p.theme.typography.label}
  ${(p) => p.theme.typography.truncateText}
`;

const StyledProgressValue = styled.span`
  color: ${(p) => p.theme.colors.gray[300]};
  ${(p) => p.theme.typography.label}
`;

interface ImageUploaderProps {
  image: File | null;
  onUploadDone: (imageUrl: string) => void;
  onUploadError: (error: StorageError) => void;
}

const ImageUploader = ({
  image,
  onUploadDone,
  onUploadError,
}: ImageUploaderProps) => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const uploadTaskRef = useRef<UploadTask | null>(null);
  const artwork = useMemo(() => image && URL.createObjectURL(image), [image]);

  const handleUpload = () => {
    if (!image) return;

    const storageRef = ref(firebaseStorage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTaskRef.current = uploadTask;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgressValue(progress);
      },
      (error) => {
        onUploadError(error);
        uploadTaskRef.current = null;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onUploadDone(downloadURL);
          uploadTaskRef.current = null;
        });
      }
    );
  };

  const handleCancel = () => {
    if (uploadTaskRef.current) {
      uploadTaskRef.current.cancel();
    }
  };

  useEffect(() => {
    if (!uploadTaskRef.current) {
      handleUpload();
    }
  }, [image]);

  return (
    <>
      <StyledBackgroundIcon>
        {artwork && image ? (
          <img src={artwork} alt={image.name} />
        ) : (
          <ImageSquare size={imageSize} />
        )}
      </StyledBackgroundIcon>

      <Stack gap={2} width="100%">
        <Stack direction="row" alignItems="center">
          <StyledFileName>{image?.name || "..."}</StyledFileName>
          <StyledProgressValue>{progressValue}%</StyledProgressValue>
          <Button variant="secondary" size="small" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
        <ProgressBar progress={progressValue} />
      </Stack>
    </>
  );
};

export default ImageUploader;
