import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getGames } from "../services/games";
import { Grid } from "@mui/material";

import LookingImage from "../assets/Looking";
import SpeakingImage from "../assets/Speaking";
import ArmsImage from "../assets/Arms";
import LegsImage from "../assets/Legs";
import VoiceOnlyImage from "../assets/VoiceOnly";
import SensitiveImage from "../assets/Sensitive";
import FingerPlayImage from "../assets/FingerPlay";

const GameInfo = (props) => {
  let { state } = useLocation();
  console.log("state: ", state);

  const {
    data: games,
    isLoading: isGamesLoading,
    isFetching: isGamesFetching,
  } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      return getGames(state);
    },
    refetchOnWindowFocus: false, // it is not necessary to keep refetching
    cacheTime: 0, // Disable data cache
  });

  console.log(games);

  const imageMap = {
    Looking: <LookingImage selected={true} />,
    Speaking: <SpeakingImage selected={true} />,
    Arms: <ArmsImage selected={true} />,
    Legs: <LegsImage selected={true} />,
    "Voice only": <VoiceOnlyImage selected={false} />,
    Sensitive: <SensitiveImage selected={false} />,
    "Finger-play": <FingerPlayImage selected={false} />,
  };

  const widthMap = {
    1: { xs: "18%", xsUp: "15%", fold: "12%" },
    2: { xs: "15%", xsUp: "12%", fold: "8%" },
    3: { xs: "15%", xsUp: "12%", fold: "8%" },
    4: { xs: "12%", xsUp: "10%", fold: "6%" },
    5: { xs: "15%", xsUp: "15%", fold: "10%" },
    6: { xs: "11%", xsUp: "9%", fold: "5%" },
    7: { xs: "15%", xsUp: "12%", fold: "8%" },
  };

  if (isGamesLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Grid container sx={{ pb: 10 }}>
        {games.length > 0 &&
          games.map((game, index) => (
            <Fragment key={`${game.title}-${index}`}>
              <Grid item xs={12} sx={{ mt: index === 0 ? 0 : 3 }}>
                <p className="header-text">{game.title}</p>
              </Grid>
              <Grid item xs={12}>
                <p className="para-text">{game.content}</p>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <p className="playstyle-text">playstyle:</p>
                  </Grid>
                  {game.Tags.map((tag, index) => (
                    <Grid
                      item
                      sx={{ width: widthMap[tag.id], marginRight: "1rem" }}
                      key={`${tag.tag}-${index}`}
                    >
                      {imageMap[tag.tag]}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Fragment>
          ))}
      </Grid>
    </>
  );
};

export default GameInfo;
