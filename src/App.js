import React, { Component } from 'react';
import './App.scss';

import StoreContext from './context/StoreContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Navbar from './components/navbar/navbar';
import Homepage from './pages/Homepage/Homepage';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import SavedLists from './pages/SavedLists/SavedLists';
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
  static contextType = StoreContext;

  state = {
    currentUser: null
  }


  componentDidMount() {
    const { currentUser, setCurrentUser } = this.context;

    //console.log(currentUser, setCurrentUser, this.context);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          // this.context.setCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data()
          // });
        });

      } else {
        this.setState({ currentUser: userAuth });
        //this.context.setCurrentUser(userAuth);
      }

      //console.log(this.context.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    //console.log(this.contextType, StoreContext);
    const { currentUser, setCurrentUser } = this.context;
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <ScrollToTop>
          <div className="container-fluid">

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/signin"
                render={() => this.state.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
              <Route exact path="/saved-lists" component={SavedLists} />
              <Route exact path="/women" component={Women} />
              <Route exact path="/men" component={Men} />
              <Route exact path="/checkout" component={Checkout} />

              {/* <Route exact path="/:name" component={CollectionPage} />*/}

              <Route exact path="/:name/:name" component={ItemDetails} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </ScrollToTop>
        <Footer />
      </>
    );
  }
}

export default App;
