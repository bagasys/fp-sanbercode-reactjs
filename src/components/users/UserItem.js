import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  avatarImage : {
    maxWidth: '50%',
    borderRadius: '50%'
  },
  buttonDetail: {
    margin: 'auto'
  }
  
});


const UserItem = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        
        <img className={classes.avatarImage} src="https://avatars0.githubusercontent.com/u/1?v=4" alt="avatar_image"/>
        <Typography>
          mojombo
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button component={Link} to="/" variant="outlined" color="primary" className={classes.buttonDetail} size="small">More</Button>
      </CardActions>
    </Card>
  )
}

export default UserItem
