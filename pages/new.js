import React from "react";
//import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import WriteLayout from "../comps/layouts/WriteLayout";
import Slider from "@material-ui/core/Slider";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Divider } from "@material-ui/core";
import Theme from "../comps/partials/Theme";
export default function New() {
  return (
    <main>

      <WriteLayout>
        <Typography>Energy Level</Typography>
        <Slider
          defaultValue={0}
          // getAriaValueText={defaultValue}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={0}
          max={10}
          valueLabelDisplay="auto"
        />
        <br />
        <TextField
          id="filled-multiline-static"
          label="Content"
          required
          multiline
          fullWidth
          defaultValue="Post Content"
          variant="filled"
        />
      </WriteLayout>

    </main>
  );
}
