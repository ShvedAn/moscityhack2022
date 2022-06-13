import { Box, Button, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

const BookletAdvice = () => (
  <CustomCard variant="outline" sx={{ p: 2, pl: 4, pr: 4, mt: 2 }}>
    <Typography>Сохранить брошюру мероприятия</Typography>
    <Typography gutterBottom variant="caption" color="text.secondary">
      PDF брошюру можно распечатать и поделиться с тем, кто хочет стать
      волонтером
    </Typography>
    <Box display="flex" justifyContent="center" sx={{ pt: 2 }}>
      <Button variant="contained">Распечатать брошюру</Button>
    </Box>
  </CustomCard>
);

export default BookletAdvice;
