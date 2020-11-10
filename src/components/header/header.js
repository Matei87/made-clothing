import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
//import Card from '../../img/poza1.png';
import Bags from '../../img/poza2.png';
//import Clothes from '../../img/poza3.png';


const Header = () => {
    return (
        <header>
            <div className="image-container">
                <img src={Bags} alt="bags" />
            </div>
        </header>
    );
}

export default Header;