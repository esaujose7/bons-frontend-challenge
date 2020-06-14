import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';
import GameService from '../../services/GameService';

const GameContext = createContext(initialState);

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = (playerName: string): void => {
    GameService.start(playerName)
      .then(data => dispatch({ type: 'GAME_STARTED', payload: data }))
      .catch(err => console.error(err));
  };
  
  return (
    <GameContext.Provider value={state}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext as default, GameContextProvider };
