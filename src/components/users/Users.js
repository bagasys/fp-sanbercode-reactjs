import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserItem from './UserItem'
import Search from './Search'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

}));

const Users = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="m">
      <Search/>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <UserItem/>
        </Grid>
        <Grid item xs={3}>
          <UserItem/>
        </Grid>
        <Grid item xs={3}>
          <UserItem/>
        </Grid>
        <Grid item xs={3}>
          <UserItem/>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default Users