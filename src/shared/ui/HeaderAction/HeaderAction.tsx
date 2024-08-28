import { ReactNode, useEffect } from "react";
import { useHeaderContext } from "shared/providers/HeaderProvider";

type HeaderActionProps = {
  children?: ReactNode;
};

export default function HeaderAction({ children }: HeaderActionProps) {
  const { setRightAction } = useHeaderContext();

  useEffect(() => {
    setRightAction(children);

    return () => setRightAction(null); // Clean up when unmounting
  }, []);

  return null;
}
