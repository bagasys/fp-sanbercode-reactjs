import React, { useEffect, useContext } from 'react'
import Container from '@material-ui/core/Container';
import Search from '../users/Search'
import Users from '../users/Users'

const GitFinder = () => {
  useEffect(() => {
    
  }, [])
  return (
    <Container maxWidth="m">
      <Search/>
      <Users/>
    </Container>
  )
}

export default GitFinder