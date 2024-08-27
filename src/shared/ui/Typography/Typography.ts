import styled from "styled-components";

export const H1 = styled.h1`
  ${(p) => p.theme.typography.header1};
`;

export const H2 = styled.h2`
  ${(p) => p.theme.typography.header2};
`;

export const H3 = styled.h3`
  ${(p) => p.theme.typography.header3};
`;

export const H4 = styled.h4`
  ${(p) => p.theme.typography.header4};
`;

export const H5 = styled.h5`
  ${(p) => p.theme.typography.header5};
`;

export const H6 = styled.h6`
  ${(p) => p.theme.typography.header6};
`;

export const Label = styled.span`
  ${(p) => p.theme.typography.label};
`;

export const TextLink = styled.a`
  color: ${(p) => p.theme.colors.primary.main};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
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
