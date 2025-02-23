import React, { useReducer, useEffect, useCallback, useState } from 'react';
import PlayerService from '../../services/PlayerService';
import reducer, { initialState } from './reducer';
import { createCtx } from '../../utilities';
import { LOAD_CARDS, LOAD_PLAYER, PlayerContextType, PlayerContextProps } from './types';
import { PlayerEntity } from '../../types';
import { useGameActions } from '../Game';

const [usePlayerContext, Provider] = createCtx<PlayerContextType>();

const PlayerContextProvider: React.FC<PlayerContextProps> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsloading] = useState(false);
  const isPlayerLoaded = useCallback(() => state.id !== '', [state.id]);
  const { notifyError } = useGameActions();

  const loadUserCards = (data: PlayerEntity) => {
    PlayerService.getCards(data.id)
      .then(data => dispatch({ type: LOAD_CARDS, payload: data }))
      .catch(notifyError)
      .finally(() => { setIsloading(false); });
  }

  useEffect(() => { // load player initially by gameId
      setIsloading(true);
      PlayerService.getByGameId(gameId)
        .then((data) => {
          dispatch({ type: LOAD_PLAYER, payload: data });
          loadUserCards(data);
        })
        .catch(notifyError)
  }, [gameId]);

  useEffect(() => { // afterwards, load the player after each turn
    if (isPlayerLoaded()) {
      setIsloading(true);
      PlayerService.getById(state.id)
        .then((data) => {
          dispatch({ type: LOAD_PLAYER, payload: data });
          loadUserCards(data);
        })
        .catch(notifyError);
    }
  }, [currentTurn]);

  return (
    <Provider value={{ state: { ...state, isLoading } }}>
      {children}
    </Provider>
  );
}

function usePlayerState() {
  const { state } = usePlayerContext();
  return state;
}

export { usePlayerContext as default, PlayerContextProvider, usePlayerState };
