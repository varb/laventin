import styled from "styled-components";

const StyledProgressBar = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${(p) => p.theme.colors.gray[800]};
  border-radius: 10px;
`;

const StyledIndicator = styled.div`
  max-width: 100%;
  height: 100%;
  border-radius: 10px;

  mask: linear-gradient(#fff 0 0);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(p) => p.theme.colors.gradient.primary};
  }
`;

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <StyledProgressBar>
      <StyledIndicator style={{ width: `${progress}%` }} />
    </StyledProgressBar>
  );
}
