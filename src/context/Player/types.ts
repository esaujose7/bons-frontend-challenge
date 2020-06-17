import { PlayerState, PlayerEntity, Card } from '../../types';

export const LOAD_PLAYER = 'LOAD_PLAYER';
export const LOAD_CARDS = 'LOAD_CARDS';

interface LoadPlayerAction {
  type: typeof LOAD_PLAYER
  payload: PlayerEntity
}

interface LoadPlayerCardsAction {
  type: typeof LOAD_CARDS
  payload: Card[]
}

export type PlayerActionTypes = LoadPlayerAction | LoadPlayerCardsAction;

export type PlayerContextType = {
  state: PlayerState
};

export type PlayerContextProps = {
  gameId: string,
  currentTurn: number
};