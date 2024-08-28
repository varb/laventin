import { ButtonHTMLAttributes } from "react";
import { IIconButtonProps, IStyledIconButtonProps } from "./IconButton.type";
import styled, { css } from "styled-components";

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

    ${(p) =>
    p.$variant === "primary" &&
    css`
      background-image: ${(p) => p.theme.colors.gradient.primary};
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;

      &:hover {
        ${p.theme.effectStyles.primary.hover}
      }

      &:active {
        ${p.theme.effectStyles.primary.active}
      }

      &:disabled {
        ${p.theme.effectStyles.primary.disabled}
      }
    `}

  ${(p) =>
    p.$variant === "secondary" &&
    css`
      background-image: ${(p) => p.theme.colors.gradient.secondary};
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;
      color: ${(p) => p.theme.colors.common.background};

      &:hover {
        ${p.theme.effectStyles.secondary.hover}
      }

      &:active {
        ${p.theme.effectStyles.secondary.active}
      }

      &:disabled {
        ${p.theme.effectStyles.secondary.disabled}
      }
    `}

  ${(p) =>
    p.$variant === "outlined" &&
    css`
      background-color: ${(p) => p.theme.colors.primary.darker};
      border: 2px solid ${(p) => p.theme.colors.primary.main};

      &:hover {
        ${p.theme.effectStyles.outlined.hover}
      }

      &:active {
        ${p.theme.effectStyles.outlined.active}
      }

      &:disabled {
        ${p.theme.effectStyles.outlined.disabled}
      }
    `}

  ${(p) =>
    p.$variant === "ghost" &&
    css`
      background-color: transparent;
      color: ${(p) => p.theme.colors.gray[200]};

      &:hover {
        ${p.theme.effectStyles.ghost.hover}
      }

      &:active {
        ${p.theme.effectStyles.ghost.active}
      }

      &:disabled {
        ${p.theme.effectStyles.ghost.disabled}
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
  className,
  ...buttonProps
}: IIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledIconButton
      $size={size}
      $variant={variant}
      className={className}
      type={type}
      {...buttonProps}
    >
      {icon}
    </StyledIconButton>
  );
}

const WrappedButton = styled(IconButton)``;

export default WrappedButton;
