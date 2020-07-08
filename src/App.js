import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Switch>
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/about" component={() => <div>About</div>}/>
          <Route exact path="/users" component={() => <div>Users</div>}/>
          <Route exact path="/users:login" component={() => <div>Detail Users</div>}/>
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
