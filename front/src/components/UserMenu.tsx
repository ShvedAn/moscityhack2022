import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import accountStore, { Role } from "stores/account-store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const UserMenu = observer(
  ({
    anchorEl,
    open,
    handleClose,
  }: {
    anchorEl: Element | undefined;
    open: boolean;
    handleClose: () => void;
  }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      accountStore.setRole((event.target as HTMLInputElement).value as Role);
    };

    if (!anchorEl) {
      return null;
    }

    return (
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{ elevation: 10 }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <FormControl sx={{ p: 2, pt: 1 }}>
          <FormLabel id="role-label">Роль</FormLabel>
          <RadioGroup
            aria-labelledby="role-label"
            value={accountStore.role}
            onChange={handleChange}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={"volunteer" as Role}
              control={<Radio />}
              label="Волонтер"
            />
            <FormControlLabel
              value={"organizer" as Role}
              control={<Radio />}
              label="Организатор"
            />
            <FormControlLabel
              value={"sponsor" as Role}
              control={<Radio />}
              label="Спонсор"
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <MenuItem>
          <Link
            to="/personalArea"
            style={{ textDecoration: "none", color: "#272727" }}
          >
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            Личный кабинет
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Пригласить друга
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выход
        </MenuItem>
      </Menu>
    );
  }
);

export default UserMenu;
