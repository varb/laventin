import React from "react";
import styled, { css } from "styled-components";
import { createTransition } from "shared/theme";

type ButtonVariant = "primary" | "outlined" | "secondary" | "ghost";
type ButtonSize = "small" | "middle" | "large";

type IButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: string | "full";
};

const primaryHover = css`
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.primary.main},
    inset 0 0 0 transparent;
`;

const primaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 1px 6px ${(p) => p.theme.colors.primary.dark};
  color: ${(p) => p.theme.colors.gray[100]};
`;

const primaryDisabled = css`
  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.gray[300]};
`;

const secondaryHover = css`
  box-shadow: 0px 2px 10px ${(p) => p.theme.colors.secondary.lighter},
    inset 0 0 0 transparent;
`;

const secondaryActive = css`
  box-shadow: 0 0 0 transparent,
    inset 0px 1px 6px ${(p) => p.theme.colors.secondary.darker};
  color: ${(p) => p.theme.colors.gray[800]};
`;

export const StyledButton = styled.button<Omit<IButtonProps, "children">>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: fit-content;
  ${(p) =>
    p.width &&
    css`
      width: ${p.width === "full" ? "100%" : p.width};
    `}

  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.common.foreground};

  ${(p) =>
    p.onClick &&
    css`
      cursor: pointer;
    `}

  ${createTransition(["box-shadow", "background-image", "color"])}

  ${(p) =>
    p.variant === "primary" &&
    css`
      background-image: ${(p) => p.theme.colors.gradient.primary};
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;

      &:hover {
        ${primaryHover}
      }

      &:active {
        ${primaryActive}
      }

      &:disabled {
        ${primaryDisabled}
      }
    `}

  ${(p) =>
    p.size === "small" &&
    css`
      gap: 6px;
      height: 30px;
      padding: 4px 12px;
      border-radius: ${p.theme.indents.base * 0.75}px;
      font-size: 14px;

      & ${StyledIcon} {
        font-size: 16px;
      }
    `};
  ${(p) =>
    p.size === "middle" &&
    css`
      gap: 8px;
      height: 40px;
      padding: 6px 20px;
      border-radius: ${p.theme.indents.base}px;
      font-size: 16px;

      & ${StyledIcon} {
        font-size: 20px;
      }
    `};
  ${(p) =>
    p.size === "large" &&
    css`
      gap: 10px;
      height: 52px;
      padding: 8px 32px;
      border-radius: ${p.theme.indents.base * 1.25}px;
      font-size: 20px;

      & ${StyledIcon} {
        font-size: 24px;
      }
    `};
`;

export const StyledIcon = styled.span`
  /* display: flex;
  flex-shrink: 0;
  aspect-ratio: 1 / 1; */
`;

export default function Button({
  variant = "primary",
  size = "middle",
  iconLeft,
  iconRight,
  children,
  width,
  ...buttonProps
}: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton variant={variant} size={size} {...buttonProps}>
      {iconLeft && <StyledIcon>{iconLeft}</StyledIcon>}
      {children}
      {iconRight && <StyledIcon>{iconRight}</StyledIcon>}
    </StyledButton>
  );
}
