import { useLocation } from "react-router-dom";

const GameInfo = (props) => {
  let { state } = useLocation();
  console.log("test state: ", state);
  return (
    <>
      <p>I am game info</p>
    </>
  );
};

export default GameInfo;
