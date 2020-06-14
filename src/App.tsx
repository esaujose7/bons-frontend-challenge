import React from 'react';
import Login from './features/Login';
import GameBoard from './features/GameBoard';
import EndGameModal from './features/EndGameModal';

// App states
const IDLE = 'IDLE';
const ONGOING = 'ONGOING';
const WIN = 'WIN';
const LOSE = 'LOSE';

type GameState = "IDLE" | "ONGOING" | "WIN" | "LOSE";

function App() {
  const [appState, setAppState] = React.useState<GameState>(IDLE);

  if (appState === IDLE) {
    return <Login  />;
  }

  return (
    <>
      {[WIN, LOSE].includes(appState) && <EndGameModal />}
      <GameBoard />
    </>
  );
}

export default App;
