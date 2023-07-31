import { Grid } from "@mui/material";
import { useState } from "react";
import LookingImage from "../assets/Looking";
import SpeakingImage from "../assets/Speaking";
import ArmsImage from "../assets/Arms";
import LegsImage from "../assets/Legs";

const Begin = () => {
  const [lookingSelect, setLookingSelect] = useState(true);
  const [speakingSelect, setSpeakingSelect] = useState(true);
  const [usingArmsLegsSelect, setUsingArmsLegsSelect] = useState(true);

  const [voiceSelect, setVoiceSelect] = useState(false);
  const [sensitiveSelect, setSensitiveSelect] = useState(false);
  const [fingerSelect, setFingerSelect] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item sx={{ width: "100%" }}>
          <p>let's play without</p>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <LookingImage />
          <SpeakingImage />
          <ArmsImage />
          <LegsImage />
        </Grid>
      </Grid>
    </>
  );
};

export default Begin;
