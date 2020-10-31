import React, { useState, useEffect } from 'react';
import './App.scss';
import StoreState from './context/StoreState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import { auth } from './firebase/firebase';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const unsubscribeFromAuth = null;

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      //console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    }

  }, []);

  return (
    <StoreState>
      <Router>
        <Navbar currentUser={currentUser} />
        <div className="container-fluid">

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>

        </div>
        <Footer />
      </Router>
    </StoreState>
  );
}

export default App;
