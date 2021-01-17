import React from 'react';
import './footer.scss';

import { FaFacebook, FaInstagram, FaSnapchat, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { RiSnapchatLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer>

            <div className="social">
                <div className="social-links">
                    <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <TiSocialInstagramCircular />
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