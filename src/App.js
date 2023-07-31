import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import games from "./utils/Games";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
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
