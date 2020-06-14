import React from 'react';
import ReactDOM from 'react-dom';

import { GameContextProvider } from './context/Game';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
