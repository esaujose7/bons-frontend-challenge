import React, { useReducer, useEffect, useCallback } from 'react';
import PlayerService from '../../services/PlayerService';
import reducer, { initialState } from './reducer';
import { createCtx } from '../../utilities';
import { LOAD_CARDS, LOAD_PLAYER, PlayerContextType, PlayerContextProps } from './types';
import { useGameActions } from '../Game';

const [usePlayerContext, Provider] = createCtx<PlayerContextType>();

const PlayerContextProvider: React.FC<PlayerContextProps> = ({ children, gameId, currentTurn }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isPlayerLoaded = useCallback(() => state.id !== '', [state.id]);
  const { notifyGameIsLost, notifyError } = useGameActions();

  useEffect(() => { // load player initially by gameId
      PlayerService.getByGameId(gameId).then((data) => dispatch({ type: LOAD_PLAYER, payload: data })).catch(notifyError);
  }, [gameId]);

  useEffect(() => { // afterwards, load the player after each turn
    if (isPlayerLoaded()) {
      PlayerService.getById(state.id).then((data) => dispatch({ type: LOAD_PLAYER, payload: data })).catch(notifyError);
    }
  }, [currentTurn]);

  useEffect(() => { // load the cards once the player has been loaded, and load cards after each turn.
    if (isPlayerLoaded()) {
      PlayerService.getCards(state.id).then(data => dispatch({ type: LOAD_CARDS, payload: data })).catch(notifyError);
    }
  }, [currentTurn, state.id]);

  useEffect(() => { // if we run out of hp, then we lost the game.
    if (isPlayerLoaded() && state.hp <= 0) {
      notifyGameIsLost();
    }
  }, [state.hp]);

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
