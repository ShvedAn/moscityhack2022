import { Avatar, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import face from "images/face.png";

const Organizer = () => (
  <CustomCard variant="grey" sx={{ p: 2, pl: 4, mt: 2 }}>
    <Grid container gap={2} alignItems="center">
      <Grid item>
        <Avatar src={face} alt="face" />
      </Grid>
      <Grid item>
        <Typography>Организатор события</Typography>
        <Typography color="text.secondary">Александр Иванов</Typography>
      </Grid>
    </Grid>
  </CustomCard>
);

export default Organizer;
