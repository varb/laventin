import { useModalContext } from "./ModalProvider";

export function useModalFabric<T extends unknown>(component: React.FC<T>) {
  const modalContext = useModalContext();

  if (!modalContext) {
    throw new Error("Use modal hooks inside ModalProvider");
  }

  const { openModal, closeModal } = modalContext;

  const openModalWithParams = (props: T) => {
    openModal(component, props);
  };

  return { openModal: openModalWithParams, closeModal };
}
