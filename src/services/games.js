import axios from "axios";

export const getGames = async (data) => {
  try {
    const games = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_DB_SERVER}/games`,
      headers: {
        "content-type": "application/json",
      },
      params: { data },
    });
    return games.data;
  } catch (e) {
    console.log(e);
  }
};
