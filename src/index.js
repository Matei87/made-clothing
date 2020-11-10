import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import StoreState from './context/StoreState';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <StoreState>
        <Router>
            <App />
        </Router>
    </StoreState>,
    document.getElementById('root'));
