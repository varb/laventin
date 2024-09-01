import { useState } from "react";
import styled, { css } from "styled-components";
import { CloudArrowUp } from "@phosphor-icons/react";

import FileButton from "shared/ui/FileButton";

const StyledIcon = styled.span`
  display: inline-flex;
  color: ${(p) => p.theme.colors.gray[500]};
`;

const StyledDropArea = styled.div<{ $isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(1)};
  position: relative;
  height: 200px;
  padding: ${(p) => p.theme.indents.calc(2.75)};

  border: 2px dashed
    ${(p) =>
      p.$isDragging ? p.theme.colors.gray[500] : p.theme.colors.gray[700]};
  border-radius: ${(p) => p.theme.indents.calc(1)};

  ${(p) =>
    p.$isDragging &&
    css`
      background-color: ${(p) => p.theme.colors.gray[800]};
      color: ${(p) => p.theme.colors.gray[300]};
    `}

  ${(p) =>
    p.theme.helpers.createTransition([
      "background-color",
      "border-color",
      "color",
    ])}
`;

type ImagePickerProps = {
  onChangeImage: (imageFile: File | null) => void;
};

export default function ImagePicker({ onChangeImage }: ImagePickerProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      onChangeImage(file);
      event.dataTransfer.clearData();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChangeImage(e.target.files[0]);
    }
  };

  return (
    <StyledDropArea
      $isDragging={isDragging}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <StyledIcon>
        <CloudArrowUp size={64} />
      </StyledIcon>

      <div>Drag and drop here or </div>

      <FileButton
        variant="secondary"
        size="small"
        onChange={handleImageChange}
        disabled={isDragging}
      >
        Browse artwork
      </FileButton>
    </StyledDropArea>
  );
}
