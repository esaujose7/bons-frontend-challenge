import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import { PlayerState } from '../../types';
import { createCtx } from '../../helpers';
import { useGameState } from '../../hooks/game';

type PlayerContextType = {
  state: PlayerState,
  actions: {
    loadPlayer: () => void
  }
};

const [usePlayerContext, Provider] = createCtx<PlayerContextType>();

const PlayerContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id: gameId } = useGameState();

  const loadPlayer = (): void => {

  };

  return (
    <Provider value={{ state, actions: { loadPlayer } }}>
      {children}
    </Provider>
  );
};

export { usePlayerContext as default, PlayerContextProvider };
