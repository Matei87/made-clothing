import React, { useContext, useState } from 'react';
import './Homepage.scss';

//import StoreContext from '../../context/StoreContext';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';

const Homepage = () => {
    //const { isLoading, shopData } = useContext(StoreContext);

    return (
        < div className="homepage">
            <Header />
            <h1 className="collection-title">Collection</h1>
        </div>
    )
}

export default Homepage;