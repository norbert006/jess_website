import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from "react-icons/ai";
import clayfulhands_logo from '../../assets/clayfulhands_logo.png';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (toggleMenu) {
            setShowOverlay(true);
        } else {
            setTimeout(() => setShowOverlay(false), 500); // Delay the hiding of the overlay to allow the sliding animation
        }
    }, [toggleMenu]);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#home"><img src={clayfulhands_logo} alt="app_logo" /></a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">HOME</a></li>
                <li className="p__opensans"><a href="#upcoming">UPCOMING</a></li>
                <li className="p__opensans"><a href="#about_us">ABOUT US</a></li>
                <li className="p__opensans"><a href="#private_events">PRIVATE EVENTS</a></li>
                <li className="p__opensans"><a href="#contact_us">CONTACT US</a></li>
            </ul>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu className="app__navbar-smallscreen-closebutton" color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />

                {showOverlay && (
                    <div className={`app__navbar-smallscreen_overlay flex__center ${toggleMenu ? 'slide-left' : 'slide-right'}`}>
                        <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans"><a href="#home">HOME</a></li>
                            <li className="p__opensans"><a href="#upcoming">UPCOMING</a></li>
                            <li className="p__opensans"><a href="#about_us">ABOUT US</a></li>
                            <li className="p__opensans"><a href="#private_events">PRIVATE EVENTS</a></li>
                            <li className="p__opensans"><a href="#contact_us">CONTACT US</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;