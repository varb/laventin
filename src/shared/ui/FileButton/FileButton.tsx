import { useRef, ComponentPropsWithoutRef, ChangeEventHandler } from "react";
import Button from "../Button/Button";

type FileButtonProps = Omit<
  ComponentPropsWithoutRef<typeof Button>,
  "onChange"
> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileButton({
  onChange,
  onClick,
  children = "Select file",
  ...buttonProps
}: FileButtonProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onSelectFileButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick(e);
    }

    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <>
      <Button onClick={onSelectFileButtonClick} {...buttonProps}>
        {children}
      </Button>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={onChange}
        ref={inputFileRef}
      />
    </>
  );
}
