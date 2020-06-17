import React from 'react';
import { useGameState } from '../../../context/Game';

const Turns: React.FC<{ endTurn: Function }> = ({ endTurn }) => {

  const { currentTurn, maxTurns, turnsLeft } = useGameState();

  return (
      <div className="gameboard-turns column is-offset-2 is3">
        <h2>Turns</h2>
        <div>
          CURRENT: <br />
          {currentTurn + 1 > maxTurns ? maxTurns : currentTurn + 1}
        </div>
        <div>
          PAST: <br />
          {currentTurn}
        </div>
        <div>
          LEFT: <br />
          {turnsLeft}
        </div>
        <button onClick={() => { endTurn(); }} className="button is-primary">
          END TURN.
        </button>
      </div>
  );
};

export default Turns;

