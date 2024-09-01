import styled, { css } from "styled-components";
import {
  StyledAsideSlot,
  StyledInput,
  StyledTextInputRoot,
} from "./TextInput.styles";

export const StyledLeadingInputArea = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;

  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  border-radius: 0 ${(p) => p.theme.indents.calc(1)}
    ${(p) => p.theme.indents.calc(1)} 0;

  ${(p) =>
    p.theme.helpers.createTransition(["border-color", "box-shadow"], {
      duration: 150,
    })}

  ${StyledInput} {
    padding-left: ${(p) => p.theme.indents.calc(1)};
  }

  ${StyledAsideSlot} {
    font-size: 20px;

    &:last-child {
      padding: 0 ${(p) => p.theme.indents.calc(1)};
    }
  }
`;

export const StyledLeadingTextArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(1)};
  align-self: stretch;
  padding: 0 ${(p) => p.theme.indents.calc(1)} 0
    ${(p) => p.theme.indents.calc(1.75)};

  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  border-right: 0;
  border-radius: ${(p) => p.theme.indents.calc(1)} 0 0
    ${(p) => p.theme.indents.calc(1)};
  background-color: ${(p) => p.theme.colors.gray[900]};
  color: ${(p) => p.theme.colors.gray[500]};
`;

export const StyledLeadingInputWrapper = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: text;

  &:hover ${StyledLeadingInputArea} {
    border-color: ${(p) => p.theme.colors.gray[300]};
  }

  &:focus-within ${StyledLeadingInputArea} {
    border-color: ${(p) => p.theme.colors.primary.main};
    ${(p) => p.theme.effectStyles.primary.hover}
  }
`;

export const StyledLeadingInputRoot = styled(StyledTextInputRoot)`
  ${(p) =>
    p.$disabled &&
    css`
      ${StyledLeadingInputWrapper} {
        cursor: default;
        pointer-events: none;
      }

      ${StyledLeadingTextArea} {
        border-color: ${(p) => p.theme.colors.gray[800]};
        color: ${(p) => p.theme.colors.gray[700]};
      }

      ${StyledLeadingInputArea} {
        background-color: ${(p) => p.theme.colors.gray[900]};
        border-color: ${(p) => p.theme.colors.gray[800]};
        cursor: default;
      }
    `}
`;
