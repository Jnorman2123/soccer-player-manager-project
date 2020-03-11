import React from 'react';
import './App.css';
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'

function App() {
  return (
    <div className="App">
      <TeamContainer />
      <PlayerContainer />
    </div>
  );
}

export default App;
