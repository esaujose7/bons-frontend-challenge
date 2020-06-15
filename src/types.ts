export const IDLE = 'IDLE';
export const ONGOING = 'ONGOING';
export const WIN = 'WIN';
export const LOSE = 'LOSE';

export type GameResult = typeof WIN | typeof LOSE;
export type GameStatus = typeof IDLE | typeof ONGOING | GameResult;

export interface GameEntity {
  id: string;
  currentTurn: number;
  maxTurns: number;
  turnsLeft: number;
}

export interface GameState extends GameEntity {
  status: GameStatus; 
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

export interface Card {
  id: string;
  value: number;
  effect: PlayerEffects;
};

export type PlayerEffects = 'HEAL' | 'SHIELD' | 'DAMAGE';

export type MonsterEffects = PlayerEffects | 'HORROR';
