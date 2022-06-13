import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

type CustomCardProps = {
  children: ReactNode;
  variant: "outline" | "grey" | "white";
  sx?: SxProps<Theme>;
};

const CustomCard = ({ children, variant, sx }: CustomCardProps) => {
  let styles: SxProps;
  switch (variant) {
    case "grey":
      styles = { borderRadius: "32px", backgroundColor: "#EFEFEF" };
      break;
    case "outline":
      styles = {
        borderRadius: "32px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#e3e3e3",
      };
      break;
    case "white":
      styles = { borderRadius: "32px", backgroundColor: "#fffff" };
      break;
    default:
      throw new Error("unknown variant");
  }

  return <Box sx={{ ...styles, ...sx }}>{children}</Box>;
};

export default CustomCard;
