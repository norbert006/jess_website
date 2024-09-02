import React from "react";
import clayfulhands_logo from '../../assets/clayfulhands_logo.png'
import clayfulhands_logo_white from '../../assets/ClayfulWhite.png'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {

    return (
        <div className="app__footer section__padding">
            <div className="app__footer-links">
                <div className="app__footer-links_logo">
                    <img src={clayfulhands_logo_white} alt="footer_logo" />
                    <p className="p__opensans" style={{ color: 'aliceblue' }}>"At Clayful Hands, we believe in the magic of creativity, the joy of
                        getting messy, and the power of clay to inspire confidence and connection. Whether young or old,
                        everyone deserves the time and space to explore, create, and have fun!"</p>
                    <div className="app__footer-links_icons" style={{ color: 'aliceblue' }}>
                    <br></br>
                        <FiFacebook />
                        <FiInstagram />
                    </div>

                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans" style={{ color: 'aliceblue' }}>2024 Clayful Hands</p>
            </div>
        </div>
    )
}

export default Footer;