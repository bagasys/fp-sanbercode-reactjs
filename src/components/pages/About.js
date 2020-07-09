import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  clearButton: {
    width: "100%",
    margin: "0.5em 0",
  },
  box: {
    height: "100vh",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="box">About</div>
      <div className={classes.box}></div>
    </Fragment>
  );
};

export default About;
