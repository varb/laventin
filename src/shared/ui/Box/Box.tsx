import styled, { css } from "styled-components";

interface StyleBox {
  mt: number;
  mb: number;
  ml: number;
  mr: number;
  my: number;
  mx: number;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  py: number;
  px: number;
}

type StylesBoxProps = Partial<StyleBox>;

interface BoxProps {
  children?: React.ReactNode;
}

const StyledBox = styled.div<StylesBoxProps>`
  ${(p) =>
    p.my &&
    css`
      margin-top: ${p.theme.indents.calc(p.my)};
      margin-bottom: ${p.theme.indents.calc(p.my)};
    `}
  ${(p) =>
    p.mx &&
    css`
      margin-left: ${p.theme.indents.calc(p.mx)};
      margin-right: ${p.theme.indents.calc(p.mx)};
    `}
  ${(p) =>
    p.mt &&
    css`
      margin-top: ${p.theme.indents.calc(p.mt)};
    `}
  ${(p) =>
    p.mb &&
    css`
      margin-bottom: ${p.theme.indents.calc(p.mb)};
    `}
  ${(p) =>
    p.ml &&
    css`
      margin-left: ${p.theme.indents.calc(p.ml)};
    `}
  ${(p) =>
    p.mr &&
    css`
      margin-right: ${p.theme.indents.calc(p.mr)};
    `}
  ${(p) =>
    p.py &&
    css`
      margin-top: ${p.theme.indents.calc(p.py)};
      margin-bottom: ${p.theme.indents.calc(p.py)};
    `}
  ${(p) =>
    p.px &&
    css`
      margin-left: ${p.theme.indents.calc(p.px)};
      margin-right: ${p.theme.indents.calc(p.px)};
    `}
  ${(p) =>
    p.pt &&
    css`
      margin-top: ${p.theme.indents.calc(p.pt)};
    `}
  ${(p) =>
    p.pb &&
    css`
      margin-bottom: ${p.theme.indents.calc(p.pb)};
    `}
  ${(p) =>
    p.pl &&
    css`
      margin-left: ${p.theme.indents.calc(p.pl)};
    `}
  ${(p) =>
    p.pr &&
    css`
      margin-right: ${p.theme.indents.calc(p.pr)};
    `}
`;

export default function Box({
  children,
  ...styles
}: BoxProps & StylesBoxProps) {
  return <StyledBox {...styles}>{children}</StyledBox>;
}
