import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import cardImg from "images/cardImg.png";
import Participants from "./Participants";
import { backendUrl } from "constants/routes";

export type EventCardProps = {
  title: string;
  address: string;
  imgSrc: string | null;
  time: string;
};

const EventCard = ({ title, address, imgSrc, time }: EventCardProps) => {
  const imageSrcInternal = imgSrc ? backendUrl + imgSrc : cardImg;

  return (
    <Card
      sx={{
        width: 288,
        borderRadius: "32px",
        boxShadow: "0px 4px 60px rgba(36, 47, 75, 0.14)",
      }}
    >
      <Box sx={{ p: 1 }}>
        <CardMedia
          component="img"
          alt="Фото"
          height="200"
          image={imageSrcInternal}
          sx={{ borderRadius: "20px 20px 10px 10px" }}
        />
      </Box>
      <CardContent>
        <Box display="flex" alignItems="center" gap={1}>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption" color="text.secondary">
            {time}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Participants />
      </CardActions>
    </Card>
  );
};

export default EventCard;
