import styled from "styled-components";
import Typography from "../Typography";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(p) => p.theme.colors.common.background}B3;
  backdrop-filter: blur(2px);
  padding: ${(p) => p.theme.indents.calc(4)};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.indents.calc(2.5)};

  padding: ${(p) => p.theme.indents.calc(3)};
  background-color: ${(p) => p.theme.colors.common.background};
  border: ${(p) => p.theme.indents.borderWidth} solid
    ${(p) => p.theme.colors.gray[800]};
  border-radius: 8px;

  text-align: center;
`;

const StyledSecondary = styled.p`
  color: ${(p) => p.theme.colors.gray[200]};
  white-space: pre-line;
`;

const StyledActionSlot = styled.div`
  display: flex;
  gap: ${(p) => p.theme.indents.calc(2)};
  align-items: center;
`;

export interface BaseModalProps {
  isOpen?: boolean;
}

interface ModalProps {
  title?: string;
  secondary?: React.ReactNode;
  actionSlot?: React.ReactNode;
  onClose?: () => void;
}

function Modal({ title, secondary, actionSlot, onClose }: ModalProps) {
  return (
    <StyledOverlay onClick={onClose}>
      <StyledContainer onClick={(e) => e.stopPropagation()}>
        {title && <Typography.H3>{title}</Typography.H3>}
        {secondary && <StyledSecondary>{secondary}</StyledSecondary>}
        {actionSlot && <StyledActionSlot>{actionSlot}</StyledActionSlot>}
      </StyledContainer>
    </StyledOverlay>
  );
}

export default Modal;
