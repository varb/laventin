import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Stack from "../Stack";
import Typography from "../Typography";
import { IconButton } from "..";

const StyledInputArea = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  border-radius: ${(p) => p.theme.indents.calc(1)};
  font-size: 20px;
  cursor: text;

  &:focus-within {
    border-color: ${(p) => p.theme.colors.primary.main};
    ${(p) => p.theme.effectStyles.primary.hover}
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  align-self: stretch;
  margin: 0;
  padding: 0 14px;

  background-color: transparent;
  border: 0;
  color: ${(p) => p.theme.colors.common.foreground};
  font-size: 16px;
  /* outline: none; */

  &:placeholder {
    color: ${(p) => p.theme.colors.gray[700]};
  }
`;

const AsideSlot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: ${(p) => p.theme.colors.gray[300]};

  & ${IconButton} {
    width: 32px;
    height: 32px;
  }
`;

type TextInputProps = {
  label?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export default React.forwardRef<
  HTMLInputElement,
  TextInputProps & InputHTMLAttributes<HTMLInputElement>
>(function TextInput(
  { label, className, type = "text", leftSlot, rightSlot, ...inputProps },
  ref
) {
  return (
    <Stack gap={0.5} className={className}>
      {label && <Typography.Label>{label}</Typography.Label>}

      <StyledInputArea>
        {leftSlot && <AsideSlot>{leftSlot}</AsideSlot>}
        <StyledInput ref={ref} type={type} {...inputProps} />
        {rightSlot && <AsideSlot>{rightSlot}</AsideSlot>}
      </StyledInputArea>
    </Stack>
  );
});
