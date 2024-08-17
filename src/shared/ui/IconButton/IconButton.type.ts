export type IconButtonVariant = "primary" | "outlined" | "secondary" | "ghost";
export type IconButtonSize = "small" | "middle" | "large";

export type IIconButtonProps = {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon?: React.ReactNode;
};
