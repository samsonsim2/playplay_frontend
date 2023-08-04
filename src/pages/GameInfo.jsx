import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getGames } from "../services/games";

const GameInfo = (props) => {
  let { state } = useLocation();
  // console.log("state: ", state);

  const { data: games, isSuccess: fetchSuccess } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      return getGames(state);
    },
    refetchOnWindowFocus: false, // it is not necessary to keep refetching
    cacheTime: 0, // Disable data cache
  });

  console.log(games);

  return (
    <>
      <p>I am game info</p>
    </>
  );
};

export default GameInfo;
