import React from 'react';

import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';
import ErrorGameModal from './features/ErrorGameModal';

import { useGameState } from './context/Game';
import { PlayerContextProvider } from './context/Player';
import { MonsterContextProvider } from './context/Monster';

import { IDLE, ONGOING, ERROR } from './types';

import './App.scss';

const App: React.FC = () => {
  const { id: gameId, currentTurn, status: gameStatus } = useGameState();

  if (gameStatus === ERROR) {
    return <ErrorGameModal />
  }

  if (gameStatus === IDLE) {
    return (
      <div className="container">
        <h1>Welcome to Bons Game!</h1>
        <h2>What's your name?</h2>
        <Login />
      </div>
    );
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
