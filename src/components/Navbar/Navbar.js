import React, { useContext } from 'react';
import './navbar.scss';

import Logo from '../../img/logo1.png';
import { NavLink } from 'react-router-dom';
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { auth } from '../../firebase/firebase';
import StoreContext from '../../context/StoreContext';


const Navbar = ({ currentUser }) => {
    const { cartItems } = useContext(StoreContext);
    // console.log(shopData);
    //console.log(cartItems);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse h-100" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/women" activeClassName="active">WOMEN</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/men">MEN</NavLink>
                    </li>
                    {currentUser ? <li className="nav-item">
                        <div className={currentUser ? `nav-link active` : "nav-link"} onClick={() => auth.signOut()}>SIGN OUT</div>
                    </li> : <li className="nav-item">
                            <NavLink className="nav-link" to="/signin" >SIGN IN</NavLink>
                        </li>}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorite"><HiOutlineHeart /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/checkout">
                            <RiShoppingBagLine />
                            <span className="cart-item">{cartItems.length || 0}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;