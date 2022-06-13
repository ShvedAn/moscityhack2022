import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const Logo = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <MenuItem sx={{ display: "inline-flex", gap: 1, borderRadius: 10 }}>
      <CircleIcon sx={{ fill: "#5A3DFF" }} />
      <Typography
        variant="overline"
        sx={{ color: "#5A3DFF", fontSize: 16, fontWeight: 600 }}
      >
        Внимание
      </Typography>
    </MenuItem>
  </Link>
);

export default Logo;
