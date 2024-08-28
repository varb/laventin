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

  mask-image: linear-gradient(rgb(0 0 0 / 100%), #000);
  -webkit-mask-image: linear-gradient(rgb(0 0 0 / 100%), #000);

  ${(p) => p.theme.helpers.createTransition(["width"], { duration: 100 })}

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

export default function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <StyledProgressBar>
      {progress > 0 && <StyledIndicator style={{ width: `${progress}%` }} />}
    </StyledProgressBar>
  );
}
