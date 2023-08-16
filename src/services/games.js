import axios from "axios";

export const getGames = async (data) => {
  const url =
    process.env.REACT_APP_ENV === "development"
      ? process.env.REACT_APP_DB_DEV_SERVER
      : process.env.REACT_APP_DB_SERVER;

  try {
    const games = await axios({
      method: "GET",
      url: `${url}/games`,
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
