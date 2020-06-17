import React, { useState } from 'react';
import { useGameActions } from '../../context/Game';

const Login: React.FC = () => {
  const { startGame } = useGameActions();
  const [playerName, setPlayerName] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName !== '') {
      startGame(playerName);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="control">
        <input className="input" type="text" name="playerName" id="playerName" value={playerName} onChange={handleOnChange} required />
      </div>
      <button className="button mt-2 is-primary">LET'S PLAY</button>
    </form>
  );
};

export default Login;
