import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        zIndex: 0,
        position: "relative",
        maxHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <img
        src="assets/Pngs/Background-09.png"
        alt="main logo"
        style={{
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      />
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          bottom: 35,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <Button
            style={{ fontSize: "1.2rem", width: "100%" }}
            onClick={() => navigate("/begin")}
          >
            let's begin
          </Button>
          <hr style={{ border: "1px solid black" }} />
          <Button
            style={{ fontSize: "1.2rem", width: "100%" }}
            onClick={() => navigate("/how-to-play")}
          >
            how to play
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
