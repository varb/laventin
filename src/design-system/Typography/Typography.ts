import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(p) => p.theme.colors.text.primary};
  font-size: 28px;
  font-weight: 900;
  line-height: 34px;
`;

export const H2 = styled.h2`
  color: ${(p) => p.theme.colors.primary.main};
  font-size: 24px;
  font-weight: 900;
  line-height: 29px;
`;

export const H3 = styled.h3`
  color: ${(p) => p.theme.colors.primary.main};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
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
  TextLink,
};

export default typography;
