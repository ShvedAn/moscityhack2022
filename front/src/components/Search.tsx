import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => (
  <Box
    component="form"
    sx={{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f3f5f7",
      borderRadius: 5,
    }}
  >
    <IconButton sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Поиск доброго дела"
      inputProps={{ "aria-label": "Поиск доброго дела" }}
    />
  </Box>
);

export default Search;
