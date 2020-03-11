import React from 'react';
import './App.css';
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  );
}

export default App;
