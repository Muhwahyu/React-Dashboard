import React from "react";
import CountUp from "react-countup";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function CreateWidge(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: "#d3ff01",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  return (
    <Grid item sm={6} lg={4} xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h3">
          <CountUp start={0} end={+props.data} duration={2.5} separator=",">
            {props.data}
          </CountUp>
        </Typography>
        <Typography variant="h5">{props.heading}</Typography>
        <Typography variant="body2">{props.details}</Typography>
      </Paper>
    </Grid>
  );
}

export default CreateWidge;
