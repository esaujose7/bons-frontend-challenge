export type GameResult = 'WIN' | 'LOSE';

export type GameStatus = 'IDLE' | 'ONGOING' | GameResult;

export interface GameEntity {
  id: string | null;
  currentTurn: number | null;
  maxTurns: number | null;
  turnsLeft: number | null;
}

export interface GameState extends GameEntity {
  status: GameStatus;
};

export interface PlayerEntity {
  id: string | null;
  hp: number | null;
  maxHp: number | null;
  shield: number | null;
  name: string | null;
  cards: Card[] | [];
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
