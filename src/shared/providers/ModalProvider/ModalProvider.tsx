import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  FC,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openModal: (Component: FC<any>, props: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<{
    Component: FC<any>;
    props: any;
  } | null>(null);

  const openModal = useCallback((Component: FC<any>, props: any) => {
    setModal({ Component, props });
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  const providerValue = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
      {modal &&
        createPortal(<modal.Component {...modal.props} />, document.body)}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
