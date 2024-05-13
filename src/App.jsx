import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="root">
      <RouterProvider router={routes} />
    </Box>
  );
}

export default App;
