import React from 'react';
import Modal from '../../components/Modal';
import { GameResult, WIN } from '../../types';
import { useGameActions } from '../../context/Game';

const EndGameModal: React.FC<{ result: GameResult }> = ({ result }) => {
  const { restartGame } = useGameActions();

  return (
    <Modal>
      <h1>{result === WIN ? 'Congratulations! You killed the damn beast.' : 'Oops! You lost !'}</h1>
      <button onClick={restartGame} className="button is-primary mt-3">
        Play again?
      </button>
    </Modal>
  );
};

export default EndGameModal;
