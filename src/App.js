import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Navbar from './components/navbar/navbar';
import Homepage from './pages/Homepage/Homepage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import Favorite from './pages/Favorite/Favorite';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Checkout from './pages/Checkout/Checkout';

import ItemDetails from './pages/ItemDetails/ItemDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import { auth, createUserProfileDocument } from './firebase/firebase';


class App extends Component {

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <>
        <Navbar />
        <ScrollToTop>
          <div className="container-fluid">

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/signin"
                render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
              <Route exact path="/favorite" component={Favorite} />
              <Route exact path="/women" component={Women} />
              <Route exact path="/men" component={Men} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/:edit/:details" component={ItemDetails} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </ScrollToTop>
        <Footer />
      </>
    );
  }
}

const mapStateToPros = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToPros, mapDispatchToProps)(App);