import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducer';
import { GAME_START, PLAY_TURN, GAME_WON, GAME_LOST } from './types';
import GameService from '../../services/GameService';
import { GameState } from '../../types';
import { createCtx } from '../../utilities';

type GameContextType = {
  state: GameState,
  actions: {
    startGame: (playerName: string) => void,
    nextTurn: (cardId: string | undefined) => void
    notifyGameIsWon: () => void
    notifyGameIsLost: () => void
  }
};

const [useGameContext, Provider] = createCtx<GameContextType>();

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = (playerName: string): void => {
    GameService.start(playerName)
      .then(data => dispatch({ type: GAME_START, payload: data }))
      .catch(console.error); // error handle properly here
  };

  const nextTurn = (cardId: string | undefined): void => {
    const gameId = state.id;
    GameService.playNextTurn(gameId, cardId)
      .then(data => dispatch({ type: PLAY_TURN, payload: data }))
      .catch(console.error);
  };

  const notifyGameIsWon = (): void => {
    dispatch({ type: GAME_WON });
  }

  const notifyGameIsLost = () => {
    dispatch({ type: GAME_LOST });
  }

  useEffect(() => {
    if (state.currentTurn === state.maxTurns) {
      notifyGameIsLost();
    }
  }, [state.currentTurn, state.maxTurns]);

  return (
    <Provider value={{ state, actions: { startGame, nextTurn, notifyGameIsWon, notifyGameIsLost } }}>
      {children}
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
