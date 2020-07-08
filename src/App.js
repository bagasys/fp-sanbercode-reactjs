import React from 'react';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
function App() {
  return (
    <GithubState>
      <AlertState>
        hi
      </AlertState>
    </GithubState>
  );
}

export default App;
