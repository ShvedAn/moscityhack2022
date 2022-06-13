import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EventCard from "components/EventCard";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Link, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import EventFilters from "./Components/EventFilters";
import eventsStore from "stores/events-store";

const Events = observer(() => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Нашли 485 заданий, которые вам подойдут
      </Typography>
      <Grid sx={{ p: 2 }} container spacing={2}>
        <Grid xs={4} item>
          <EventFilters />
        </Grid>
        <Grid xs={8} item>
          <Stack display="flex" flexWrap="wrap" direction="row" gap={2}>
            {!eventsStore.isLoading &&
              eventsStore.data?.map((x, i) => (
                <Link
                  key={i}
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
        </Grid>
      </Grid>
      <Outlet />
    </Container>
  );
});

export default Events;
