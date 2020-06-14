import React, { useState } from 'react';

const Login: React.FC = () => {
  const [playerName, setPlayerName] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(playerName);
  };

  return (
    <>
      <h1>Welcome to Bons Game!</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="playerName">What's your name?</label>
        <input type="text" name="playerName" id="playerName" value={playerName} onChange={(e) => { setPlayerName(e.target.value) }} required />
        <button>LET'S PLAY</button>
      </form>
    </>
  );
};

export default Login;
