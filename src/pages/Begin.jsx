import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LookingImage from "../assets/Looking";
import SpeakingImage from "../assets/Speaking";
import ArmsImage from "../assets/Arms";
import LegsImage from "../assets/Legs";
import VoiceOnlyImage from "../assets/VoiceOnly";
import SensitiveImage from "../assets/Sensitive";
import FingerPlayImage from "../assets/FingerPlay";

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

  const handlePlayStyleClick = (styleClicked) => {
    if (voiceSelect || sensitiveSelect || fingerSelect) {
      resetPlayWithout();
    }
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

  return (
    <>
      <p
        style={{
          margin: "0 auto 20px auto",
          width: "100%",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        let's play without:
      </p>

      <Grid container spacing={1} justifyContent="space-around">
        <Grid item xs={5}>
          <Grid container direction="column" sx={{ height: "100%" }}>
            <Grid item style={{ width: "60%", margin: "auto" }}>
              <LookingImage
                selected={lookingSelect}
                handleClick={setLookingSelect}
              />
              <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
                looking
              </p>
            </Grid>
            <Grid item style={{ width: "50%", margin: "auto" }}>
              <SpeakingImage
                selected={speakingSelect}
                handleClick={setSpeakingSelect}
              />
              <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
                speaking
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container direction="column">
            <Grid item style={{ width: "60%", margin: "auto" }}>
              <ArmsImage selected={armsSelect} handleClick={setArmsSelect} />
            </Grid>
            <Grid item style={{ width: "38%", margin: "auto" }}>
              <LegsImage selected={legsSelect} handleClick={setLegsSelect} />
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
          width: "100%",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        special playstyle:
      </p>
      <Grid container justifyContent="space-around">
        <Grid item xs={3}>
          <div style={{ height: "80px", display: "flex" }}>
            <VoiceOnlyImage
              selected={voiceSelect}
              handleClick={handlePlayStyleClick}
            />
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
            <SensitiveImage
              selected={sensitiveSelect}
              handleClick={handlePlayStyleClick}
            />
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
            <FingerPlayImage
              selected={fingerSelect}
              handleClick={handlePlayStyleClick}
            />
          </div>
          <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
            finger-play
          </p>
        </Grid>
      </Grid>
      <Button sx={{ mt: 6, fontSize: "1.5rem", textTransform: "none" }}>
        Play-Play!
      </Button>
    </>
  );
};

export default Begin;
