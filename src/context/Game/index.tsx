import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import { GAME_START } from './types';
import GameService from '../../services/GameService';
import { GameState } from '../../types';
import { createCtx } from '../../helpers';

type GameContextType = {
  state: GameState,
  actions: {
    startGame: (playerName: string) => void
  }
};

const [useGameContext, Provider] = createCtx<GameContextType>();

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = (playerName: string): void => {
    GameService.start(playerName)
      .then(data => dispatch({ type: GAME_START, payload: data }))
      .catch(err => console.error(err)); // error handle properly here
  };

  return (
    <Provider value={{ state, actions: { startGame } }}>
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
