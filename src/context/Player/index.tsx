import React, { useReducer, useEffect } from 'react';
import PlayerService from '../../services/PlayerService';
import reducer, { initialState } from './reducer';
import { PlayerState, PlayerEntity } from '../../types';
import { createCtx } from '../../helpers';
import { LOAD_CARDS, LOAD_PLAYER } from './types';

type Props = {
  gameId: string,
  currentTurn: number
};

type PlayerContextType = {
  state: PlayerState
};

const [usePlayerContext, Provider] = createCtx<PlayerContextType>();

const PlayerContextProvider: React.FC<Props> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const resolveOncePlayerLoaded = (data: PlayerEntity) => dispatch({ type: LOAD_PLAYER, payload: data })
    if (state.id === '') {
      PlayerService.getByGameId(gameId).then(resolveOncePlayerLoaded).catch(err => { console.error('fail loading the user: ', err) });
    } else {
      PlayerService.getById(state.id).then(resolveOncePlayerLoaded).catch(err => { console.error('fail loading the user', err) });
    }
  }, [currentTurn, state.id, gameId]);

  useEffect(() => {
    if (state.id !== '') {
      PlayerService.getCards(state.id).then(data => dispatch({ type: LOAD_CARDS, payload: data }));
    }
  }, [currentTurn, state.id]);

  return (
    <Provider value={{ state }}>
      {children}
    </Provider>
  );
};

export { usePlayerContext as default, PlayerContextProvider };
