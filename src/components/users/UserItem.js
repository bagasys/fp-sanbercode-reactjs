import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  avatarImage: {
    maxWidth: "50%",
    borderRadius: "50%",
  },
  buttonDetail: {
    margin: "auto",
  },
});

const UserItem = (props) => {
  const classes = useStyles();
  const { login, avatar_url } = props.user;
  return (
    <Card className={classes.root}>
      <CardContent>
        <img
          className={classes.avatarImage}
          src={avatar_url}
          alt="avatar_image"
        />
        <Typography>{login}</Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          component={Link}
          to={`/user/${login}`}
          variant="outlined"
          color="primary"
          className={classes.buttonDetail}
          size="small"
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
