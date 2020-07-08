import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
  SET_ALERT, REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
  const initialState = {msg: '', type: ''}
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //TODO: setAlert
  return (
    <AlertContext.Provider
      value={{
        alert: state,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState