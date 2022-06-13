import { Avatar, AvatarGroup, Box, Tooltip, Typography } from "@mui/material";
import avatar from "icons/avatar.svg";

const Participants = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{ pt: 1 }}
    >
      <AvatarGroup spacing="medium">
        <Tooltip
          children={<Avatar src={avatar} />}
          title={"Иван Иванов"}
        ></Tooltip>
        <Tooltip
          children={<Avatar src={avatar} />}
          title={"Петр Петров"}
        ></Tooltip>
        <Tooltip
          children={<Avatar src={avatar} />}
          title={"Василий Васильев"}
        ></Tooltip>
        <Avatar>+5</Avatar>
      </AvatarGroup>
      <Typography variant="caption">Участвуют 8 человек</Typography>
    </Box>
  );
};

export default Participants;
