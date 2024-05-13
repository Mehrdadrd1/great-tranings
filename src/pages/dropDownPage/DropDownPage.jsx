import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DropDown } from "../../components/dropDown/DropDown";

const DropDownPage = () => {
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
          mt: "1rem",
          height: "60vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "lightseagreen",
        }}
      >
        <DropDown
          multiple={true}
          data={[
            { id: 0, itemName: "m1", itemId: "01" },
            { id: 1, itemName: "m2", itemId: "02" },
            { id: 2, itemName: "m3", itemId: "03" },
            { id: 3, itemName: "m4", itemId: "04" },
          ]}
          defaultValue={[
            { id: 0, itemName: "m1", itemId: "01" },
            { id: 2, itemName: "m3", itemId: "03" },
          ]}
        />
        <DropDown
          multiple={false}
          data={[
            { id: 0, itemName: "m1", itemId: "01" },
            { id: 1, itemName: "m2", itemId: "02" },
            { id: 2, itemName: "m3", itemId: "03" },
            { id: 3, itemName: "m4", itemId: "04" },
          ]}
          defaultValue={{ id: 0, itemName: "m1", itemId: "01" }}
        />
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

export default DropDownPage;
