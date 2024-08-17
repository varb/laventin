export type ButtonVariant = "primary" | "outlined" | "secondary" | "ghost";
export type ButtonSize = "small" | "middle" | "large";

export type IButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: string | "full";
};
