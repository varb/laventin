import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { ImageSquare } from "@phosphor-icons/react";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  StorageError,
  UploadTask,
} from "firebase/storage";

import { firebaseStorage } from "shared/api";
import Button from "shared/ui/Button";
import ProgressBar from "shared/ui/ProgressBar";
import Stack from "shared/ui/Stack";
import { useFormContext, useWatch } from "react-hook-form";
import { TrackFormData } from "../model/trackForm.types";

const IMAGE_SIZE = 152;

const StyledBackgroundIcon = styled.div`
  position: absolute;
  top: ${(p) => p.theme.indents.calc(2.75)};
  left: ${(p) => p.theme.indents.calc(2.75)};
  z-index: -1;
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
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
  const { control } = useFormContext<TrackFormData>();
  const slug = useWatch({ control, name: "slug" });

  const [progressValue, setProgressValue] = useState<number>(0);
  const uploadTaskRef = useRef<UploadTask | null>(null);
  const artwork = useMemo(() => image && URL.createObjectURL(image), [image]);
  const fileName = useMemo(() => {
    const salt = nanoid(5);
    const name =
      slug || image?.name.split(".").slice(0, -1).join(".") || "artwork";

    return `${name}-${salt}`;
  }, [slug, image]);

  const handleUpload = () => {
    if (!image) return;

    const storageRef = ref(firebaseStorage, `images/${fileName}`);
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
        {artwork && fileName ? (
          <img src={artwork} alt={fileName} />
        ) : (
          <ImageSquare size={IMAGE_SIZE} />
        )}
      </StyledBackgroundIcon>

      <Stack gap={2} width="100%">
        <Stack direction="row" alignItems="center">
          <StyledFileName>{fileName}</StyledFileName>
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
