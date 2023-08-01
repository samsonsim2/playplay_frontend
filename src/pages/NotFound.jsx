import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "1.1rem" }} color="secondary">
          404
        </Typography>
        <Typography sx={{ fontSize: "3rem", fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography sx={{ fontSize: "1rem", mt: 1 }}>
          Sorry, we couldn’t find the page you’re looking for.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
          sx={{ width: "200px", mt: 3, borderRadius: "8px" }}
        >
          Go Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
