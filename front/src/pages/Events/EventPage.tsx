import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import cardImg from "images/cardImg.png";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import EventMap from "components/EventMap";
import eventsStore, { EventData } from "stores/events-store";
import { useEffect, useState } from "react";
import BookletAdvice from "components/BookletAdvice";
import Organizer from "components/Organizer";
import Participants from "components/Participants";
import CustomCard from "components/CustomCard";
import accountStore from "stores/account-store";
import { backendUrl } from "constants/routes";
import QrCode from "components/QrCode";

const EventPage = observer(() => {
  const navigate = useNavigate();
  const params = useParams();
  const [currentEvent, setCurrentEvent] = useState<EventData>();

  useEffect(() => {
    if (!eventsStore.isLoading) {
      setCurrentEvent(
        eventsStore.data?.find((x) => x.id === Number(params.id))
      );
    }
  }, [params.id, eventsStore.isLoading]);

  const handleAccept = () => {
    eventsStore.toggleSubscribe(Number(params.id)).then((isSubscribeAction) => {
      if (isSubscribeAction) {
        navigate(`/events/${params.id}/success`);
      } else {
        navigate("/events");
      }
    });
  };

  const imageSrcInternal = currentEvent?.data.Fields.DETAIL_PICTURE
    ? backendUrl + currentEvent?.data.Fields.DETAIL_PICTURE
    : cardImg;

  if (!currentEvent) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      <Grid container gap={2}>
        <Grid item xs={7}>
          <Typography variant="h2" gutterBottom>
            {currentEvent?.data.Fields.NAME}
          </Typography>
          <img
            src={imageSrcInternal}
            width="100%"
            alt="street"
            style={{ borderRadius: 32 }}
          />
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
          <Typography>
            {String(currentEvent.data.Props.DATE_START.VALUE)}
          </Typography>
          <Typography color="text.secondary">Где</Typography>
          <Typography>
            {currentEvent.data.Fields.PROPERTY_22 ?? "Нет адреса"}
          </Typography>
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
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ borderRadius: "32px", backgroundColor: "#EFEFEF", p: 4 }}>
            <Typography color="text.secondary">Когда</Typography>
            <Typography>27 июня, 18.00</Typography>
            <Typography color="text.secondary">Где</Typography>
            <Typography>Москва, Садовая улица, дом 15</Typography>
            <Typography color="text.secondary">
              Возрастные ограничения
            </Typography>
            <Typography>14+</Typography>
            {accountStore.role === "volunteer" && (
              <CustomCard variant="outline" sx={{ p: 2, m: 1 }}>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography>Я новичок</Typography>
                </Box>
                <Typography variant="caption">
                  Вас будет курировать опытный волонтер, который все объяснит и
                  покажет
                </Typography>
              </CustomCard>
            )}
            <Box display="flex" justifyContent="center" padding={2}>
              <Button variant="contained" onClick={handleAccept}>
                {eventsStore.isSubscribed(Number(params.id))
                  ? "Отмена"
                  : "Готов Помочь"}
              </Button>
            </Box>
            <Participants />
          </Box>
          <Organizer />
          <BookletAdvice />
          <QrCode />
        </Grid>
      </Grid>
      <Box height={100}></Box>
    </Container>
  );
});

export default EventPage;
