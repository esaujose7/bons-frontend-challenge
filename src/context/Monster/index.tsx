import React, { useReducer, useEffect, useState } from 'react';
import reducer, { initialState } from './reducer';
import MonsterService from '../../services/MonsterService';
import { createCtx } from '../../utilities';
import { LOAD_MONSTER, MonsterContextType, Props } from './types'
import { useGameActions } from '../Game';

const [useMonsterContext, Provider] = createCtx<MonsterContextType>();

const MonsterContextProvider: React.FC<Props> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const monsterId = state.id;
  const isMonsterLoaded = () => monsterId !== '';
  const { notifyError } = useGameActions();

  useEffect(() => { // initially, load the monster by gameId.
    setIsLoading(true);
    MonsterService.getByGameId(gameId)
      .then(data => dispatch({ type: LOAD_MONSTER, payload: data }))
      .catch(notifyError)
      .finally(() => { setIsLoading(false); });
  }, [gameId]);

  useEffect(() => { // afterwards, load the monster after each turn
    setIsLoading(true);
    if (isMonsterLoaded()) { // we prevent fetching twice on initial load with this if statement
      MonsterService.getById(state.id)
        .then(data => dispatch({ type: LOAD_MONSTER, payload: data }))
        .catch(notifyError)
        .finally(() => { setIsLoading(false); });
    }
  }, [currentTurn]);

  return (
    <Provider value={{ state: { ...state, isLoading } }}>
      {children}
    </Provider>
  );
};

function useMonsterState() {
  const { state } = useMonsterContext();
  return state;
}

export { useMonsterContext as default, MonsterContextProvider, useMonsterState };
