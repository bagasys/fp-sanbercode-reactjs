import React, {  Fragment, Component } from 'react'
import RepoItem from './RepoItem'
class Repos extends Component {
  render(){
    return (
      <Fragment>
        {this.props.repos.map(repo => (<RepoItem key={repo.id} repo={repo}/>))}
      </Fragment>
    )
  }
  
}

export default Repos
