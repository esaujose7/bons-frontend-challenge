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
    <div className="container" style={{ width: '50%', height: '100vh' }}>
      <h1>Welcome to Bons Game!</h1>
      <h2>What's your name?</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="control">
          <input className="input" type="text" name="playerName" id="playerName" value={playerName} onChange={handleOnChange} required />
        </div> 
        <button className="button mt-2">LET'S PLAY</button>
      </form>
    </div>
  );
};

export default Login;
