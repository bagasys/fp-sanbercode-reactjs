import React, {useEffect, useContext} from 'react'
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button"
import GithubContext from '../../context/github/githubContext'
import {Link} from 'react-router-dom'
const User = ({match}) => {
  const githubContext = useContext(GithubContext)
  useEffect(() => {
    githubContext.getUser(match.params.login)
    githubContext.getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = githubContext.user
  if (githubContext.loading) return <div>Loading...</div>

  return (
    <Container>
      <Button variant="contained">
        {'< Back to search'}
      </Button>
      <div>
        {name}
        {avatar_url}
        {location}
        {bio}
        {blog}
        {login}
        {html_url}
        {followers}
        {following}
        {public_repos}
        {public_gists}
        {hireable}
        {company}
      </div>
    </Container>
  )
}

export default User
