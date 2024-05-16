import { Button } from "@mui/material";

const CustomButtonComponent = () => {
  return (
    <Button onClick={() => window.alert("clicked")} variant="contained">
      Push
    </Button>
  );
};

export default CustomButtonComponent;
