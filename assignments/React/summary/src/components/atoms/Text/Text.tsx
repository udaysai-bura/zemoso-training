  import { Typography } from "@mui/material";
  import React from "react";

  type TextProps = {
    children: React.ReactNode;
    variant?: "title" | "body" | "caption";
    className?: string;
    sx?: object;
    onClick?: () => void;
  };

  export const Text = ({
    children,
    variant = "body",
    className,
    sx,
    onClick,
  }: TextProps) => {
    const muiVariant =
      variant === "title"
        ? "h6"
        : variant === "caption"
        ? "caption"
        : "body2";

    return (
      <Typography
        variant={muiVariant}
        className={className}
        sx={sx}
        onClick={onClick}
      >
        {children}
      </Typography>
    );
  };
