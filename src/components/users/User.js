import React, { useEffect, useContext, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import GithubContext from "../../context/github/githubContext";
import Repos from "../repos/Repos"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatarImage: {
    width: "100%",
    borderRadius: "50%",
  },
  avatarContainer: {
    width: "50%",
    margin: "auto"
  },
  badge: {
    textAlign: 'center'
  },
  statsContainer: {
    padding: '1em'
  },
  
});

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  
  //life cycle method untuk fetch data user dan repos
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  
  
  const classes = useStyles();
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = githubContext.user;
  if (githubContext.loading) {
    return <LinearProgress color="primary" />;
  }
  return (
    <Container>
      <Button component={Link} to="/users" variant="contained">{"< Back to search"}</Button>
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.avatarContainer}>
              <img
                src={avatar_url}
                alt="avatar image"
                className={classes.avatarImage}
              />
            </div>
            <div style={{textAlign: "center"}}>
              {location}
            </div>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {login}
              </Typography>
              <Typography variant="body2" component="p">
                Hireable: {hireable ? "yes" : "no"}
              </Typography>
              {bio && (
                <Fragment>
                  <br />
                  <Typography variant="body2" component="p">
                    {bio}
                  </Typography>
                </Fragment>
              )}
            </CardContent>
            <CardActions>
              <a href={html_url} target="_blank">
                <Button variant="contained" size="small">
                  Visit Github Profile
                </Button>
              </a>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
      <Card variant="outlined" className={classes.statsContainer}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} sm={3} className={classes.badge}>
            Followers: {followers}
          </Grid>
          <Grid item xs={6} sm={3} className={classes.badge}>
            Following: {following}
          </Grid>
          <Grid item xs={6} sm={3} className={classes.badge}>
            Public repos: {public_repos}
          </Grid>
          <Grid item xs={6} sm={3} className={classes.badge}>
            Public Gist: {public_gists}
          </Grid>
        </Grid>
      </Card>
      {githubContext.repos.length > 0 && <Repos repos={githubContext.repos}/>}
    </Container>
  );
};

export default User;
