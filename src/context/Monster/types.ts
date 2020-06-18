import { MonsterEntity, MonsterState, isLoading } from '../../types';

export const LOAD_MONSTER = 'LOAD_MONSTER';

interface LoadMonsterAction {
  type: typeof LOAD_MONSTER; 
  payload: MonsterEntity;
}

export type MonsterActionTypes = LoadMonsterAction;


export type Props = {
  gameId: string,
  currentTurn: number
};

export type MonsterContextType = {
  state: MonsterState & isLoading;
};
