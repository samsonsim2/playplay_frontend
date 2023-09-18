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
    "/begin/game-info": "playstyle",
  };

  return (
    <>
      <div
        style={{
          padding: 0,
          margin: 0,
          position:
            currentPath === "/" || currentPath === "/begin"
              ? "fixed"
              : "static",
          overflow:
            currentPath === "/" || currentPath === "/begin" ? "hidden" : "auto",
          height: "100vh",
          maxWidth: "600px",
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
      </div>
    </>
  );
};

export default Layout;
