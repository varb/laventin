import { ButtonHTMLAttributes } from "react";
import { IIconButtonProps } from "./IconButton.type";
import styled from "styled-components";

const StyledIconButton = styled.button``;

function IconButton({
  icon,
  size,
  variant,
  className,
  ...buttonProps
}: IIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledIconButton className={className} {...buttonProps}>
      {icon}
    </StyledIconButton>
  );
}

const WrappedButton = styled(IconButton)``;

export default WrappedButton;
