import React, { useReducer, useContext, createContext } from 'react';
import reducer, { initialState,  } from './reducer';

const GameContext = createContext(initialState);

const GameContextProvider: React.FC = ({ children }) => {
  const [gameState, dispatch] = useReducer(reducer, initialState);
  
  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext as default, GameContextProvider };
