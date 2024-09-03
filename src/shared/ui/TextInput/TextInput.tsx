import { InputHTMLAttributes, useMemo, forwardRef } from "react";
import Typography from "../Typography";
import {
  StyledAsideSlot,
  StyledHelperText,
  StyledInput,
  StyledInputArea,
  StyledTextInputRoot,
} from "./TextInput.styles";
import {
  StyledLeadingInputArea,
  StyledLeadingInputRoot,
  StyledLeadingInputWrapper,
  StyledLeadingTextArea,
} from "./LeadingTextInput.styles";

type TextInputProps = {
  label?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  helperText?: string;
  leadingText?: string;
};

export default forwardRef<
  HTMLInputElement,
  TextInputProps & InputHTMLAttributes<HTMLInputElement>
>(function TextInput(
  {
    label,
    className,
    type = "text",
    leftSlot,
    rightSlot,
    disabled,
    helperText,
    leadingText,
    ...inputProps
  },
  ref
) {
  const {
    labelRender,
    helperTextRender,
    leftSlotRender,
    rightSlotRender,
    inputRender,
  } = useMemo(
    () => ({
      labelRender: label && <Typography.Label>{label}</Typography.Label>,
      leftSlotRender: leftSlot && <StyledAsideSlot>{leftSlot}</StyledAsideSlot>,
      rightSlotRender: rightSlot && (
        <StyledAsideSlot>{rightSlot}</StyledAsideSlot>
      ),
      helperTextRender: helperText && (
        <StyledHelperText>{helperText}</StyledHelperText>
      ),
      inputRender: (
        <StyledInput
          ref={ref}
          type={type}
          disabled={disabled}
          {...inputProps}
        />
      ),
    }),
    [label, leftSlot, rightSlot, helperText, type, disabled, inputProps]
  );

  if (leadingText) {
    return (
      <StyledLeadingInputRoot
        gap={0.5}
        className={className}
        $disabled={disabled}
      >
        {labelRender}

        <StyledLeadingInputWrapper>
          <StyledLeadingTextArea>
            {leftSlotRender}
            {leadingText}
          </StyledLeadingTextArea>

          <StyledLeadingInputArea>
            {inputRender}

            {rightSlotRender}
          </StyledLeadingInputArea>
        </StyledLeadingInputWrapper>

        {helperTextRender}
      </StyledLeadingInputRoot>
    );
  } else {
    return (
      <StyledTextInputRoot gap={0.5} className={className} $disabled={disabled}>
        {labelRender}

        <StyledInputArea>
          {leftSlotRender}

          {inputRender}

          {rightSlotRender}
        </StyledInputArea>

        {helperTextRender}
      </StyledTextInputRoot>
    );
  }
});
