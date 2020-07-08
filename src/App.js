import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import theme from "./components/ui/Theme";
import Header from './components/ui/Header'
import Users from './components/users/Users'
import GitFinder from './components/pages/GitFinder'
function App() {
  return (
    <ThemeProvider theme={theme}>
    <GithubState>
      <AlertState>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/users" component={GitFinder}/>
            <Route
              exact
              path="/users:login"
              component={() => <div>Detail Users</div>}
            />
            <Route component={() => <div>Not Found</div>} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
    </ThemeProvider>
  );
}

export default App;
