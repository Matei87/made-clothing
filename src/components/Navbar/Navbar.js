import React, { useContext } from 'react';
import './navbar.scss';

import Logo from '../../img/logo1.png';
import { NavLink } from 'react-router-dom';
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { auth } from '../../firebase/firebase';
import StoreContext from '../../context/StoreContext';

const Navbar = ({ currentUser }) => {
    const { shopData } = useContext(StoreContext);
    //console.log(shopData);
    //console.log(currentUser === false, currentUser !== false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {currentUser ? <li className="nav-item">
                        <div className="nav-link" onClick={() => auth.signOut()}>SIGN OUT</div>
                    </li> : <li className="nav-item">
                            <NavLink className="nav-link" to="/signin" activeStyle={{ color: '#212529' }}>SIGN IN</NavLink>
                        </li>}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/saved-lists"><HiOutlineHeart /></NavLink>
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