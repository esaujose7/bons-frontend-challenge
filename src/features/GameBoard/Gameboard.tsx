import React from 'react'
import Enemy from './Enemy';
import Player from './Player';
import Cards from './Cards';
import { Card } from '../../types';

import { useGameState, useGameActions } from '../../context/Game';

const Gameboard: React.FC = () => {
  const { currentTurn, turnsLeft } = useGameState();
  const { nextTurn } = useGameActions();
  const [selectedCard, setSelectedCard] = React.useState<Card | null>(null);

  const endTurn = () => {
    nextTurn(selectedCard?.id);
  };

  React.useEffect(() => {
    setSelectedCard(null);
  }, [currentTurn]);

  return (
    <div style={{ display: 'flex' }}>
      <div className="gameboard-info" style={{ marginRight: '30px' }}>
        <Enemy />
        <Player />
        <Cards selectedCard={selectedCard} selectCard={setSelectedCard} />
      </div>
      <div className="gameboard-turns" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Turns</h2>
        <div>
          CURRENT: <br />
          {currentTurn + 1}
        </div>
        <div>
          PAST: <br />
          {currentTurn}
        </div>
        <div>
          LEFT: <br />
          {turnsLeft}
        </div>
        <button onClick={endTurn}>
          END TURN.
        </button>
      </div>
    </div>
  );
}

export default Gameboard;
