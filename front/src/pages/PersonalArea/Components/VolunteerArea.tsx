import { Typography, Stack } from "@mui/material";
import CustomCard from "components/CustomCard";
import EventCard from "components/EventCard";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import eventsStore from "stores/events-store";

const VolunteerArea = observer(() => {
  return (
    <>
      <CustomCard variant="grey" sx={{ p: 4, m: 2, mt: 0 }}>
        <Typography fontWeight="bold">Главная</Typography>
        <Typography variant="h4">Мои события</Typography>
        <Stack direction="row" overflow="scroll" gap={2} sx={{ pt: 5, pb: 5 }}>
          {eventsStore.subscribed?.map((x) => (
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
        <Typography variant="h4">Советуем посетить</Typography>
        <Stack direction="row" overflow="scroll" gap={2} sx={{ pt: 5, pb: 5 }}>
          {eventsStore.data
            ?.filter((x) => !eventsStore.subscribed?.find((y) => y.id === x.id))
            .slice(0, 15)
            .map((x) => (
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
    </>
  );
});

export default VolunteerArea;
