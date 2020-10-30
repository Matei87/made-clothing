import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Card from '../../img/poza1.png';
import Bags from '../../img/poza2.png';
import Clothes from '../../img/poza3.png';


const Header = () => {
    const options = {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }

    return (
        <header>
            <Splide options={options}>
                <SplideSlide>
                    <img src={Card} alt="Image1" />
                    <Link to="/shop">Shop Now</Link>
                </SplideSlide>
                <SplideSlide>
                    <img src={Bags} alt="Image2" />
                    <Link to="/shop">Shop Now</Link>
                </SplideSlide>
                <SplideSlide>
                    <img src={Clothes} alt="Image3" />
                    <Link to="/shop">Shop Now</Link>
                </SplideSlide>
            </Splide>
        </header>
    )
}

export default Header;