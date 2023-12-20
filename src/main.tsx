import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'; // Tämä oletustiedosto sisältää perustyylit

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

