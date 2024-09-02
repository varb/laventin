import React from "react";
import styled from "styled-components";
import { Check } from "@phosphor-icons/react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const StyledCheckboxMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${(p) => p.theme.indents.calc(0.75)};
  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  ${(p) =>
    p.theme.helpers.createTransition(["box-shadow", "border-color"], {
      duration: 150,
    })};
  font-size: 20px;
`;

const StyledCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

const StyledCheckboxRoot = styled.label`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.indents.calc(1.25)};
  position: relative;
  cursor: pointer;

  ${(p) =>
    p.theme.helpers.createTransition(["color"], {
      duration: 150,
    })};

  &:hover {
    ${StyledCheckboxInput} ~ ${StyledCheckboxMark} {
      border-color: ${(p) => p.theme.colors.gray[300]};
    }
    ${StyledCheckboxInput}:checked ~ ${StyledCheckboxMark} {
      border-color: ${(p) => p.theme.colors.primary.light};
    }
  }

  &:active {
    color: ${(p) => p.theme.colors.gray[200]};

    ${StyledCheckboxInput}:checked ~ ${StyledCheckboxMark} {
      border-color: ${(p) => p.theme.colors.primary.dark};
    }

    ${StyledCheckboxInput}:not(:checked) ~ ${StyledCheckboxMark} {
      border-color: ${(p) => p.theme.colors.gray[500]};
    }
  }

  & ${StyledCheckboxInput}:checked ~ ${StyledCheckboxMark} {
    border-color: ${(p) => p.theme.colors.primary.main};
  }

  & ${StyledCheckboxInput}:focus ~ ${StyledCheckboxMark} {
    ${(p) => p.theme.effectStyles.primary.hover}
  }

  & ${StyledCheckboxInput}:not(:checked):focus ~ ${StyledCheckboxMark} {
    ${(p) => p.theme.effectStyles.secondary.hover}
  }
`;

const StyledCheckboxLabel = styled.span`
  font-size: 16px;
`;

const Checkbox: React.FC<CheckboxProps> = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ label, ...props }, ref) => {
  return (
    <StyledCheckboxRoot>
      <StyledCheckboxInput ref={ref} {...props} />
      <StyledCheckboxMark>{props.checked && <Check />}</StyledCheckboxMark>
      {label && <StyledCheckboxLabel>{label}</StyledCheckboxLabel>}
    </StyledCheckboxRoot>
  );
});

export default Checkbox;
