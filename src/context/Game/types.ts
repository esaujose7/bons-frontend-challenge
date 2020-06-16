import { GameEntity, MonsterEffects } from '../../types';

export const GAME_START = 'GAME_START';
export const PLAY_TURN = 'PLAY_TURN';

interface StartGameAction {
  type: typeof GAME_START
  payload: GameEntity
}

interface PlayTurn {
  type: typeof PLAY_TURN
  payload: { 
    game: GameEntity,
    monsterEffect: {
      effect: MonsterEffects;
      value: number;
    };
   }
}

export type GameActionTypes = StartGameAction | PlayTurn;
