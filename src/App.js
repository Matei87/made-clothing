import React from 'react';
import './App.scss';
import StoreState from './context/StoreState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';


function App() {
  return (
    <StoreState>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </StoreState>
  );
}

export default App;
