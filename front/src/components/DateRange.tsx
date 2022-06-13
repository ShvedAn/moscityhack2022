import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type DateRangeProps = {
  title?: string;
  valueFrom: string;
  onChangeFrom: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  valueTo: string;
  onChangeTo: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const DateRange = ({
  title,
  valueFrom,
  onChangeFrom,
  valueTo,
  onChangeTo,
}: DateRangeProps) => (
  <Box>
    {title && <Typography gutterBottom>{title}</Typography>}
    <FormControlLabel
      control={
        <Stack direction="row" flexWrap="wrap">
          <TextField
            label="От"
            type="date"
            value={valueFrom}
            onChange={(e) => onChangeFrom(e)}
            sx={{ width: 220, m: 1 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="До"
            type="date"
            value={valueTo}
            onChange={(e) => onChangeTo(e)}
            sx={{ width: 220, m: 1 }}
            InputLabelProps={{ shrink: true }}
          />
        </Stack>
      }
      label={undefined}
    />
  </Box>
);
export default DateRange;
