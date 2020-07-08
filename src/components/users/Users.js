import React, {useContext } from "react";
import UserItem from "./UserItem";
import Grid from "@material-ui/core/Grid";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  if (githubContext.loading) {
    return <div>loading...</div>;
  } else {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <UserItem />
        </Grid>
        <Grid item xs={3}>
          <UserItem />
        </Grid>
        <Grid item xs={3}>
          <UserItem />
        </Grid>
        <Grid item xs={3}>
          <UserItem />
        </Grid>
      </Grid>
    );
  }
};

export default Users;
