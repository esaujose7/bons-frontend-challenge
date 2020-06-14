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
