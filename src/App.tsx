import React from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

import { useGameState } from './hooks/game';
import { IDLE, ONGOING, WIN, LOSE } from './types';

import './App.scss';
import { PlayerContextProvider } from './context/Player';

const App: React.FC = () => {
  const { id: gameId, currentTurn, status } = useGameState();

  switch(status) {
    case IDLE:
    default:
      return <Login />;
    case ONGOING:
      return (
        <PlayerContextProvider gameId={gameId} currentTurn={currentTurn}>
            <GameBoard />
        </PlayerContextProvider>
      );
    case WIN:
      return <EndGameModal result={WIN} />;
    case LOSE:
      return <EndGameModal result={LOSE} />;
  }
}

export default App;
