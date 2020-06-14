import { GameEntity } from '../types';

class GameService {
  static async start(playerName: string): Promise<GameEntity | undefined> {
    try {
      const response = await fetch(process.env.REACT_APP_BONS_BASE_URL + '/games', {
        method: 'POST',
        body: JSON.stringify({ name: playerName })
      })

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default GameService;
