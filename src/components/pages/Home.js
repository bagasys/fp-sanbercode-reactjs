import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => createStyles({
  box: {
   height: '50vh'
  },
  title: {
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    color: theme.palette.primary.main
  }
}));
const Home = () => {
  const classes = useStyles();
  return (
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.box}
        >
          <h1 className={classes.title}>Search Github</h1>
          <Button color="primary" variant="outlined">Search</Button>
        </Grid>
      </Container>
  )
}

export default Home
