import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import PublicIcon from "@material-ui/icons/Public";
import LockIcon from "@material-ui/icons/Lock";
import DeleteIcon from "@material-ui/icons/Delete";
import Theme from "./partials/Theme";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2)
  }
}));

export default function PostButtons() {
  const classes = useStyles();

  return (
    <div>
      <Theme>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save Draft
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LockIcon />}
        style={{marginLeft:20}} 
      >
        Post Private
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<PublicIcon />}
        style={{marginLeft:20}} 
      >
        Post Public
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}

        style={{marginLeft:20}} 
      >
        Delete
      </Button>

      </Theme>
    </div>
  );
}
