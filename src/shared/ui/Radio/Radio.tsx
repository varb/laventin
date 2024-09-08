import React from "react";
import styled from "styled-components";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const StyledRadioMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${(p) => p.theme.indents.calc(2)};
  border: 2px solid ${(p) => p.theme.colors.gray[700]};
  ${(p) =>
    p.theme.helpers.createTransition(["box-shadow", "border-color"], {
      duration: 150,
    })};
`;

const StyledRadioInnerCircle = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.common.foreground};
  display: none;
`;

const StyledRadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

const StyledRadioRoot = styled.label`
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
    ${StyledRadioInput} ~ ${StyledRadioMark} {
      border-color: ${(p) => p.theme.colors.gray[300]};
    }
    ${StyledRadioInput}:checked ~ ${StyledRadioMark} {
      border-color: ${(p) => p.theme.colors.primary.light};
    }
  }

  &:active {
    color: ${(p) => p.theme.colors.gray[200]};

    ${StyledRadioInput}:checked ~ ${StyledRadioMark} {
      border-color: ${(p) => p.theme.colors.primary.dark};
    }

    ${StyledRadioInput}:not(:checked) ~ ${StyledRadioMark} {
      border-color: ${(p) => p.theme.colors.gray[500]};
    }
  }

  & ${StyledRadioInput}:checked ~ ${StyledRadioMark} {
    border-color: ${(p) => p.theme.colors.primary.main};

    ${StyledRadioInnerCircle} {
      display: block; /* Отображаем внутренний круг, если радио-кнопка выбрана */
    }
  }

  & ${StyledRadioInput}:focus-visible ~ ${StyledRadioMark} {
    outline: 2px solid ${(p) => p.theme.colors.accent.main};
    outline-offset: 3px;
  }
`;

const StyledRadioLabel = styled.span`
  font-size: 16px;
`;

const Radio: React.FC<RadioProps> = React.forwardRef<
  HTMLInputElement,
  RadioProps
>(({ label, ...props }, ref) => {
  return (
    <StyledRadioRoot>
      <StyledRadioInput ref={ref} {...props} />
      <StyledRadioMark>
        <StyledRadioInnerCircle />
      </StyledRadioMark>
      {label && <StyledRadioLabel>{label}</StyledRadioLabel>}
    </StyledRadioRoot>
  );
});

export default Radio;
