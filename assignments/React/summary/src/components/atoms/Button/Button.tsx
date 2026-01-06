import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  fullWidth?: boolean;
};

export const Button = ({
  label,
  onClick,
  variant = "primary",
  size = "large",
  fullWidth = true,
}: ButtonProps) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        mt: size === "large" ? 3 : 0,
        height: size === "large" ? 56 : 28,
        px: size === "large" ? 3 : 1.5,
        borderRadius: size === "large" ? 2 : 1,
        fontSize: size === "large" ? 14 : 12,
        backgroundColor:"#254ba5ff" ,
        color: "white" ,
        fontWeight: 600,
        textTransform: "none",
      }}
    >
      {label}
    </MuiButton>
  );
};
