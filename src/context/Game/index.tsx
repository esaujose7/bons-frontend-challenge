import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';
import GameService from '../../services/GameService';

const GameContext = createContext({ state: initialState, actions: {  } });

const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = (playerName: string): void => {
    GameService.start(playerName)
      .then(data => dispatch({ type: 'GAME_START', payload: data }))
      .catch(err => console.error(err));
  };
  
  return (
    <GameContext.Provider value={{ state, actions: { startGame } }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext as default, GameContextProvider };
