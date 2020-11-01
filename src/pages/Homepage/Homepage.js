import React, { useContext, useState } from 'react';
import './Homepage.scss';

import StoreContext from '../../context/StoreContext';
import Header from '../../components/header/header';
import Directory from '../../components/directory/directory';
import Spinner from '../../components/spinner/spinner';

const Homepage = () => {
    const { isLoading, shopData, sections } = useContext(StoreContext);

    return (
        < div className="homepage">
            <Header />
            <h1 className="collection-title">Collection</h1>
            <Directory />
        </div>
    )
}

export default Homepage;