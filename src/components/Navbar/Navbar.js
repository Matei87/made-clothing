import React from 'react';
import './navbar.scss';

import Logo from '../../img/logo1.png';
import { NavLink } from 'react-router-dom';
import { RiShoppingBagLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/shop" activeStyle={{ color: '#212529' }}>SHOP</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin" activeStyle={{ color: '#212529' }}>SIGN IN</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/checkout"><RiShoppingBagLine /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;