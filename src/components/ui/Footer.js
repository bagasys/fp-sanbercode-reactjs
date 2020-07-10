import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

//custom styling
const useStyles = makeStyles((theme) => ({
  footer: {
    height: "10em",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  socialIcon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    right: "1em",
    bottom: "1em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  //lifting stateup untuk sinkronisasi dengan header
  const { setValue, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => {
                  setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/users"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                GitSearch
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                About Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className={classes.socialIcon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className={classes.socialIcon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className={classes.socialIcon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
