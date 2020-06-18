import React, { useState, useEffect } from 'react'
import Monster from './Monster';
import Player from './Player';
import Cards from './Cards';
import Turns from './Turns';
import { Card } from '../../types';

import useGameContext  from '../../context/Game';
import { usePlayerState } from '../../context/Player';
import { useMonsterState } from '../../context/Monster';

const Gameboard: React.FC = () => {
  const {
    state: { currentTurn, maxTurns, lastMonsterEffect, isLoading: isGameLoading },
    actions: { nextTurn, notifyGameIsLost, notifyGameIsWon }
  } = useGameContext();
  const isLastMonsterEffectHorror = lastMonsterEffect && lastMonsterEffect.effect === 'HORROR';

  const [card, setCard] = useState<Card | null>(null);
  const { hp: playerHp, isLoading: isPlayerLoading } = usePlayerState();
  const { hp: monsterHp, isLoading: isMonsterLoading } = useMonsterState();

  const isLoading = [isGameLoading, isPlayerLoading, isMonsterLoading].some(Boolean); // if any of the latter is loading, returns true

  useEffect(() => {
    if (!isLoading && monsterHp <= 0) { // monster died, we won
      notifyGameIsWon();
    }
  }, [monsterHp, isLoading]);

  useEffect(() => {
    if (!isLoading && playerHp <= 0) { // we died, we lost
      notifyGameIsLost();
    }
  }, [playerHp, isLoading]);

  useEffect(() => {
    if (!isLoading && currentTurn === maxTurns) { // we ran out of turns, we lost
      notifyGameIsLost();
    }
  }, [currentTurn, maxTurns, isLoading]);

  useEffect(() => {
    setCard(null);
  }, [currentTurn]);

  return (
    <div className="container columns mt-4">
      <div className="gameboard-info column is-offset-2 is-6">
        <Monster lastMonsterEffect={lastMonsterEffect} />
        <Player />
        <Cards selectedCard={card} disabled={!!isLastMonsterEffectHorror || isLoading} setCard={setCard} />
        {isLastMonsterEffectHorror && "You've been horrified! Can't choose a card for this turn :("}
      </div>
      <Turns endTurn={() => { nextTurn(card?.id); }} disabled={isLoading} />
    </div>
  );
}

export default Gameboard;
