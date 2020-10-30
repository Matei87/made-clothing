import React from 'react';
import './Homepage.scss';

import Header from '../../components/header/header';
import Directory from '../../components/directory/directory';

const Homepage = () => {
    return (
        <div className="homepage">
            <Header />
            <h1 className="collection-title">Collection</h1>
            <Directory />
        </div>
    )
}

export default Homepage;