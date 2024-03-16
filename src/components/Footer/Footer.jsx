import React from "react";
import clayfulhands_logo from '../../assets/clayfulhands_logo.png'
import clayfulhands_logo_transparent from '../../assets/clayfulhands_logo_transparent.png'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {

    return (
        <div className="app__footer section__padding">
            <div className="app__footer-links">
                <div className="app__footer-links_logo">
                    <img src={clayfulhands_logo_transparent} alt="footer_logo" />
                    <p className="p__opensans">"This could be a nice little quote"</p>
                    {/* <img src={line_breaker} alt="footer_line_breaker" classname="spoon_img" stlye={{marginTop: 15}} /> Find some sort of a linebreaker image */}
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiInstagram />
                    </div>

                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2024 Clayful Hands</p>
            </div>
        </div>
    )
}

export default Footer;