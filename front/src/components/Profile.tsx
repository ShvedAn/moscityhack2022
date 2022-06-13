import { Stack, Box, Typography, Avatar } from "@mui/material";
import avatar from "icons/avatar.svg";
import { observer } from "mobx-react-lite";
import accountStore from "stores/account-store";
import CustomCard from "./CustomCard";

const Profile = observer(() => {
  let status: string;

  switch (accountStore.role) {
    case "volunteer":
      status = "Волонтер";
      break;
    case "organizer":
      status = "Организатор";
      break;
    case "sponsor":
      status = "Спонсор";
      break;
    default:
      throw Error("unknown role");
  }
  return (
    <CustomCard variant={"outline"} sx={{ p: 2, pl: 3, pr: 3 }}>
      <Stack gap={4} direction="row" justifyContent="space-between">
        <Box>
          <Typography>Александр Иванов</Typography>
          <Typography variant="caption" color="text.secondary">
            {status}
          </Typography>
        </Box>
        <Avatar src={avatar} />
      </Stack>
    </CustomCard>
  );
});

export default Profile;
