import styled, { css } from "styled-components";

export interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  my?: number;
  mx?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  py?: number;
  px?: number;
}

export type StyledBoxProps = GetStyledComponentProps<
  BoxProps,
  "children" | "className"
>;

const StyledBox = styled.div<StyledBoxProps>`
  ${(p) =>
    p.$m &&
    css`
      margin: ${p.theme.indents.calc(p.$m)};
    `}
  ${(p) =>
    p.$my &&
    css`
      margin-top: ${p.theme.indents.calc(p.$my)};
      margin-bottom: ${p.theme.indents.calc(p.$my)};
    `}
  ${(p) =>
    p.$mx &&
    css`
      margin-left: ${p.theme.indents.calc(p.$mx)};
      margin-right: ${p.theme.indents.calc(p.$mx)};
    `}
  ${(p) =>
    p.$mt &&
    css`
      margin-top: ${p.theme.indents.calc(p.$mt)};
    `}
  ${(p) =>
    p.$mb &&
    css`
      margin-bottom: ${p.theme.indents.calc(p.$mb)};
    `}
  ${(p) =>
    p.$ml &&
    css`
      margin-left: ${p.theme.indents.calc(p.$ml)};
    `}
  ${(p) =>
    p.$mr &&
    css`
      margin-right: ${p.theme.indents.calc(p.$mr)};
    `}
  ${(p) =>
    p.$p &&
    css`
      padding: ${p.theme.indents.calc(p.$p)};
    `}
  ${(p) =>
    p.$py &&
    css`
      padding-top: ${p.theme.indents.calc(p.$py)};
      padding-bottom: ${p.theme.indents.calc(p.$py)};
    `}
  ${(p) =>
    p.$px &&
    css`
      padding-left: ${p.theme.indents.calc(p.$px)};
      padding-right: ${p.theme.indents.calc(p.$px)};
    `}
  ${(p) =>
    p.$pt &&
    css`
      padding-top: ${p.theme.indents.calc(p.$pt)};
    `}
  ${(p) =>
    p.$pb &&
    css`
      padding-bottom: ${p.theme.indents.calc(p.$pb)};
    `}
  ${(p) =>
    p.$pl &&
    css`
      padding-left: ${p.theme.indents.calc(p.$pl)};
    `}
  ${(p) =>
    p.$pr &&
    css`
      padding-right: ${p.theme.indents.calc(p.$pr)};
    `}
`;

export default function Box({ children, className, ...styles }: BoxProps) {
  return (
    <StyledBox
      $m={styles.m}
      $mt={styles.mt}
      $ml={styles.ml}
      $mb={styles.mb}
      $mr={styles.mr}
      $mx={styles.mx}
      $my={styles.my}
      $p={styles.p}
      $pt={styles.pt}
      $pl={styles.pl}
      $pb={styles.pb}
      $pr={styles.pr}
      $px={styles.px}
      $py={styles.py}
      className={className}
    >
      {children}
    </StyledBox>
  );
}
