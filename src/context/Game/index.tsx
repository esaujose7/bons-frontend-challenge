import React, { useReducer, useEffect, useState } from 'react';
import reducer, { initialState } from './reducer';
import GameService from '../../services/GameService';
import { GAME_START, PLAY_TURN, GAME_WON, GAME_LOST, RESTART_GAME, GAME_ERROR, GAME_LOAD_AFTER_ERROR, GameContextType } from './types';
import { ONGOING } from '../../types';
import { createCtx } from '../../utilities';

const [useGameContext, Provider] = createCtx<GameContextType>();

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [initialLoadError, setInitialLoadError] = useState<Error | null>(null);

  const startGame = (playerName: string): void => {
    setInitialLoadError(null);
    GameService.start(playerName)
      .then(data => dispatch({ type: GAME_START, payload: data }))
      .catch(setInitialLoadError);
  };

  const notifyError = (err: Error) => {
    dispatch({ type: GAME_ERROR, payload: err });
  }

  const nextTurn = (cardId: string | undefined): void => {
    const gameId = state.id;
    GameService.playNextTurn(gameId, cardId)
      .then(data => dispatch({ type: PLAY_TURN, payload: data }))
      .catch(notifyError);
  };

  const notifyGameIsWon = (): void => {
    dispatch({ type: GAME_WON });
  }

  const notifyGameIsLost = () => {
    dispatch({ type: GAME_LOST });
  }

  const restartGame = () => {
    dispatch({ type: RESTART_GAME });
  }

  const loadGameAfterError = () => {
    GameService.getById(state.id)
      .then(data => dispatch({ type: GAME_LOAD_AFTER_ERROR, payload: data }))
      .catch(setInitialLoadError);
  };

  useEffect(() => { // if the game is ongoing and we run out of turns it means we lost.
    if (state.currentTurn === state.maxTurns && state.status === ONGOING) {
      notifyGameIsLost();
    }
  }, [state.currentTurn, state.maxTurns, state.status]);

  return (
    <Provider value={{ state, actions: { startGame, nextTurn, notifyGameIsWon, notifyGameIsLost, restartGame, notifyError, loadGameAfterError } }}>
      {children}
      {initialLoadError && 'Something went wrong. Please try again.'}
    </Provider>
  );
};

function useGameState() {
  const { state } = useGameContext();
  return state;
}

function useGameActions() {
  const { actions } = useGameContext();
  return actions;
}

export { useGameContext as default, GameContextProvider, useGameState, useGameActions };
