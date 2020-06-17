import React from 'react';
import Modal from '../../components/Modal';
import { useGameActions } from '../../context/Game';

const ErrorGameModal: React.FC = () => {
  const { restartGame, loadGameAfterError } = useGameActions();

  return (
    <Modal>
      <h1>Oops! Something went wrong. What you want to do?</h1>
      <div className="flex">
        <button onClick={restartGame} className="button is-primary mt-3 mr-3">
          Start from scratch?
        </button>
        <button onClick={loadGameAfterError} className="button is-primary mt-3">
          Load latest state of the game?
        </button>
      </div>
    </Modal>
  );
};

export default ErrorGameModal;
