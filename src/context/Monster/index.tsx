import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducer';
import MonsterService from '../../services/MonsterService';
import { createCtx } from '../../utilities';
import { LOAD_MONSTER, MonsterContextType, Props } from './types'
import { useGameActions } from '../Game';

const [useMonsterContext, Provider] = createCtx<MonsterContextType>();

const MonsterContextProvider: React.FC<Props> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const monsterId = state.id;
  const isMonsterLoaded = () => monsterId !== '';
  const { notifyGameIsWon, notifyError } = useGameActions();

  useEffect(() => { // initially, load the monster by gameId.
    MonsterService.getByGameId(gameId).then(data => dispatch({ type: LOAD_MONSTER, payload: data })).catch(notifyError);
  }, [gameId]);

  useEffect(() => { // afterwards, load the monster after each turn
    if (isMonsterLoaded()) { // we prevent fetching twice on initial load with this if statement
      MonsterService.getById(state.id).then(data => dispatch({ type: LOAD_MONSTER, payload: data })).catch(notifyError);
    }
  }, [currentTurn]);

  useEffect(() => { // if we have our monster loaded already and it runs out of hp, then we won the game!
    if (isMonsterLoaded() && state.hp <= 0) {
      notifyGameIsWon();
    }
  }, [state.hp]);

  return (
    <Provider value={{ state }}>
      {children}
    </Provider>
  );
};

function useMonsterState() {
  const { state } = useMonsterContext();
  return state;
}

export { useMonsterContext as default, MonsterContextProvider, useMonsterState };

