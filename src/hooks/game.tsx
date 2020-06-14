import { useContext } from 'react';
import GameContext from '../context/Game';

export function useGameState() {
  const { state } = useContext(GameContext);
  return state;
}

export function useGameActions() {
  const { actions } = useContext(GameContext);
  return actions;
}
