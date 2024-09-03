import { forwardRef, TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Notches } from "@phosphor-icons/react";

import Typography from "../Typography";
import Stack from "../Stack";

const MIN_TEXTAREA_HEIGHT = 100;

const StyledInput = styled.textarea`
  flex: 1 1 auto;
  align-self: stretch;
  width: 0;
  margin: 0;
  min-height: ${MIN_TEXTAREA_HEIGHT - 4}px;
  padding: ${(p) => `${p.theme.indents.calc(1)} ${p.theme.indents.calc(1.75)}`};

  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  color: ${(p) => p.theme.colors.common.foreground};
  font-size: 16px;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${(p) => p.theme.colors.gray[700]};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(p) => p.theme.colors.primary.main};
    -webkit-box-shadow: 0 0 0px 1000px
      ${(p) => p.theme.colors.common.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-webkit-resizer {
    width: 20px;
    height: 20px;
  }
`;

const StyledInputArea = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  /* height: 40px; */
  min-height: ${MIN_TEXTAREA_HEIGHT}px;
  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  border-radius: ${(p) => p.theme.indents.calc(1)};
  cursor: text;

  ${(p) =>
    p.theme.helpers.createTransition(["border-color", "box-shadow"], {
      duration: 150,
    })}

  &:hover {
    border-color: ${(p) => p.theme.colors.gray[300]};
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.primary.main};
    ${(p) => p.theme.effectStyles.primary.hover}
  }
`;

const StyledHelperText = styled.span`
  color: ${(p) => p.theme.colors.gray[300]};
  font-size: 12px;
`;

const StyledTextareaRoot = styled(Stack)<{ $disabled?: boolean }>`
  ${(p) =>
    p.$disabled &&
    css`
      color: ${(p) => p.theme.colors.gray[700]};

      ${StyledInputArea} {
        background-color: ${(p) => p.theme.colors.gray[900]};
        border-color: ${(p) => p.theme.colors.gray[800]};
        cursor: default;
      }

      ${StyledInput} {
        color: ${(p) => p.theme.colors.gray[700]};
        pointer-events: none;
      }

      ${Typography.Label}, ${StyledHelperText} {
        color: ${(p) => p.theme.colors.gray[700]};
      }
    `}
`;

const StyledResizeIcon = styled(Notches)`
  position: absolute;
  bottom: ${(p) => p.theme.indents.calc(0.5)};
  right: ${(p) => p.theme.indents.calc(0.5)};
  pointer-events: none;
  color: ${(p) => p.theme.colors.gray[500]};
`;

type TextAreaProps = {
  label?: string;
  helperText?: string;
};

export default forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextArea(
  { label, className, disabled, helperText, ...textareaProps },
  ref
) {
  return (
    <StyledTextareaRoot gap={0.5} className={className} $disabled={disabled}>
      {label && <Typography.Label>{label}</Typography.Label>}

      <StyledInputArea>
        <StyledInput ref={ref} disabled={disabled} {...textareaProps} />
        {!disabled && <StyledResizeIcon size={12} />}
      </StyledInputArea>

      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </StyledTextareaRoot>
  );
});
