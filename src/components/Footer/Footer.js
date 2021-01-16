import React from 'react';
import './footer.scss';

import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaSnapchat, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';


const Footer = () => {
    return (
        <footer>

            <div className="social">
                <div className="social-links">
                    <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://www.snapchat.com/" target="_blank">
                        <FaSnapchat />
                    </a>
                </div>
                <div className="social-cards">
                    <span>
                        <FaCcVisa />
                    </span>
                    <span>
                        <FaCcMastercard />
                    </span>
                    <span>
                        <FaCcPaypal />
                    </span>
                    <span>
                        <SiAmericanexpress />
                    </span>
                </div>
            </div>

            <span className="copyright">Copyright © 2020 Matei Mircea</span>
        </footer>
    )
}

export default Footer;