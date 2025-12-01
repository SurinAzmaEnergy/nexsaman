import type { ButtonProps, SxProps, Theme } from "@mui/material";
import type { FC, ElementType, ReactNode } from "react";
import { Button } from "@mui/material";
import type { LinkProps } from "react-router";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  leftIcon?: ElementType;
  leftIconSx?: SxProps<Theme>;
  rightIcon?: ElementType;
  rightIconSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  to?: LinkProps["to"];
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  leftIcon: LeftIcon,
  leftIconSx,
  rightIcon: RightIcon,
  rightIconSx,
  sx,
  ...rest
}) => {
  return (
    <Button
      startIcon={RightIcon ? <RightIcon sx={{ ...rightIconSx }} /> : undefined}
      endIcon={
        LeftIcon ? <LeftIcon sx={{ mr: 0, ml: 0, ...leftIconSx }} /> : undefined
      }
      sx={{
        pr: LeftIcon ? 1 : 1.5,
        pl: RightIcon ? 1.5 : 1.5,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
