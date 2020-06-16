import React from 'react';
import { GameResult, WIN } from '../../types';
import { useGameActions } from '../../context/Game';

const EndGameModal: React.FC<{ result: GameResult }> = ({ result }) => {
  const { restartGame } = useGameActions();

  return (
    <div>
      {result === WIN ? 'Congratulations! You killed the damn beast.' : 'Oops! You suck !'}
      <button onClick={restartGame}>
        Play again?
      </button>
    </div>
  )
}

export default EndGameModal;
