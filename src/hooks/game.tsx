import useGameContext from '../context/Game';

export function useGameState() {
  const { state } = useGameContext();
  return state;
}

export function useGameActions() {
  const { actions } = useGameContext();
  return actions;
}
