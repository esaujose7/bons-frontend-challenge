import React from 'react';
import { useGameState } from '../../../context/Game';
import './style.scss';

const Turns: React.FC<{ endTurn: Function, disabled: boolean }> = ({ endTurn, disabled }) => {

  const { currentTurn, maxTurns, turnsLeft } = useGameState();

  return (
      <div className="gameboard-turns column is3 flex-center mt-6">
        <h2 className="mb-3">Turns</h2>
        <div className="flex-center mb-2">
          <h3>CURRENT:</h3>
          <span>{currentTurn + 1 > maxTurns ? maxTurns : currentTurn + 1}</span>
        </div>
        <div className="flex-center mb-2">
          <h3>PAST:</h3>
          <span>{currentTurn}</span>
        </div>
        <div className="flex-center mb-2">
          <h3>LEFT:</h3>
          <span>{turnsLeft}</span>
        </div>
        <button onClick={() => { endTurn(); }} className="button is-primary" disabled={disabled}>
          END TURN
        </button>
      </div>
  );
};

export default Turns;

