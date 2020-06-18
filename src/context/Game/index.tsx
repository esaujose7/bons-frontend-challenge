import React, { useReducer, useState } from 'react';
import reducer, { initialState } from './reducer';
import GameService from '../../services/GameService';
import { GAME_START, PLAY_TURN, GAME_WON, GAME_LOST, RESTART_GAME, GAME_ERROR, GAME_LOAD_AFTER_ERROR, GameContextType } from './types';
import { createCtx } from '../../utilities';

const [useGameContext, Provider] = createCtx<GameContextType>();

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoadError, setInitialLoadError] = useState<Error | null>(null);

  const startGame = (playerName: string): void => {
    setIsLoading(true);
    setInitialLoadError(null);
    GameService.start(playerName)
      .then(data => dispatch({ type: GAME_START, payload: data }))
      .catch(setInitialLoadError)
      .finally(() => { setIsLoading(false); });
  };

  const nextTurn = (cardId: string | undefined): void => {
    setIsLoading(true);
    GameService.playNextTurn(state.id, cardId)
      .then(data => dispatch({ type: PLAY_TURN, payload: data }))
      .catch(notifyError)
      .finally(() => { setIsLoading(false); });
  };

  const loadGameAfterError = () => {
    setIsLoading(true);
    GameService.getById(state.id)
      .then(data => dispatch({ type: GAME_LOAD_AFTER_ERROR, payload: data }))
      .catch(err => { setInitialLoadError(err); restartGame(); })
      .finally(() => { setIsLoading(false); });
  };

  const notifyError = (err: Error) => {
    dispatch({ type: GAME_ERROR, payload: err });
  }

  const notifyGameIsWon = (): void => {
    dispatch({ type: GAME_WON });
  }

  const notifyGameIsLost = () => {
    dispatch({ type: GAME_LOST });
  }

  const restartGame = () => {
    dispatch({ type: RESTART_GAME });
  }

  const contextOutput = {
    state: { ...state, isLoading },
    actions: { startGame, nextTurn, notifyGameIsWon, notifyGameIsLost, restartGame, notifyError, loadGameAfterError }
  };

  return (
    <Provider value={contextOutput}>
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
