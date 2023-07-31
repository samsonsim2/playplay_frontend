import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import games from "./utils/Games";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HowToPlay from "./pages/HowToPlay";
import Layout from "./pages/Layout";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#00b5c5",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0",
          width: "100%",
          fontWeight: 700,
          textTransform: "lowercase",
          "&.Mui-selected": {
            backgroundColor: "#FFFFFF",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#FFFFFF",
          },
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="how-to-play" element={<HowToPlay />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      {/* {games.map((game) => {
        return (
          <div>
            <h1>{game.title}</h1>
            <h1>{game.content}</h1>
            <h1>{game.tags}</h1>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
