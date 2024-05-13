import { Box, Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditorPage = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState();
  console.log(body);
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
        <Editor
          textareaName="Content"
          initialValue="Write what you want.."
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={(newtext) => setBody(newtext)}
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

export default EditorPage;
