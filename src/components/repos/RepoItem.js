import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: '0.5em 0'
  },
  link: {
    textDecoration: 'none',
    
  },
  button: {
    color: theme.palette.secondary.main
  }
}))
const RepoItem = ({repo}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <a className={classes.link} href={repo.html_url}>
          <Button className={classes.button}>{repo.name}</Button>
        </a>
      </CardContent>
    </Card>
  )
}
export default RepoItem
