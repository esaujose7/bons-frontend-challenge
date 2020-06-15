import { GameState, IDLE } from '../../types';
import { GAME_START, GameActionTypes } from './types';

export const initialState: GameState = {
  id: '',
  status: IDLE,
  currentTurn: 0,
  maxTurns: 0,
  turnsLeft: 0
};

export default function reducer(state = initialState, action: GameActionTypes): GameState {
  switch(action.type) {
    case GAME_START:
      const { id, currentTurn, maxTurns, turnsLeft } = action.payload
      return {
        id,
        currentTurn,
        maxTurns,
        turnsLeft,
        status: 'ONGOING',
      };
    default:
      return state;
  }
}
