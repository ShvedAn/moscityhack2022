import { SxProps, Theme, Typography } from "@mui/material";
import CustomCard from "components/CustomCard";
import { observer } from "mobx-react-lite";
import accountStore from "stores/account-store";

const volunteerMenuItems = [
  "Главная",
  "Архив мероприятий",
  "Профиль волонтера",
  "Календарь занятости",
  "Мои бонусы",
  "Мои навыки",
  "Мои друзья",
  "Мои приглашения",
  "Отзывы",
];

const organizerMenuItems = [
  "Главная",
  "Архив мероприятий",
  "Настройки",
  "Мои волонтеры",
  "Мои приглашения",
  "Отзывы",
  "Отчеты о мероприятиях",
];

const sponsorMenuItems = [
  "Главная",
  "Архив мероприятий",
  "Настройки",
  "Отзывы",
  "Отчеты о мероприятиях",
];

const ProfileMenu = observer(({ sx }: { sx?: SxProps<Theme> }) => {
  let menuItems: string[];
  switch (accountStore.role) {
    case "volunteer":
      menuItems = volunteerMenuItems;
      break;
    case "organizer":
      menuItems = organizerMenuItems;
      break;
    case "sponsor":
      menuItems = sponsorMenuItems;
      break;
    default:
      throw new Error("unknown role");
  }
  return (
    <CustomCard variant={"outline"} sx={{ ...{ p: 4, pl: 3, pr: 3 }, ...sx }}>
      {menuItems.map((x) => (
        <Typography fontWeight="bold" variant="body2" lineHeight={2.5} key={x}>
          {x}
        </Typography>
      ))}
    </CustomCard>
  );
});

export default ProfileMenu;
