import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
  SET_ALERT, REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
  const initialState = {msg: '', title: '', severity: ''}
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (msg, severity, title='alert') => {
    dispatch({type: SET_ALERT, payload: {msg: msg, severity: severity, title: title}})
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState