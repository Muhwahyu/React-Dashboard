import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreateWidge from "./createWidge";

function Widget({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      //   backgroundColor: "#d3ff01",
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

        <CreateWidge
          data={data.directSource}
          heading={"Direct Source"}
          details={"This is the details about this  widget"}
        />
      </Grid>
    </div>
  );
}

export default Widget;
