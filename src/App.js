import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import theme from "./components/ui/Theme";
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Alert from './components/ui/Alert'
import GitFinder from './components/pages/GitFinder'
import Home from './components/pages/Home'
import Container from '@material-ui/core/Container';
import User from "./components/users/User"
import './App.css'
class App extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
      <GithubState>
        <AlertState>
          <Router>
            <Header/>
            <Container maxWidth="sm">
              <Alert/>
            </Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={() => <div>About</div>} />
              <Route exact path="/users" component={GitFinder}/>
              <Route exact path="/users/:login" component={User}/>
              <Route
                exact
                path="/users:login"
                component={() => <div>Detail Users</div>}
              />
              <Route component={() => <div>Not Found</div>} />
            </Switch>
            <Footer/>
          </Router>
        </AlertState>
      </GithubState>
      </ThemeProvider>
    );
  }
}

export default App;
