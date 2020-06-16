import { MonsterEntity } from '../types';
import { api } from '../utilities';

class MonsterService {
  static getByGameId(gameId: string) {
    return api<MonsterEntity>(`/games/${gameId}/monster`);
  }

  static getById(id: string) {
    return api<MonsterEntity>(`/monsters/${id}`);
  }
}

export default MonsterService;
