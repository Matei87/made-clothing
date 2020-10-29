import React from 'react';
import './App.scss';
import StoreState from './context/StoreState';

import Homepage from './pages/Homepage/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';


function App() {
  return (
    <StoreState>
      <Homepage />
    </StoreState>
  );
}

export default App;
