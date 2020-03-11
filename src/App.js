import React from 'react';
import './App.css';
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'
import { ConnectedRouter } from 'connected-react-router'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <TeamContainer />
        <PlayerContainer />
      </div>
    </ConnectedRouter>
  );
}

export default App;
