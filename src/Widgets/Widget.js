import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CreateWidge from "./createWidge";

function Widget({ data }) {
  console.log(data);
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
  // data:  number, details, subheading
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <CreateWidge
          data={data.organicSource}
          heading={"Organic Source"}
          details={"This is the details about this  widget"}
        />
        <CreateWidge
          data={data.referralSource}
          heading={"Referral Source"}
          details={"This is the details about this  widget"}
        />
      </Grid>
    </div>
  );
}

export default Widget;
