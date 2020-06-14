type GameStatus = 'IDLE' | 'ONGOING' | 'WIN' | 'LOSE';

export interface GameState {
  id: string | null;
  status: GameStatus;
  currentTurn: number | null;
  maxTurns: number | null;
  turnsLeft: number | null;
};

export const initialState: GameState = {
  id: null,
  status: 'IDLE',
  currentTurn: null,
  maxTurns: null,
  turnsLeft: null
};

export default function reducer(state = initialState, action: { type: string, action: any }) {
  switch(action.type) {
    default:
      return state;
  }
}
