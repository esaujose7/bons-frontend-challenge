import { GameEntity, MonsterEffectsEntity } from '../types';
import { api } from '../utilities';

class GameService {
  static start(playerName: string) {
    return api<GameEntity>('/games', {
      method: 'POST',
      body: JSON.stringify({ name: playerName }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  static getById(id: string) {
    return api<GameEntity>(`/games/${id}`);
  }

  static playNextTurn(id: string, cardId: string | null = null) {
    if (cardId) {
      return api<{ game: GameEntity, monsterEffect: MonsterEffectsEntity }>(`/games/${id}/next-turn`, {
        method: 'POST',
        body: JSON.stringify({ card: cardId }),
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return api<{ game: GameEntity, monsterEffect: MonsterEffectsEntity }>(`/games/${id}/next-turn`, { method: 'POST' });
  }
}

export default GameService;
