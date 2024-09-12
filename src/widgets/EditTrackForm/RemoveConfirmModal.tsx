import { useState } from "react";
import { Trash, X } from "@phosphor-icons/react";
import {
  useModalContext,
  useModalFabric,
} from "shared/providers/ModalProvider";
import Button from "shared/ui/Button";
import Modal from "shared/ui/Modal";
import { removeTrack } from "./api/track";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "shared/model/route-names";

interface RemoveConfirmModalProps {
  id: string;
}

export default function RemoveConfirmModal({ id }: RemoveConfirmModalProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { closeModal } = useModalContext();
  const navigate = useNavigate();

  const onConfirm = async () => {
    setIsLoading(true);

    try {
      await removeTrack(id);
      closeModal();
      // #TODO: call remove success toast
      navigate(`${RouteNames.tracks}`, { replace: true });
    } catch (e) {
      // #TODO: call error toast
      console.error("catched", e);
    }

    setIsLoading(false);
  };

  return (
    <Modal
      title="Delete track"
      secondary={`Are you sure you want \nto delete the track?`}
      onClose={closeModal}
      actionSlot={
        <>
          <Button
            variant="secondary"
            iconLeft={<X />}
            onClick={closeModal}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button variant="error" iconLeft={<Trash />} onClick={onConfirm}>
            Remove
          </Button>
        </>
      }
    />
  );
}

export const useRemoveConfirmModal = () =>
  useModalFabric<RemoveConfirmModalProps>(RemoveConfirmModal);
