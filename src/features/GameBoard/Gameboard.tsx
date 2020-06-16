import React from 'react'
import Enemy from './Enemy';
import Player from './Player';
import Cards from './Cards';
import { Card } from '../../types';

import useGameContext  from '../../context/Game';

const Gameboard: React.FC = () => {
  const { state: { currentTurn, turnsLeft, lastMonsterEffect, maxTurns }, actions: { nextTurn } } = useGameContext();
  const [selectedCard, setSelectedCard] = React.useState<Card | null>(null);
  const isLastMonsterEffectHorror = lastMonsterEffect && lastMonsterEffect.effect === 'HORROR';

  const endTurn = () => {
    isLastMonsterEffectHorror ? nextTurn(undefined) : nextTurn(selectedCard?.id) 
  };

  React.useEffect(() => {
    setSelectedCard(null);
  }, [currentTurn]);

  return (
    <div style={{ display: 'flex' }}>
      <div className="gameboard-info" style={{ marginRight: '30px' }}>
        <Enemy />
        <Player />
        <Cards selectedCard={selectedCard} selectCard={isLastMonsterEffectHorror ? () => {} : setSelectedCard} />
      </div>
      <div className="gameboard-turns" style={{ display: 'flex', flexDirection: 'column' }}>
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
        <button onClick={endTurn}>
          END TURN.
        </button>
        <div>
          Last monster effect btw: { JSON.stringify(lastMonsterEffect, null, 2) }
        </div>
      </div>
    </div>
  );
}

export default Gameboard;
