import { GameState, IDLE } from '../../types';
import { GAME_START, PLAY_TURN, RESTART_GAME, GAME_WON, GAME_LOST, GameActionTypes } from './types';

export const initialState: GameState = {
  id: '',
  status: IDLE,
  currentTurn: 0,
  maxTurns: 0,
  turnsLeft: 0,
  lastMonsterEffect: null,
};

export default function reducer(state = initialState, action: GameActionTypes): GameState {
  switch(action.type) {
    case GAME_START:
      const { id, currentTurn, maxTurns, turnsLeft } = action.payload
      return {
        ...state,
        id,
        currentTurn,
        maxTurns,
        turnsLeft,
        status: 'ONGOING',
      };
    case PLAY_TURN:
      return {
        ...state,
        currentTurn: action.payload.game.currentTurn,
        maxTurns: action.payload.game.maxTurns,
        turnsLeft: action.payload.game.turnsLeft,
        lastMonsterEffect: action.payload.monsterEffect,
      }
    case GAME_WON:
      return {
        ...state,
        status: 'WIN'
      }
    case GAME_LOST:
      return {
        ...state,
        status: 'LOSE'
      }
    case RESTART_GAME:
      return initialState;
    default:
      return state;
  }
}
