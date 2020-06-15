import { PlayerEntity, Card } from '../types';
import { api } from '../utilities';

class PlayerService {
  static getByGameId(gameId: string) {
    return api<PlayerEntity>(`/games/${gameId}/player`);
  }

  static getById(id: string) {
    return api<PlayerEntity>(`/players/${id}`);
  }

  static getCards(playerId: string) {
    return api<Card[]>(`/players/${playerId}/cards`);
  }
}

export default PlayerService;
