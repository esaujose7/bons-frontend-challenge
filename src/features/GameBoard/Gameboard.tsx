import React from 'react'
import Enemy from './Enemy';
import Player from './Player';
import Cards from './Cards';
import Turns from './Turns';
import { Card } from '../../types';

import useGameContext  from '../../context/Game';

const Gameboard: React.FC = () => {
  const { state: { currentTurn, turnsLeft, lastMonsterEffect, maxTurns }, actions: { nextTurn } } = useGameContext();
  const [card, setCard] = React.useState<Card | null>(null);
  const isLastMonsterEffectHorror = lastMonsterEffect && lastMonsterEffect.effect === 'HORROR';

  const endTurn = () => {
    isLastMonsterEffectHorror ? nextTurn(undefined) : nextTurn(card?.id) 
  };

  React.useEffect(() => {
    setCard(null);
  }, [currentTurn]);

  return (
    <div className="container columns mt-4">
      <div className="gameboard-info column is-offset-2 is-6">
        <Enemy />
        <Player />
        <Cards selectedCard={card} selectCard={isLastMonsterEffectHorror ? () => {} : setCard} />
      </div>
      <Turns endTurn={endTurn} />
      {isLastMonsterEffectHorror && "You've been horrified! Can't choose a card :("}
    </div>
  );
}

export default Gameboard;
