import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import Organizer from "components/Organizer";
import BookletAdvice from "components/BookletAdvice";
import EventMap from "components/EventMap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import eventsStore, { EventData } from "stores/events-store";
import { observer } from "mobx-react-lite";

const EventSuccessRegister = observer(() => {
  const params = useParams();
  const [currentEvent, setCurrentEvent] = useState<EventData>();

  useEffect(() => {
    console.log(params.id);
    if (!eventsStore.isLoading) {
      setCurrentEvent(
        eventsStore.data?.find((x) => x.id === Number(params.id))
      );
    }
  }, [params.id, eventsStore.isLoading]);

  if (!currentEvent) {
    return null;
  }

  return (
    <Container>
      <Grid container>
        <Grid item>
          <CheckCircleIcon fontSize="large" sx={{ fill: "#5A3DFF", pt: 1.4 }} />
        </Grid>
        <Grid item sx={{ pl: 2 }}>
          <Typography variant="h3">Будем вас ждать!</Typography>
          <Typography color="text.secondary" gutterBottom>
            С вами идут 145 человек
          </Typography>
          <Typography style={{ paddingTop: 15 }} variant="h5">
            Информация о событии
          </Typography>
          <Typography color="text.secondary">Тематика</Typography>
          <Typography>Экологическое волонтерство</Typography>
          <Typography color="text.secondary">Что нужно делать</Typography>
          <ul style={{ margin: 0, paddingLeft: 15 }}>
            <li>
              <Typography>уборка территории</Typography>
            </li>
            <li>
              <Typography>покраска бордюров</Typography>
            </li>
          </ul>
          <Typography color="text.secondary">Когда</Typography>
          <Typography>27 июня, 18.00</Typography>
          <Typography color="text.secondary">Где</Typography>
          <Typography>Москва, Садовая улица, дом 15</Typography>
          <EventMap data={[currentEvent]} />
          <Typography color="text.secondary">Выдаем</Typography>
          <Typography>Экипировку</Typography>
          <Typography color="text.secondary">Что получите от работы</Typography>
          <ul style={{ margin: 0, paddingLeft: 15 }}>
            <li>
              <Typography>благодарственные письма</Typography>
            </li>
            <li>
              <Typography>
                возможность присоединиться к команде волонтеров
              </Typography>
            </li>
          </ul>
          <Organizer />
          <BookletAdvice />
        </Grid>
      </Grid>
    </Container>
  );
});

export default EventSuccessRegister;
