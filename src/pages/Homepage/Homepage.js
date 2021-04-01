import React from 'react';
import './Homepage.scss';

import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
<<<<<<< HEAD
=======
import Spinner from '../../components/spinner/spinner';
>>>>>>> f575a61117d5e7d504d238b84ca4dd5dade11ef3


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