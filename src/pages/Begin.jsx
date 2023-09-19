import { Button, Grid, Box, Typography } from "@mui/material";
import { useEffect, useState, useRef, Fragment } from "react";
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

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const windowWidth = windowSize["current"][0];
  // const armsLegMargin = -Math.round(windowWidth * 0.16);
  // const armsLegMarginWide = -Math.round(windowWidth * 0.136);

  // console.log("window width:", windowWidth);

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
    <Fragment>
      <p className="header-text-space header-text">let's play without:</p>

      <Grid container spacing={0.2} justifyContent="center">
        <Grid item xs={5}>
          <Grid container direction="column" sx={{ height: "100%" }}>
            <Grid
              item
              sx={{
                width: { xs: "40%", iPhoneSe: "50%", iPhone12Pro: "60%" },
                margin: "auto",
              }}
            >
              <LookingImage
                selected={lookingSelect}
                handleClick={() => handlePlayWithoutClick("lookingSelect")}
              />
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                  color: "#636363",
                  fontSize: {
                    xs: "0.75rem",
                    iPhoneSe: "1rem",
                  },
                }}
              >
                looking
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "30%", iPhoneSe: "40%", iPhone12Pro: "50%" },
                margin: "auto",
              }}
            >
              <SpeakingImage
                selected={speakingSelect}
                handleClick={() => handlePlayWithoutClick("speakingSelect")}
              />
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                  color: "#636363",
                  fontSize: {
                    xs: "0.75rem",
                    iPhoneSe: "1rem",
                  },
                }}
              >
                speaking
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid
              item
              sx={{
                width: { xs: "50%", iPhoneSe: "50%", iPhone12Pro: "60%" },
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
                width: {
                  xs: "29%",
                  iPhoneSe: "27%",
                  iPhone12Pro: "34%",
                },
                margin: {
                  xs: `-20px auto auto auto`,
                  xsUp: `-28px auto auto auto`,
                  fold: `-39px auto auto auto`,
                  iPhoneSe: `-50px auto auto auto`,
                  iPhone12Pro: "-60px auto auto auto",
                  smUp2: `-70px auto auto auto`,
                  smUp: `-80px auto auto auto`,
                },
                position: "relative",
                zIndex: 10,
              }}
            >
              <LegsImage
                selected={legsSelect}
                handleClick={() => handlePlayWithoutClick("legsSelect")}
              />
            </Grid>
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                margin: 0,
                fontWeight: 700,
                color: "#636363",
                fontSize: {
                  xs: "0.75rem",
                  iPhoneSe: "1rem",
                },
              }}
            >
              using arms / legs
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <p className="special-play-style-space header-text">special playstyle:</p>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} fold={3} sx={{ mb: { xs: "20px", fold: "0" } }}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="center"
                sx={{
                  height: {
                    xs: "auto",
                    fold: "50px",
                    iPhoneSe: "80px",
                    smUp2: "100px",
                    smUp: "120px;",
                  },
                  margin: "auto",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "33%",
                      fold: "70%",
                      iPhoneSe: "90%",
                      iPhone12Pro: "90%",
                    },
                    maxHeight: "100%",
                  }}
                >
                  <VoiceOnlyImage
                    selected={voiceSelect}
                    handleClick={handlePlayStyleClick}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                  color: "#636363",
                  fontSize: {
                    xs: "0.75rem",
                    iPhoneSe: "1rem",
                  },
                }}
              >
                voice only
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} fold={3} sx={{ mb: { xs: "20px", fold: "0" } }}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Grid
                container
                sx={{
                  height: {
                    xs: "auto",
                    fold: "50px",
                    iPhoneSe: "80px",
                    smUp2: "100px",
                    smUp: "120px;",
                  },
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "26%",
                      fold: "50%",
                      iPhoneSe: "63%",
                      xl: "70%",
                    },
                    margin: "auto",
                  }}
                >
                  <SensitiveImage
                    selected={sensitiveSelect}
                    handleClick={handlePlayStyleClick}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                  color: "#636363",
                  fontSize: {
                    xs: "0.75rem",
                    iPhoneSe: "1rem",
                  },
                }}
              >
                sensitive
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} fold={3}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Grid
                container
                sx={{
                  height: {
                    xs: "auto",
                    fold: "50px",
                    iPhoneSe: "80px",
                    smUp2: "100px",
                    smUp: "120px;",
                  },
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "23%",
                      fold: "45%",
                      iPhoneSe: "55%",
                      iPhone12Pro: "65%",
                    },
                    margin: "auto",
                  }}
                >
                  <FingerPlayImage
                    selected={fingerSelect}
                    handleClick={handlePlayStyleClick}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                  color: "#636363",
                  fontSize: {
                    xs: "0.75rem",
                    iPhoneSe: "1rem",
                  },
                }}
              >
                finger-play
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="play-button-space">
        {/* <Box sx={{ mt: { xs: "30px", smUp2: "70px" } }}> */}
        <Link to="game-info" state={dataForQuery} className="link-button">
          Play-Play!
        </Link>
        {/* </Box> */}
      </div>
    </Fragment>
  );
};

export default Begin;
