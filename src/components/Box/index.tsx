import styled, { css } from 'styled-components';

interface StyleBox {
  mt: number;
  mb: number;
  ml: number;
  mr: number;
  my: number;
  mx: number;
}

type StylesBoxProps = Partial<StyleBox>

interface BoxProps {
  children?: JSX.Element;
}

const StyledBox = styled.div<StylesBoxProps>`
  ${(p) => p.my && css`
    margin-top: ${p.theme.indents.calc(p.my)};
    margin-bottom: ${p.theme.indents.calc(p.my)};
  `}
  ${(p) => p.mx && css`
    margin-left: ${p.theme.indents.calc(p.mx)};
    margin-right: ${p.theme.indents.calc(p.mx)};
  `}
  ${(p) => p.mt && css`
    margin-bottom: ${p.theme.indents.calc(p.mt)};
  `}
  ${(p) => p.mb && css`
    margin-bottom: ${p.theme.indents.calc(p.mb)};
  `}
  ${(p) => p.ml && css`
    margin-bottom: ${p.theme.indents.calc(p.ml)};
  `}
  ${(p) => p.mr && css`
    margin-bottom: ${p.theme.indents.calc(p.mr)};
  `}
`;

export default function Box({ children, ...styles }: BoxProps & StylesBoxProps) {
  return (
    <StyledBox {...styles}>{children}</StyledBox>
  )
}
