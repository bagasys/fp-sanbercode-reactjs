import React, { useEffect, Fragment } from 'react'
import RepoItem from './RepoItem'
const Repos = ({repos}) => {
  useEffect(() => {
    console.log(repos)
  }, [repos])
  return (
    <Fragment>
      {repos.map(repo => (<RepoItem key={repo.id} repo={repo}/>))}
    </Fragment>
  )
}

export default Repos
