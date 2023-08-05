import { Button, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import LookingImage from "../assets/Looking";
import SpeakingImage from "../assets/Speaking";
import ArmsImage from "../assets/Arms";
import LegsImage from "../assets/Legs";
import VoiceOnlyImage from "../assets/VoiceOnly";
import SensitiveImage from "../assets/Sensitive";
import FingerPlayImage from "../assets/FingerPlay";
import { Link } from "react-router-dom";

const Begin = () => {
  const [lookingSelect, setLookingSelect] = useState(true);
  const [speakingSelect, setSpeakingSelect] = useState(true);
  const [armsSelect, setArmsSelect] = useState(true);
  const [legsSelect, setLegsSelect] = useState(true);

  const [voiceSelect, setVoiceSelect] = useState(false);
  const [sensitiveSelect, setSensitiveSelect] = useState(false);
  const [fingerSelect, setFingerSelect] = useState(false);

  const resetPlayWithout = () => {
    setLookingSelect(true);
    setSpeakingSelect(true);
    setArmsSelect(true);
    setLegsSelect(true);
  };

  const resetSpecialPlayStyle = () => {
    setVoiceSelect(false);
    setSensitiveSelect(false);
    setFingerSelect(false);
  };

  const playWithoutMap = {
    lookingSelect: () => setLookingSelect(!lookingSelect),
    speakingSelect: () => setSpeakingSelect(!speakingSelect),
    armsSelect: () => setArmsSelect(!armsSelect),
    legsSelect: () => setLegsSelect(!legsSelect),
  };

  const handlePlayWithoutClick = (selectType) => {
    // Reset special play style
    resetSpecialPlayStyle();

    // Get and run the selected function for let's play without
    const selectedFunction = playWithoutMap[selectType];
    selectedFunction();
  };

  const handlePlayStyleClick = (styleClicked) => {
    // Reset let's play without
    resetPlayWithout();

    if (styleClicked === "voice") {
      setVoiceSelect(!voiceSelect);
      setSensitiveSelect(false);
      setFingerSelect(false);
    } else if (styleClicked === "sensitive") {
      setSensitiveSelect(!sensitiveSelect);
      setVoiceSelect(false);
      setFingerSelect(false);
    } else if (styleClicked === "finger") {
      setFingerSelect(!fingerSelect);
      setSensitiveSelect(false);
      setVoiceSelect(false);
    }
  };

  const dataForQuery = {
    Looking: lookingSelect,
    Speaking: speakingSelect,
    Arms: armsSelect,
    Legs: legsSelect,
    "Voice only": voiceSelect,
    Sensitive: sensitiveSelect,
    "Finger-play": fingerSelect,
  };

  return (
    <>
      <p
        style={{
          margin: "0 auto 20px auto",
          textAlign: "center",
        }}
        className="header-text"
      >
        let's play without:
      </p>

      <Grid container spacing={1} justifyContent="space-around">
        <Grid item xs={5}>
          <Grid container direction="column" sx={{ height: "100%" }}>
            <Grid
              item
              sx={{
                width: { iPhoneSe: "50%", iPhone12Pro: "60%" },
                margin: "auto",
              }}
            >
              <LookingImage
                selected={lookingSelect}
                handleClick={() => handlePlayWithoutClick("lookingSelect")}
              />
              <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
                looking
              </p>
            </Grid>
            <Grid
              item
              sx={{
                width: { iPhoneSe: "40%", iPhone12Pro: "50%" },
                margin: "auto",
              }}
            >
              <SpeakingImage
                selected={speakingSelect}
                handleClick={() => handlePlayWithoutClick("speakingSelect")}
              />
              <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
                speaking
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container direction="column">
            <Grid
              item
              sx={{
                width: { iPhoneSe: "50%", iPhone12Pro: "60%" },
                margin: "auto",
              }}
            >
              <ArmsImage
                selected={armsSelect}
                handleClick={() => handlePlayWithoutClick("armsSelect")}
              />
            </Grid>
            <Grid
              item
              sx={{
                width: { iPhoneSe: "28%", iPhone12Pro: "38%" },
                margin: "auto",
              }}
            >
              <LegsImage
                selected={legsSelect}
                handleClick={() => handlePlayWithoutClick("legsSelect")}
              />
            </Grid>
            <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
              using arms / legs
            </p>
          </Grid>
        </Grid>
      </Grid>
      <p
        style={{
          margin: "50px auto 20px auto",
          textAlign: "center",
        }}
        className="header-text"
      >
        special playstyle:
      </p>
      <Grid container justifyContent="space-around">
        <Grid item xs={3}>
          <div style={{ height: "80px", display: "flex" }}>
            <Box
              sx={{
                width: { iPhoneSe: "90%", iPhone12Pro: "100%" },
                margin: "auto",
              }}
            >
              <VoiceOnlyImage
                selected={voiceSelect}
                handleClick={handlePlayStyleClick}
              />
            </Box>
          </div>
          <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
            voice only
          </p>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              height: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { iPhoneSe: "35%", iPhone12Pro: "40%" },
                margin: "auto",
              }}
            >
              <SensitiveImage
                selected={sensitiveSelect}
                handleClick={handlePlayStyleClick}
              />
            </Box>
          </div>
          <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
            sensitive
          </p>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              height: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { iPhoneSe: "55%", iPhone12Pro: "65%" },
                margin: "auto",
              }}
            >
              <FingerPlayImage
                selected={fingerSelect}
                handleClick={handlePlayStyleClick}
              />
            </Box>
          </div>
          <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
            finger-play
          </p>
        </Grid>
      </Grid>
      <Link
        to="game-info"
        state={dataForQuery}
        className="link-button"
        style={{ marginTop: "40px" }}
      >
        Play-Play!
      </Link>
    </>
  );
};

export default Begin;
