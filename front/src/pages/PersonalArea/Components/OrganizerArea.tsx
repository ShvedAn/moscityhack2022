import { Typography, Stack, Box, Avatar, Button, Chip } from "@mui/material";
import CustomCard from "components/CustomCard";
import EventCard from "components/EventCard";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import eventsStore from "stores/events-store";
import avatar from "icons/avatar.svg";

const volunteers = [
  { name: "Иван Александрович", role: "Волонтер", exp: "Новичок" },
  { name: "Александр Васильев", role: "Волонтер", exp: "Серебрянный волонтер" },
  { name: "Дмитрий Александров", role: "Спонсор" },
  { name: "Александр Петров", role: "Волонтер", exp: "Помогает пожилым" },
];

const OrganizerArea = observer(() => {
  return (
    <>
      <CustomCard variant="grey" sx={{ p: 4, m: 2, mt: 0 }}>
        <Typography fontWeight="bold">Главная</Typography>
        <Typography variant="h4">Предстоящие мероприятия</Typography>
        <Stack direction="row" overflow="scroll" gap={2} sx={{ pt: 5, pb: 5 }}>
          {eventsStore.subscribed?.slice(0, 15).map((x) => (
            <Link
              key={x.id}
              to={`/events/${x.id}`}
              style={{ textDecoration: "none" }}
            >
              <EventCard
                title={x.data.Fields.NAME}
                address={x.data.Fields.PROPERTY_22 ?? "Нет адреса"}
                imgSrc={x.data.Fields.DETAIL_PICTURE}
                time={String(x.data.Props.DATE_START.VALUE)}
              />
            </Link>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard variant="grey" sx={{ p: 4, m: 2, mt: 0 }}>
        <Typography variant="h4" gutterBottom>
          Пригласить на мероприятие
        </Typography>
        {volunteers.map((x) => (
          <Stack key={x.name}>
            <Box
              sx={{ backgroundColor: "white", borderRadius: 5, p: 2, mt: 1 }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack gap={4} direction="row">
                  <Avatar src={avatar} />
                  <Box>
                    <Typography>{x.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {x.role}
                    </Typography>
                  </Box>
                </Stack>
                {x.exp && <Chip label={x.exp} />}
                <Button>Пригласить</Button>
              </Stack>
            </Box>
          </Stack>
        ))}
      </CustomCard>
    </>
  );
});

export default OrganizerArea;
