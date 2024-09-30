import styled from "styled-components";
import { DefaultThemeColors, ThemeColorPath } from "shared/theme";

const ColoredTypography = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "foreground",
})<{ foreground?: ThemeColorPath }>`
  color: ${(p) => {
    if (!p.foreground) return;

    // ['primary', 'main']
    const [parentKey, childKey] = p.foreground.split(".") as [
      keyof DefaultThemeColors,
      string
    ];

    const color =
      childKey && p.theme.colors[parentKey]
        ? (p.theme.colors[parentKey] as any)[childKey]
        : undefined;

    return color;
  }};
`;

const H1 = styled(ColoredTypography).attrs({ as: "h1" })`
  ${(p) => p.theme.typography.header1};
`;

const H2 = styled(ColoredTypography).attrs({ as: "h2" })`
  ${(p) => p.theme.typography.header2};
`;

const H3 = styled(ColoredTypography).attrs({ as: "h3" })`
  ${(p) => p.theme.typography.header3};
`;

const H4 = styled(ColoredTypography).attrs({ as: "h4" })`
  ${(p) => p.theme.typography.header4};
`;

const H5 = styled(ColoredTypography).attrs({ as: "h5" })`
  ${(p) => p.theme.typography.header5};
`;

const H6 = styled(ColoredTypography).attrs({ as: "h6" })`
  ${(p) => p.theme.typography.header6};
`;

const Label = styled(ColoredTypography).attrs(({ foreground }) => ({
  as: "span",
  foreground: foreground || "gray.300",
}))`
  ${(p) => p.theme.typography.label};
`;

const TextLink = styled.a`
  color: ${(p) => p.theme.colors.primary.main};
  cursor: pointer;
  text-decoration: underline;

  @media (hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }

  &:active {
    color: ${(p) => p.theme.colors.primary.dark};
  }

  &:focus-visible {
    outline: ${(p) => p.theme.indents.borderWidth} solid
      ${(p) => p.theme.colors.accent.main};
    outline-offset: ${(p) => p.theme.indents.borderWidth};
    border-radius: 2px;
  }
`;

const typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  TextLink,
};

export default typography;
