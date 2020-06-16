import { GameEntity, GameState, MonsterEffects } from '../../types';

export const GAME_START = 'GAME_START';
export const PLAY_TURN = 'PLAY_TURN';
export const GAME_WON = 'GAME_WON';
export const GAME_LOST = 'GAME_LOST';
export const RESTART_GAME = 'RESTART_GAME';

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

interface GameWon {
  type: typeof GAME_WON;
}

interface GameLost {
  type: typeof GAME_LOST;
}

interface RestartGame {
  type: typeof RESTART_GAME;
}

export type GameActionTypes = StartGameAction | PlayTurn | GameWon | GameLost | RestartGame;

export type GameContextType = {
  state: GameState,
  actions: {
    startGame: (playerName: string) => void,
    nextTurn: (cardId: string | undefined) => void
    notifyGameIsWon: () => void
    notifyGameIsLost: () => void
    restartGame: () => void
  }
};
