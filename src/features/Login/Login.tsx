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
    <>
      <h1>Welcome to Bons Game!</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="playerName">What's your name?</label>
        <input type="text" name="playerName" id="playerName" value={playerName} onChange={handleOnChange} required />
        <button>LET'S PLAY</button>
      </form>
    </>
  );
};

export default Login;
