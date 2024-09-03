import styled, { css } from "styled-components";
import Stack from "../Stack";
import Typography from "../Typography";
import { IconButton } from "..";

export const StyledAsideSlot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: ${(p) => p.theme.colors.gray[300]};
  font-size: 20px;

  & ${IconButton} {
    width: 32px;
    height: 32px;
  }
`;

export const StyledInput = styled.input`
  flex: 1 1 auto;
  align-self: stretch;
  width: 0;
  margin: 0;
  padding: 0 14px;

  background-color: transparent;
  border: 0;
  border-radius: ${(p) => p.theme.indents.calc(1)};
  color: ${(p) => p.theme.colors.common.foreground};
  font-size: 16px;
  outline: none;

  &::placeholder {
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

export const StyledInputArea = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
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

  & ${StyledAsideSlot} {
    font-size: 20px;

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

export const StyledHelperText = styled.span`
  color: ${(p) => p.theme.colors.gray[400]};
  font-size: 12px;
`;

export const StyledTextInputRoot = styled(Stack)<{ $disabled?: boolean }>`
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

      ${StyledAsideSlot}, ${Typography.Label}, ${StyledHelperText} {
        color: ${(p) => p.theme.colors.gray[700]};
      }
    `}
`;
