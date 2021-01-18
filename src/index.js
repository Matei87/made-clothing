import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById('root'));
