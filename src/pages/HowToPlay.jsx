import { Grid } from "@mui/material";

const HowToPlay = () => {
  return (
    <Grid container sx={{ pb: 1, mt: 0 }}>
      <div className="instruction-text">
        <p className="game-header-text" style={{ marginBottom: "16px" }}>
          How to Play
        </p>
        <p style={{ marginTop: 0 }}>
          Inclusive play can be challenging, and often depends on an experienced
          play-leader. This app helps experts and non-experts to lead play
          sessions where everyone can participate, regardless of ability.
          Play-Play will suggest games, and allow you to change them by quickly
          setting parameters in the main menu. The operation of the app is
          designed to be very, very simple.
        </p>
        <p>
          To have Play-Play suggest games, navigate to the main menu. You can
          simply tap “Play-Play!” to be directed to a scrolling collection of
          all games. If you need to adjust the game to meet a player’s ability,
          you can use the main menu to select games that everyone can play.
          Selecting one or more icons from “Let’s Play Without” will remove
          games that require those actions (for example, tapping “Looking” will
          remove all games from the list that rely upon vision). More than one
          parameter can be selected at the same time. If you need to change the
          parameter, just return to the main menu.
        </p>
        <p>
          Special playstyles allow for play using only voice or fingers, and
          quiet games for players with sensory processing issues. One of these
          modes can be selected at any time.
        </p>

        <p className="game-header-text">Rituals</p>

        <p>
          We’ve found that Play-Play sessions are more fun and interactive with
          rituals: simple call-and-response chants or body gestures at the
          beginning or end of play, when a new player joins—or whenever players
          do something that makes the game great. These help us to stay engaged,
          and add an element of silliness that helps to create a loose and
          improvisational atmosphere among players who may or may not know each
          other.
        </p>
        <p>
          Different groups of players will likely develop their own rituals.
          Here are two to start with:
        </p>
        <ol>
          <li>
            <p>
              The first is used by the play-leader, to call the game to a start,
              or to get attention from others at any point in the game. It is
              based on sign language, adding sound and movement.
            </p>
            <p>
              Raise one arm straight up in the air and wiggle your forearm hand
              back and forth. This is combined with a sing-song chant of
              “heeeeey-ey!”. When the group sees this, sign, everyone takes a
              moment to stop and face the play-leader for instructions.
            </p>
          </li>
          <li>
            The second is a simple call and response, that can be used any time
            a player chooses. The initiating player claps three times, then
            raises both arms and wiggles then in the air while chanting “play
            play play!”. Everyone else responds in the same way. This can be
            used as a kind of applause, to acknowledge another player, or to
            remind the players to keep their attention on one another.
          </li>
        </ol>
        <p>
          You can experiment with these, to find rituals that work best for your
          players.
        </p>
      </div>
    </Grid>
  );
};

export default HowToPlay;
