import { GameState } from '../../types';

export const initialState: GameState = {
  id: null,
  status: 'IDLE',
  currentTurn: null,
  maxTurns: null,
  turnsLeft: null
};

export default function reducer(state = initialState, action: { type: string, payload: Object | undefined }) {
  switch(action.type) {
    default:
      return state;
  }
}
