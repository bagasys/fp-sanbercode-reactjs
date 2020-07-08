import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: '100px',
    backgroundColor: theme.palette.primary.main,
    marginTop: '75vh'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      
    </div>
  )
}

export default Footer
