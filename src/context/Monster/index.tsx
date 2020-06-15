import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducer';
import MonsterService from '../../services/MonsterService';
import { createCtx } from '../../helpers';
import { MonsterEntity } from '../../types';
import {LOAD_MONSTER} from './types'

type Props = {
  gameId: string,
  currentTurn: number
};

type MonsterContextType = {
  state: MonsterEntity;
}

const [useMonsterContext, Provider] = createCtx<MonsterContextType>();

const MonsterContextProvider: React.FC<Props> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const monsterId = state.id;
  const isMonsterLoaded = () => monsterId !== '';

  useEffect(() => {
    MonsterService.getByGameId(gameId).then(data => dispatch({ type: LOAD_MONSTER, payload: data }));
  }, [gameId])


  useEffect(() => {
    if (isMonsterLoaded()) {
      MonsterService.getById(state.id).then(data => dispatch({ type: LOAD_MONSTER, payload: data }));
    }
  }, [currentTurn])

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

