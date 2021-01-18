import React from 'react';
import './footer.scss';

import { FaFacebook, FaSnapchat, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>

            <div className="social">
                <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <AiFillTwitterCircle />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <TiSocialInstagramCircular />
                </a>
                <a href="https://www.snapchat.com/" target="_blank">
                    <FaSnapchat />
                </a>

                <p></p>

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

            <span className="copyright">Copyright © 2021 Matei Mircea</span>
        </footer>
    )
}

export default Footer;