import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import human from "images/human.png";
import book from "images/book.png";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import eventsStore from "stores/events-store";
import { observer } from "mobx-react-lite";
import EventMap from "components/EventMap";

type CategoryType = {
  id: string;
  name: string;
};

const categories: CategoryType[] = [
  { id: "subject_1", name: "Найти пропавших" },
  { id: "subject_2", name: "Позаботиться о природе" },
  { id: "subject_3", name: "Помочь животным" },
  { id: "subject_4", name: "Помочь больным" },
  { id: "subject_5", name: "Работа в поликлиниках" },
  { id: "subject_6", name: "Сделать город чище" },
  { id: "subject_7", name: "Популяризировать спорт" },
  { id: "subject_8", name: "Внимание детям" },
];

const Main = observer(() => {
  const handleCategoryClick = (category: CategoryType) => {
    if (!eventsStore.isActiveFilter(category.id)) {
      eventsStore.addFilter(category.id);
    } else {
      eventsStore.removeFilter(category.id);
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={human} alt="Человек с котом" width={300} />
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          <span style={{ color: "#5A3DFF" }}>13895</span> волонтерских заданий в
          Москве
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Делать добрые дела стало ещё проще. Выполняйте волонтерские задания и
          получайте бонусы
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          flexWrap="wrap"
          gap={1}
          padding={2}
        >
          <Button variant="contained" onClick={() => navigate("/events")}>
            Хочу помочь
          </Button>
          <Button variant="contained" onClick={() => navigate("/personalArea")}>Стать организатором</Button>
        </Stack>
        <Typography variant="h3" sx={{ paddingTop: 5 }}>
          Добрые дела рядом с вами
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          flexWrap="wrap"
          gap={1}
          padding={2}
        >
          {categories.map((x, i) => (
            <Button
              key={i}
              variant={
                eventsStore.isActiveFilter(x.id) ? "contained" : "outlined"
              }
              sx={{ borderRadius: 10 }}
              onClick={() => handleCategoryClick(x)}
            >
              {x.name}
            </Button>
          ))}
        </Stack>
        {eventsStore.errorMessage && (
          <Typography>Произошла ошибка: {eventsStore.errorMessage}</Typography>
        )}
        {!eventsStore.errorMessage && <EventMap data={eventsStore.data} />}
        <Box
          padding={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img src={book} alt="Первый раз в волонтерстве?" width={160} />
          <Typography variant="h4">Первый раз в волонтерстве?</Typography>
          <Typography>
            Ответьте на несколько вопросов и мы подберем задания, которые вам
            подойдут
          </Typography>
          <Link to="/onboarding">
            <Button sx={{ mt: 2, mb: 1, p: 2 }} variant="contained">
              Пройти опрос
            </Button>
          </Link>
          <Typography variant="caption" color="text.secondary">
            Займет 3 минуты
          </Typography>
        </Box>
      </Box>
    </Container>
  );
});

export default Main;
