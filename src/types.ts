// Possible states of the game
export const IDLE = 'IDLE';
export const ONGOING = 'ONGOING';
export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const ERROR = 'ERROR';

export type GameResult = typeof WIN | typeof LOSE;
export type GameStatus = typeof IDLE | typeof ONGOING | typeof ERROR | GameResult;

export interface GameEntity {
  id: string;
  currentTurn: number;
  maxTurns: number;
  turnsLeft: number;
}

export interface GameState extends GameEntity {
  status: GameStatus;
  lastMonsterEffect: null | MonsterEffectsEntity;
};

export type PlayerEntity = {
  id: string;
  hp: number;
  maxHp: number;
  shield: number;
  name: string;
  cards: Card[];
};

export interface PlayerState extends PlayerEntity {
};

export interface MonsterEntity {
  id: string;
  hp: number;
  maxHp: number;
  shield: number;
  name: string;
  image: string;
}

export interface MonsterState extends MonsterEntity {
}

export type PlayerEffects = 'HEAL' | 'SHIELD' | 'DAMAGE';

export interface PlayerEffectsEntity {
  value: number;
  effect: PlayerEffects;
}

export interface Card extends PlayerEffectsEntity {
  id: string;
};

export type MonsterEffects = PlayerEffects | 'HORROR';

export interface MonsterEffectsEntity {
  value: number;
  effect: MonsterEffects;
}

export type isLoading = {
  isLoading: boolean;
}