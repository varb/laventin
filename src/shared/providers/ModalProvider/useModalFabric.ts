import { useModalContext } from "./ModalProvider";

export function useModalFabric<T extends unknown>(component: React.FC<T>) {
  const { openModal, closeModal } = useModalContext();

  const openModalWithParams = (props: T) => {
    openModal(component, props);
  };

  return { openModal: openModalWithParams, closeModal };
}
