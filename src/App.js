import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import NotFound from "./pages/NotFound";
import HowToPlay from "./pages/HowToPlay";
import Layout from "./pages/Layout";
import Begin from "./pages/Begin";
import GameInfo from "./pages/GameInfo";

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
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      iPhoneSe: 375,
      iPhone12Pro: 380,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
              <Route path="begin" element={<Begin />} />
              <Route path="begin/game-info" element={<GameInfo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
