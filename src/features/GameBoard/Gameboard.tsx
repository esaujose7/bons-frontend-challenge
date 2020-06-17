import React from 'react'
import Monster from './Monster';
import Player from './Player';
import Cards from './Cards';
import Turns from './Turns';
import { Card } from '../../types';
import { noop } from '../../utilities';

import useGameContext  from '../../context/Game';

const Gameboard: React.FC = () => {
  const { state: { currentTurn, lastMonsterEffect }, actions: { nextTurn } } = useGameContext();
  const [card, setCard] = React.useState<Card | null>(null);
  const isLastMonsterEffectHorror = lastMonsterEffect && lastMonsterEffect.effect === 'HORROR';

  React.useEffect(() => {
    setCard(null);
  }, [currentTurn]);

  return (
    <div className="container columns mt-4">
      <div className="gameboard-info column is-offset-2 is-6">
        <Monster />
        <Player />
        <Cards selectedCard={card} setCard={isLastMonsterEffectHorror ? noop : setCard } />
      </div>
      <Turns endTurn={() => { nextTurn(card?.id); }} />
      {isLastMonsterEffectHorror && "You've been horrified! Can't choose a card for this turn :("}
    </div>
  );
}

export default Gameboard;
