import styled, { css } from "styled-components";
import { IStyledButtonProps } from "./Button.type";

export const StyledIcon = styled.span``;

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: fit-content;
  width: ${(p) =>
    p.$width ? (p.$width === "full" ? "100%" : p.$width) : "fit-content"};

  box-shadow: 0 0 0 transparent, inset 0 0 0 transparent;
  color: ${(p) => p.theme.colors.common.foreground};
  font-family: ${(p) => p.theme.typography.fontFamily.primary};
  font-weight: 600;
  letter-spacing: 0.05em;

  ${(p) =>
    p.theme.helpers.createTransition([
      "box-shadow",
      "background-color",
      "color",
      "border-color",
    ])}
  text-decoration: none;

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

  /* Sizes */;

  ${(p) =>
    p.$size === "small" &&
    css`
      gap: 6px;
      height: 30px;
      padding: 4px 12px;
      border-radius: ${p.theme.indents.calc(0.75)};
      font-size: 14px;

      & ${StyledIcon} {
        font-size: 16px;
      }
    `};
  ${(p) =>
    p.$size === "middle" &&
    css`
      gap: 8px;
      height: 40px;
      padding: 6px 20px;
      border-radius: ${p.theme.indents.calc(1)};
      font-size: 16px;

      & ${StyledIcon} {
        font-size: 20px;
      }
    `};
  ${(p) =>
    p.$size === "large" &&
    css`
      gap: 10px;
      height: 52px;
      padding: 8px 32px;
      border-radius: ${p.theme.indents.calc(1.25)};
      font-size: 20px;

      & ${StyledIcon} {
        font-size: 24px;
      }
    `};

  & ${StyledIcon} {
    display: contents;
  }
`;
