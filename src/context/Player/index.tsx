import React, { useReducer, useEffect } from 'react';
import PlayerService from '../../services/PlayerService';
import reducer, { initialState } from './reducer';
import { PlayerState, PlayerEntity } from '../../types';
import { createCtx } from '../../utilities';
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
  const playerId = state.id;
  const resolveOncePlayerLoaded = (data: PlayerEntity) => dispatch({ type: LOAD_PLAYER, payload: data })
  const isPlayerLoaded = () => playerId !== '';

  useEffect(() => {
      PlayerService.getByGameId(gameId).then(resolveOncePlayerLoaded).catch(err => { console.error('fail loading the user: ', err) }).catch(console.error);
  }, [gameId]);

  useEffect(() => {
    if (isPlayerLoaded()) {
      PlayerService.getById(playerId).then(resolveOncePlayerLoaded).catch(err => { console.error('fail loading the user', err) }).catch(console.error);
    }
  }, [currentTurn])

  useEffect(() => {
    if (isPlayerLoaded()) {
      PlayerService.getCards(playerId).then(data => dispatch({ type: LOAD_CARDS, payload: data })).catch(console.error);
    }
  }, [currentTurn, playerId]);

  return (
    <Provider value={{ state }}>
      {children}
    </Provider>
  );
}

function usePlayerState() {
  const { state } = usePlayerContext();
  return state;
}

export { usePlayerContext as default, PlayerContextProvider, usePlayerState };
