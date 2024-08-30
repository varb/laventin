import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Stack from "../Stack";
import Typography from "../Typography";
import { IconButton } from "..";

const StyledAsideSlot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: ${(p) => p.theme.colors.gray[300]};

  & ${IconButton} {
    width: 32px;
    height: 32px;
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  align-self: stretch;
  margin: 0;
  padding: 0 14px;

  background-color: transparent;
  border: 0;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  color: ${(p) => p.theme.colors.common.foreground};
  font-size: 16px;
  outline: none;

  &:placeholder {
    color: ${(p) => p.theme.colors.gray[700]};
  }

  &:has(+ ${StyledAsideSlot}) {
    padding-right: 0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(p) => p.theme.colors.primary.main};
    -webkit-box-shadow: 0 0 0px 1000px
      ${(p) => p.theme.colors.common.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const StyledInputArea = styled.label`
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

  & ${StyledAsideSlot} {
    &:first-child {
      padding-left: ${(p) => p.theme.indents.calc(1.75)};
      padding-right: ${(p) => p.theme.indents.calc(1)};

      & + ${StyledInput} {
        padding-left: 0;
      }
    }

    &:last-child {
      padding: 0 ${(p) => p.theme.indents.calc(1)};
    }

    & + ${StyledInput} {
      padding-left: 0;
    }
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
        {leftSlot && <StyledAsideSlot>{leftSlot}</StyledAsideSlot>}
        <StyledInput ref={ref} type={type} {...inputProps} />
        {rightSlot && <StyledAsideSlot>{rightSlot}</StyledAsideSlot>}
      </StyledInputArea>
    </Stack>
  );
});
