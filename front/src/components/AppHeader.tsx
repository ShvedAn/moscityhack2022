import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuItem from "@mui/material/MenuItem";
import avatar from "icons/avatar.svg";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import Search from "./Search";
import Logo from "./Logo";

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <>
      <Grid
        sx={{ p: 2 }}
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Link to="/events" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem sx={{ height: "42px", borderRadius: 10 }}>
              <Typography sx={{ fontWeight: 600 }}>
                Актуальные события
              </Typography>
            </MenuItem>
          </Link>
        </Grid>
        <Grid item xs={5} flexGrow={1}>
          <Search />
        </Grid>
        <Grid item>
          <MenuItem sx={{ height: "42px", borderRadius: 10 }}>
            <FavoriteBorderIcon sx={{ fill: "#5A3DFF" }} />
            <Typography sx={{ color: "#5A3DFF", fontWeight: 600 }}>
              Стать спонсором
            </Typography>
          </MenuItem>
        </Grid>
        <Grid item>
          <Tooltip title="Аккаунт">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </>
  );
};

export default AppHeader;
