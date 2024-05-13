import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightGreen",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10vh",
          width: "50vw",
          backgroundColor: "lightseagreen",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 5,
        }}
      >
        <Typography variant="h2" color="#3c3c3c">
          Home
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "5vh",
          width: "100%",
          height: "20vh",
          backgroundColor: "yellowgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{ mx: 1 }}
          onClick={() => navigate("/tablePage")}
        >
          Table Page
        </Button>
        <Button
          variant="contained"
          sx={{ mx: 1 }}
          onClick={() => navigate("/editorPage")}
        >
          Editor Page
        </Button>
        <Button
          variant="contained"
          sx={{ mx: 1 }}
          onClick={() => navigate("/dropDownPage")}
        >
          DropDown Page
        </Button>
      </Box>
    </Box>
  );
};
