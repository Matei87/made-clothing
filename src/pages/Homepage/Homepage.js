import React from 'react';
import './Homepage.scss';

import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import Spinner from '../../components/spinner/spinner';


const Homepage = () => {

    return (
        < div className="homepage">
            <Header />
            <h1 className="collection-title">New Products</h1>
            <Carousel />
        </div>
    )
}

export default Homepage;