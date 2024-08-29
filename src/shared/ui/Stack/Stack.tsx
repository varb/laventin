import styled, { css, CSSProperties } from "styled-components";
import Box, { BoxProps } from "../Box";

export type StackProps = BoxProps & {
  direction?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  gap?: number;
};

const StyledStack = styled(Box)<GetStyledComponentProps<StackProps>>`
  display: flex;
  flex-direction: ${(p) => p.$direction};
  align-items: ${(p) => p.$alignItems};
  justify-content: ${(p) => p.$justifyContent};
  gap: ${(p) => p.theme.indents.calc(p.$gap as number)};
  width: ${(p) => p.$width};
`;

function Stack({
  children,
  className,
  direction = "column",
  justifyContent,
  alignItems,
  width,
  gap = 1,
  ...otherProps
}: StackProps) {
  return (
    <StyledStack
      className={className}
      $direction={direction}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      $width={width}
      {...otherProps}
    >
      {children}
    </StyledStack>
  );
}

const WrappedStack = styled(Stack)``;

export default WrappedStack;
