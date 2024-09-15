import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { IIconButtonProps, IStyledIconButtonProps } from "./IconButton.type";

const StyledIconButton = styled.button<IStyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: ${(p) => p.theme.indents.calc(4)};
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.common.foreground};

  ${(p) =>
    p.theme.helpers.createTransition([
      "box-shadow",
      "background-color",
      "color",
      "border-color",
    ])}

  ${(p) =>
    (p.onClick || p.type === "submit" || p.as === "a") &&
    css`
      cursor: pointer;
    `}

  &:focus-visible {
    outline: ${(p) => p.theme.indents.borderWidth} solid
      ${(p) => p.theme.colors.accent.main};
    outline-offset: 3px;
  }

  ${(p) =>
    p.$variant === "primary" &&
    css`
      background-image: ${(p) => p.theme.colors.gradient.primary};
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;

      ${p.theme.effectStyles.primary.fullBehavior}
    `}

  ${(p) =>
    p.$variant === "secondary" &&
    css`
      background-image: ${(p) => p.theme.colors.gradient.secondary};
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;
      color: ${(p) => p.theme.colors.common.background};

      ${p.theme.effectStyles.secondary.fullBehavior}
    `}

  ${(p) =>
    p.$variant === "outlined" &&
    css`
      background-color: ${(p) => p.theme.colors.primary.darker};
      border: ${(p) => p.theme.indents.borderWidth} solid
        ${(p) => p.theme.colors.primary.main};

      ${p.theme.effectStyles.outlined.fullBehavior}
    `}

  ${(p) =>
    p.$variant === "ghost" &&
    css`
      background-color: transparent;
      color: ${(p) => p.theme.colors.gray[200]};

      ${p.theme.effectStyles.ghost.fullBehavior}

      &:focus-visible {
        outline-offset: 0;
      }
    `}

  ${(p) =>
    p.$size === "small" &&
    css`
      width: 30px;
      height: 30px;
      font-size: 16px;
    `};
  ${(p) =>
    p.$size === "middle" &&
    css`
      width: 40px;
      height: 40px;
      font-size: 20px;
    `};
  ${(p) =>
    p.$size === "large" &&
    css`
      width: 52px;
      height: 52px;
      font-size: 24px;
    `};
`;

function IconButton({
  icon,
  variant = "primary",
  size = "middle",
  type = "button",
  tabIndex = 0,
  className,
  ...buttonProps
}: IIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledIconButton
      $size={size}
      $variant={variant}
      className={className}
      type={type}
      tabIndex={tabIndex}
      {...buttonProps}
    >
      {icon}
    </StyledIconButton>
  );
}

const WrappedButton = styled(IconButton)``;

export default WrappedButton;
