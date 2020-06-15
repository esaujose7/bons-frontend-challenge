import { MonsterEntity } from '../types';
import { api } from '../helpers';

class MonsterService {
  static getByGameId(gameId: string) {
    return api<MonsterEntity>(`/games/${gameId}/monster`);
  }

  static getById(id: string) {
    return api<MonsterEntity>(`/players/${id}`);
  }
}

export default MonsterService;
