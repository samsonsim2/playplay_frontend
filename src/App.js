import "./App.css";
import games from "./utils/Games";

function App() {
  return (
    <>
      {games.map((game) => {
        return (
          <div>
            <h1>{game.title}</h1>
            <h1>{game.content}</h1>
            <h1>{game.tags}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
