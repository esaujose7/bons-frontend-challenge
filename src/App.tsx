import React from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

import { useGameState } from './context/Game';
import { PlayerContextProvider } from './context/Player';
import { MonsterContextProvider } from './context/Monster';

import { IDLE, ONGOING, WIN, LOSE } from './types';

import './App.scss';

const App: React.FC = () => {
  const { id: gameId, currentTurn, status: gameStatus } = useGameState();

  switch(gameStatus) {
    case IDLE:
    default:
      return <Login />;
    case ONGOING:
      return (
        <PlayerContextProvider gameId={gameId} currentTurn={currentTurn}>
          <MonsterContextProvider gameId={gameId} currentTurn={currentTurn}>  
            <GameBoard />
          </MonsterContextProvider>
        </PlayerContextProvider>
      );
    case WIN:
      return <EndGameModal result={WIN} />;
    case LOSE:
      return <EndGameModal result={LOSE} />;
  }
}

export default App;
