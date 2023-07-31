import { Container, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <div style={{ zIndex: 0, position: "relative" }}>
          <img
            src="assets/Pngs/Background-09.png"
            alt="main logo"
            width="100%"
          />
          <div
            style={{
              zIndex: 10,
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "40%" }}>
              <Button disableRipple style={{ fontSize: "1.2rem" }}>
                let's begin
              </Button>
              <hr style={{ border: "1px solid black" }} />
              <Button disableRipple style={{ fontSize: "1.2rem" }}>
                how to play
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
