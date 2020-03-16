import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      { routes }
    </ConnectedRouter>
  );
}

export default App;
