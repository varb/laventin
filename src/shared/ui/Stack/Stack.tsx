import styled, { css } from "styled-components";
import Box, { BoxProps } from "../Box/Box";

export type StackProps = BoxProps & {
  direction?: "row" | "column";
  gap?: number;
};

const StyledStack = styled(Box)<GetStyledComponentProps<StackProps>>`
  display: flex;
  flex-direction: ${(p) => p.$direction};
  ${(p) =>
    p.$gap &&
    css`
      gap: ${p.theme.indents.calc(p.$gap)};
    `}
`;

export default function Stack({
  children,
  className,
  direction = "column",
  gap,
}: StackProps) {
  return (
    <StyledStack className={className} $direction={direction} $gap={gap}>
      {children}
    </StyledStack>
  );
}
