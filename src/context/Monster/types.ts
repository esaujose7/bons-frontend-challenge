import { MonsterEntity } from '../../types';

export const LOAD_MONSTER = 'LOAD_MONSTER';

interface LoadMonsterAction {
  type: typeof LOAD_MONSTER; 
  payload: MonsterEntity;
}

export type MonsterActionTypes = LoadMonsterAction;
