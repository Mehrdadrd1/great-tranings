import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MUITable from "../../components/mUITable/MUITable";

export const TablePage = () => {
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
        sx={{ height: "60vh", position: "absolute", top: "10vh", zIndex: 1 }}
      >
        <MUITable />
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
          sx={{ position: "absolute", left: "10vh" }}
          onClick={() => navigate("/")}
        >
          Back Hom
        </Button>
      </Box>
    </Box>
  );
};
