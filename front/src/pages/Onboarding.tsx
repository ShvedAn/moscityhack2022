import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import lamp from "images/lamp.png";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import eventsStore from "stores/events-store";
import DateRange from "components/DateRange";

const Onboarding = observer(() => {
  const [step, setStep] = useState(1);
  const screenCount = 4;

  return (
    <Container>
      {step !== 1 && (
        <Typography
          sx={{ textDecoration: "none", color: "grey", cursor: "pointer" }}
          variant="caption"
          onClick={() => setStep((prev) => prev - 1)}
        >
          {"< К предыдущему шагу"}
        </Typography>
      )}
      <Box sx={{ pt: 1, pb: 1 }}>
        <img src={lamp} alt="Лампа" />
      </Box>
      <Typography variant="caption">
        Шаг {step} из {screenCount}
      </Typography>
      {step === 1 && (
        <>
          <Typography variant="h4">
            Какую помощь вы готовы оказывать?
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("subject_2")}
                  onChange={() => eventsStore.toggleFilter("subject_2")}
                />
              }
              label="Хочу помочь экологии города"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("subject_3")}
                  onChange={() => eventsStore.toggleFilter("subject_3")}
                />
              }
              label="Хочу помогать животным"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("subject_10")}
                  onChange={() => eventsStore.toggleFilter("subject_10")}
                />
              }
              label="Хочу помогать на культурных проектах"
            />
            <FormControlLabel control={<Checkbox />} label="Другое" />
          </FormGroup>
        </>
      )}
      {step === 2 && (
        <>
          <Typography variant="h4">Сколько вам лет?</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("age_1")}
                  onChange={() => eventsStore.toggleFilter("age_1")}
                />
              }
              label="18 и меньше"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("age_2")}
                  onChange={() => eventsStore.toggleFilter("age_2")}
                />
              }
              label="от 18 до 45"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("age_3")}
                  onChange={() => eventsStore.toggleFilter("age_3")}
                />
              }
              label="45+"
            />
          </FormGroup>
        </>
      )}
      {step === 3 && (
        <>
          <Typography variant="h4">Где вам удобнее оказать помощь?</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("region_1")}
                  onChange={() => eventsStore.toggleFilter("region_1")}
                />
              }
              label="ЦАО"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("region_2")}
                  onChange={() => eventsStore.toggleFilter("region_2")}
                />
              }
              label="ЮВАО"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={eventsStore.isActiveFilter("region_3")}
                  onChange={() => eventsStore.toggleFilter("region_3")}
                />
              }
              label="САО"
            />
          </FormGroup>
        </>
      )}
      {step === 4 && (
        <>
          <Typography variant="h4">Когда вы хотите помогать?</Typography>
          <DateRange
            title="Выберите даты"
            valueFrom={""}
            onChangeFrom={(e) => console.log(e)}
            valueTo={""}
            onChangeTo={(e) => console.log(e)}
          />
        </>
      )}
      {step !== screenCount && (
        <Button variant="contained" onClick={() => setStep((prev) => prev + 1)}>
          Далее
        </Button>
      )}
      {step === screenCount && (
        <Link to="/events">
          <Button variant="contained">Завершить</Button>
        </Link>
      )}
    </Container>
  );
});

export default Onboarding;
