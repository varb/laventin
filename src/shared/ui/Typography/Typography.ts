import styled from "styled-components";

const H1 = styled.h1`
  ${(p) => p.theme.typography.header1};
`;

const H2 = styled.h2`
  ${(p) => p.theme.typography.header2};
`;

const H3 = styled.h3`
  ${(p) => p.theme.typography.header3};
`;

const H4 = styled.h4`
  ${(p) => p.theme.typography.header4};
`;

const H5 = styled.h5`
  ${(p) => p.theme.typography.header5};
`;

const H6 = styled.h6`
  ${(p) => p.theme.typography.header6};
`;

const Label = styled.span`
  color: ${(p) => p.theme.colors.gray[100]};
  ${(p) => p.theme.typography.label};
`;

const TextLink = styled.a`
  color: ${(p) => p.theme.colors.primary.main};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
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
