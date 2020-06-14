import React, { useContext } from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

import GameContext from './context/Game';

import './App.scss';

const App: React.FC = () => {
  switch(useContext(GameContext).status) {
    case 'IDLE':
    default:
      return <Login />
    case 'ONGOING':
      return <GameBoard />
    case 'WIN':
      return <EndGameModal result="WIN" />
    case 'LOSE':
      return <EndGameModal result="LOSE" />
  }
}

export default App;
