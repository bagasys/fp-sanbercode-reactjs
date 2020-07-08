import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import Alert from '@material-ui/lab/Alert';
const CustomAlert = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext;
  return (
    alert.severity !== '' && (
      <Alert style={styles} variant="outlined" severity={alert.severity}>
        {alert.msg}
      </Alert>
    )
  )
}
const styles = {
  margin: '1em 0'
}


export default CustomAlert