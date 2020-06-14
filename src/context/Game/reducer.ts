import { GameState } from '../../types';
import { GAME_START, GameActionTypes } from './types';

export const initialState: GameState = {
  id: null,
  status: 'IDLE',
  currentTurn: null,
  maxTurns: null,
  turnsLeft: null
};

export default function reducer(state = initialState, action: GameActionTypes): GameState {
  switch(action.type) {
    case GAME_START:
      return {
        id: action.payload.id,
        currentTurn: action.payload.currentTurn,
        maxTurns: action.payload.maxTurns,
        turnsLeft: action.payload.turnsLeft,
        status: 'ONGOING',
      };
    default:
      return state;
  }
}
