import { Button, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Profile from "components/Profile";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import accountStore from "stores/account-store";
import eventsStore from "stores/events-store";
import OrganizerArea from "./Components/OrganizerArea";
import ProfileMenu from "./Components/ProfileMenu";
import SponsorArea from "./Components/SponsorArea";
import VolunteerArea from "./Components/VolunteerArea";

const PersonalArea = observer(() => {
  useEffect(() => {
    eventsStore.loadSubscribedEvents();
  }, []);

  if (eventsStore.isLoading) {
    return <Skeleton />;
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom style={{ paddingLeft: 50 }}>
        Личный кабинет
      </Typography>
      <Grid container direction="row" justifyContent="center" gap={2}>
        <Grid item md={3}>
          <Profile />
          <ProfileMenu sx={{ mt: 4 }} />
          <Stack gap={2} paddingTop={3}>
            {accountStore.role === "volunteer" && (
              <Button variant="outlined" fullWidth>
                Попросить помощь
              </Button>
            )}
            {accountStore.role === "organizer" && (
              <Button variant="contained" fullWidth>
                Создать мероприятие
              </Button>
            )}
            {accountStore.role !== "sponsor" && (
              <Button variant="outlined" fullWidth>
                Добавить серебрянного волонтера
              </Button>
            )}
            {accountStore.role === "sponsor" && (
              <Button variant="contained" fullWidth>
                Предложить помощь
              </Button>
            )}
          </Stack>
        </Grid>
        <Grid item md={8}>
          {accountStore.role === "volunteer" && <VolunteerArea />}
          {accountStore.role === "organizer" && <OrganizerArea />}
          {accountStore.role === "sponsor" && <SponsorArea />}
        </Grid>
      </Grid>
    </Container>
  );
});

export default PersonalArea;
