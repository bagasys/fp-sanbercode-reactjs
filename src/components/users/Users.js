import React, { useContext } from "react";
import UserItem from "./UserItem";
import Grid from "@material-ui/core/Grid";
import GithubContext from "../../context/github/githubContext";
import LinearProgress from "@material-ui/core/LinearProgress";
const Users = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <LinearProgress color="primary" />;
  } else {
    return (
      <Grid container spacing={3}>
        {githubContext.users.map((user) => (
          <Grid item xs={6} sm={3} key={user.id}>
            <UserItem user={user} />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default Users;
