import CustomCard from "./CustomCard";
import qrCode from "images/qr-code.gif";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const QrCode = () => (
  <CustomCard variant="outline" sx={{ p: 2, pl: 4, pr: 4, mt: 2 }}>
    <Typography>QR-код со ссылкой на страницу</Typography>
    <Typography gutterBottom variant="caption" color="text.secondary">
      Кодом можно поделиться с другими пользователями
    </Typography>
    <Box display="flex" justifyContent="center" alignItems="center">
      <img src={qrCode} alt="qr-code" />
    </Box>
  </CustomCard>
);

export default QrCode;
