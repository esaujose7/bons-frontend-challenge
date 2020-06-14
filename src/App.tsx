import React from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

import { useGameState } from './hooks/game';

import './App.scss';

const App: React.FC = () => {
  switch(useGameState().status) {
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
