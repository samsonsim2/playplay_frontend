import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useNavigate, useLocation } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const handleNavigation = () => {
    if (currentPath === "/begin/game-info") {
      navigate("begin");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
            <IconButton onClick={() => handleNavigation()}>
              <ArrowBackIosIcon sx={{ fontSize: "20px", color: "#000000" }} />
              <p
                style={{
                  color: "black",
                  fontWeight: 700,
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                {props.title}
              </p>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>{props.children}</Box>
      </Container>
    </>
  );
};

export default Navbar;
