import { ButtonHTMLAttributes } from "react";
import { IButtonProps } from "./Button.type";
import { StyledButton, StyledIcon } from "./Button.styles";
import styled from "styled-components";

function Button({
  variant = "primary",
  size = "middle",
  iconLeft,
  iconRight,
  children,
  width,
  ...buttonProps
}: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton variant={variant} size={size} {...buttonProps}>
      {iconLeft && <StyledIcon>{iconLeft}</StyledIcon>}
      {children}
      {iconRight && <StyledIcon>{iconRight}</StyledIcon>}
    </StyledButton>
  );
}

const WrappedButton = styled(Button)``;

export default WrappedButton;
