import styled from "styled-components";
import { Check, Swap, X } from "@phosphor-icons/react";

import IconButton from "shared/ui/IconButton";
import FileButton from "shared/ui/FileButton";
import Stack from "shared/ui/Stack";

const StyledImageWrapper = styled.div`
  position: relative;

  & ${IconButton} {
    background-color: ${(p) => p.theme.colors.gray[800]}aa;
  }
`;

const StyledRemoveButton = styled(IconButton)`
  position: absolute;
  top: ${(p) => p.theme.indents.calc(1)};
  right: ${(p) => p.theme.indents.calc(1)};
`;

const StyledUploadedImage = styled.img`
  display: block;
  max-width: 100%;
  width: 152px;
  height: 152px;
  aspect-ratio: 1 / 1;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  ${(p) => p.theme.effectStyles.cover.middle}
`;

const StyledDoneInfo = styled(Stack)`
  ${(p) => p.theme.typography.label}
  color: ${(p) => p.theme.colors.gray[300]};
`;

type ImageViewerProps = {
  imageUrl: string | null;
  onRemoveImage: () => void;
  onChangeImage: (imageFile: File | null) => void;
};

export default function ImageViewer({
  imageUrl,
  onChangeImage,
  onRemoveImage,
}: ImageViewerProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChangeImage(e.target.files[0]);
    }
  };

  return (
    <>
      <StyledImageWrapper>
        <StyledRemoveButton
          size="small"
          variant="ghost"
          icon={<X />}
          onClick={onRemoveImage}
        />

        <StyledUploadedImage
          src={imageUrl || "/art/empty-cover.svg"}
          alt="Uploaded"
        />
      </StyledImageWrapper>
      <Stack>
        <StyledDoneInfo gap={0.5} direction="row">
          <Check size={14} />
          Artwork uploaded
        </StyledDoneInfo>
        <FileButton
          variant="secondary"
          size="small"
          iconLeft={<Swap />}
          onChange={handleImageChange}
        >
          Replace
        </FileButton>
      </Stack>
    </>
  );
}
