import { PlayerState } from '../../types';
import { LOAD_CARDS, LOAD_PLAYER, PlayerActionTypes } from './types';

export const initialState: PlayerState = {
  id: '',
  hp: 0,
  maxHp: 0,
  shield: 0,
  name: '',
  cards: [{id: '2',effect: 'HEAL', value: 3 }, {id: '2',effect: 'HEAL', value: 3 }, {id: '2',effect: 'HEAL', value: 3 }, {id: '2',effect: 'HEAL', value: 3 }]
};

export default function reducer(state = initialState, action: PlayerActionTypes): PlayerState {
  switch(action.type) {
    case LOAD_PLAYER:
      const { id, hp, maxHp, shield, name } = action.payload;
      return {
        ...state,
        id,
        hp,
        maxHp,
        shield,
        name
      };
    case LOAD_CARDS:
      return {
        ...state,
        cards: action.payload.map(({ id, effect, value }) => ({ id, effect, value }))
      }
    default:
      return state;
  }
}
