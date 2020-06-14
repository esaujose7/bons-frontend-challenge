import { GameEntity } from '../../types';

export const GAME_START = 'GAME_START';

interface StartGameAction {
  type: typeof GAME_START
  payload: GameEntity
}

export type GameActionTypes = StartGameAction;
