import { MonsterEntity } from '../../types'
import { MonsterActionTypes, LOAD_MONSTER } from './types';

export const initialState: MonsterEntity = {
  id: '',
  hp: 0, 
  maxHp: 0,
  shield: 0,
  name: '', 
  image: '', 
};

export default function reducer(state = initialState, action: MonsterActionTypes) {
  switch(action.type) {
    case LOAD_MONSTER:
      const { id, hp, maxHp, shield, name, image } = action.payload;
      return {
        ...state,
       id, hp, maxHp, shield, name, image 
      };
    default:
      return state;
  }
}
