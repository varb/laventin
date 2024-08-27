export type IconButtonVariant = "primary" | "outlined" | "secondary" | "ghost";
export type IconButtonSize = "small" | "middle" | "large";

export type IIconButtonProps = {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon?: React.ReactNode;
};

export type IStyledIconButtonProps = {
  [K in Exclude<
    keyof IIconButtonProps,
    "icon"
  > as `$${K}`]?: IIconButtonProps[K];
};
