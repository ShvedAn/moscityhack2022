import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import eventsStore from "stores/events-store";
import { observer } from "mobx-react-lite";
import DateRange from "components/DateRange";
import Box from "@mui/material/Box";

//TODO генерить по структуре
const EventFilters = observer(() => (
  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">Формат проведения</FormLabel>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Онлайн" />
      <FormControlLabel control={<Checkbox />} label="Оффлайн" />
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Тематика
    </FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_1")}
            onClick={() => eventsStore.toggleFilter("subject_1")}
          />
        }
        label="Найти пропавших"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_2")}
            onClick={() => eventsStore.toggleFilter("subject_2")}
          />
        }
        label="Позаботиться о природе"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_3")}
            onClick={() => eventsStore.toggleFilter("subject_3")}
          />
        }
        label="Помощь животным"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_4")}
            onClick={() => eventsStore.toggleFilter("subject_4")}
          />
        }
        label="Помочь больным"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_5")}
            onClick={() => eventsStore.toggleFilter("subject_5")}
          />
        }
        label="Работа в поликлиниках"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_6")}
            onClick={() => eventsStore.toggleFilter("subject_6")}
          />
        }
        label="Сделать город чище"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_7")}
            onClick={() => eventsStore.toggleFilter("subject_7")}
          />
        }
        label="Популяризация спорта"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_8")}
            onClick={() => eventsStore.toggleFilter("subject_8")}
          />
        }
        label="Внимание детям"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_9")}
            onClick={() => eventsStore.toggleFilter("subject_9")}
          />
        }
        label="Помощь пенсионерам"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("subject_10")}
            onClick={() => eventsStore.toggleFilter("subject_10")}
          />
        }
        label="Помощь на культурных проектах"
      />
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Навыки
    </FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("skil_1")}
            onClick={() => eventsStore.toggleFilter("skil_1")}
          />
        }
        label="Подъем грузов"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("skil_2")}
            onClick={() => eventsStore.toggleFilter("skil_2")}
          />
        }
        label="Вождение автомобиля"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("skil_3")}
            onClick={() => eventsStore.toggleFilter("skil_3")}
          />
        }
        label="Общение с детьми"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("skil_4")}
            onClick={() => eventsStore.toggleFilter("skil_4")}
          />
        }
        label="Уход за больными"
      />
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Время проведения
    </FormLabel>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="На следующей неделе" />
      <FormControlLabel control={<Checkbox />} label="В следующем месяце" />
      <Box paddingTop={2}>
        <DateRange
          title="Выберите даты"
          valueFrom={""}
          onChangeFrom={(e) => console.log(e)}
          valueTo={""}
          onChangeTo={(e) => console.log(e)}
        />
      </Box>
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Возраст
    </FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("age_1")}
            onClick={() => eventsStore.toggleFilter("age_1")}
          />
        }
        label="18 и меньше"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("age_2")}
            onClick={() => eventsStore.toggleFilter("age_2")}
          />
        }
        label="от 18 до 45"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("age_3")}
            onClick={() => eventsStore.toggleFilter("age_3")}
          />
        }
        label="45+"
      />
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Регион
    </FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("region_1")}
            onClick={() => eventsStore.toggleFilter("region_1")}
          />
        }
        label="ЦАО"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("region_2")}
            onClick={() => eventsStore.toggleFilter("region_2")}
          />
        }
        label="ЮВАО"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={eventsStore.isActiveFilter("region_3")}
            onClick={() => eventsStore.toggleFilter("region_3")}
          />
        }
        label="САО"
      />
    </FormGroup>

    <FormLabel component="legend" sx={{ pt: 2 }}>
      Навыки
    </FormLabel>
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label="Можно прийти с ребенком"
      />
    </FormGroup>
  </FormControl>
));

export default EventFilters;
