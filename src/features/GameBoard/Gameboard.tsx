import React, { useState, useEffect } from 'react'
import Monster from './Monster';
import Player from './Player';
import Cards from './Cards';
import Turns from './Turns';
import { Card, ONGOING } from '../../types';

import useGameContext  from '../../context/Game';
import { usePlayerState } from '../../context/Player';
import { useMonsterState } from '../../context/Monster';

const Gameboard: React.FC = () => {
  const { state: { currentTurn, maxTurns, lastMonsterEffect, id: gameId, status }, actions: { nextTurn, notifyGameIsLost, notifyGameIsWon } } = useGameContext();
  const isLastMonsterEffectHorror = lastMonsterEffect && lastMonsterEffect.effect === 'HORROR';

  const [card, setCard] = useState<Card | null>(null);
  const { hp: playerHp, id: playerId } = usePlayerState();
  const { hp: monsterHp, id: monsterId } = useMonsterState();

  useEffect(() => {
    if (status === ONGOING && monsterId !== '' && monsterHp <= 0) { // monster died, we won
      notifyGameIsWon();
    }
  }, [monsterHp]);

  useEffect(() => {
    if (status === ONGOING && playerId !== '' && playerHp <= 0) {// we died
      notifyGameIsLost();
    }
  }, [playerHp]);

  useEffect(() => {
    if (status === ONGOING && gameId !== '' && currentTurn === maxTurns) { // we ran out of turns
      notifyGameIsLost();
    }
  }, [currentTurn, maxTurns]);

  useEffect(() => {
    setCard(null);
  }, [currentTurn]);

  return (
    <div className="container columns mt-4">
      <div className="gameboard-info column is-offset-2 is-6">
        <Monster lastMonsterEffect={lastMonsterEffect} />
        <Player />
        <Cards selectedCard={card} disabled={!!isLastMonsterEffectHorror} setCard={setCard} />
        {isLastMonsterEffectHorror && "You've been horrified! Can't choose a card for this turn :("}
      </div>
      <Turns endTurn={() => { nextTurn(card?.id); }} />
    </div>
  );
}

export default Gameboard;
