export type GameResult = 'WIN' | 'LOSE';

export type GameStatus = 'IDLE' | 'ONGOING' | GameResult;

export interface GameEntity {
  id: string;
  currentTurn: number;
  maxTurns: number;
  turnsLeft: number;
}

export interface GameState extends GameEntity {
  status: GameStatus;
};

export interface PlayerEntity {
  id: string;
  hp: number;
  maxHp: number;
  shield: number;
  name: string;
  cards: Card[];
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
