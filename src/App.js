import React, { useState, useEffect } from 'react';
import './App.scss';
import StoreState from './context/StoreState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Homepage from './pages/Homepage/Homepage';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import SavedLists from './pages/SavedLists/SavedLists';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';

import ItemDetails from './pages/ItemDetails/ItemDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import { auth, createUserProfileDocument } from './firebase/firebase';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };

  }

  //const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   //let unsubscribeFromAuth = null;

  //   let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         });
  //       });

  //     } else {
  //       setCurrentUser({ currentUser: userAuth })
  //     }

  //     console.log(currentUser);
  //   });

  //   return () => {
  //     unsubscribeFromAuth();
  //   }

  // }, []);

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {


      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

      } else {
        this.setState({ currentUser: userAuth })
      }

      //console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <StoreState>
        <Router>
          <Navbar currentUser={this.state.currentUser} />
          <div className="container-fluid">

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/signin" component={SignInAndSignUpPage} />
              <Route exact path="/saved-lists" component={SavedLists} />
              <Route exact path="/women" component={Women} />
              <Route exact path="/men" component={Men} />

              {/* <Route exact path="/:name" component={CollectionPage} />*/}

              <Route exact path="/:name/:name" component={ItemDetails} />
              <Route component={NotFound} />
            </Switch>

          </div>
          <Footer />
        </Router>
      </StoreState>
    );
  }
}

export default App;
