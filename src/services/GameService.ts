import { GameEntity } from '../types';
import { api } from '../helpers';

class GameService {
  static async start(playerName: string) {
    return api<GameEntity>(process.env.REACT_APP_BONS_BASE_URL + '/games', {
      method: 'POST',
      body: JSON.stringify({ name: playerName }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export default GameService;
