import React from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

import { useGameState } from './context/Game';
import { PlayerContextProvider } from './context/Player';
import { MonsterContextProvider } from './context/Monster';

import { IDLE, ONGOING } from './types';

import './App.scss';

const App: React.FC = () => {
  const { id: gameId, currentTurn, status: gameStatus } = useGameState();

  if (gameStatus === IDLE) {
    return <Login />;
  }

  return (
    <>
      {gameStatus !== ONGOING && <EndGameModal result={gameStatus} />}
      <PlayerContextProvider gameId={gameId} currentTurn={currentTurn}>
        <MonsterContextProvider gameId={gameId} currentTurn={currentTurn}>  
          <GameBoard />
        </MonsterContextProvider>
      </PlayerContextProvider>
    </>
  );
}

export default App;
