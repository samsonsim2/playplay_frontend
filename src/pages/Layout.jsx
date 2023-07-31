import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const currentPath = useLocation().pathname;

  const navMenu = {
    "/": "Home",
    "/how-to-play": "menu",
    "/begin": "menu",
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        {currentPath === "/" ? (
          <Home />
        ) : (
          <>
            <Navbar title={navMenu[currentPath]}>
              <Outlet />
            </Navbar>
          </>
        )}
      </Container>
    </>
  );
};

export default Layout;
