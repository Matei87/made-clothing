import React from 'react';
import './header.scss';

import Bags from '../../img/poza2.png';


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