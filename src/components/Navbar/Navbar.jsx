import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from "react-icons/ai";
import clayfulhands_logo from '../../assets/clayfulhands_logo_transparent.png'
import './Navbar.css';

const Navbar = ({ aboutUsRef, privateEventsRef, logoHomeRef, contactUsRef }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (toggleMenu) {
            setShowOverlay(true);
        } else {
            setTimeout(() => setShowOverlay(false), 500); // Delay the hiding of the overlay to allow the sliding animation
        }
    }, [toggleMenu]);

    const handleScroll = (ref) => {
        console.log(ref);
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollMobile = (ref) => {
        console.log(ref);
        if (ref && ref.current) {
            setToggleMenu(false)
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#home" onClick={() => handleScroll(logoHomeRef)}><img src={clayfulhands_logo} alt="app_logo" /></a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home" onClick={() => handleScroll(logoHomeRef)}>HOME</a></li>
                <li className="p__opensans"><a href="#upcoming">UPCOMING</a></li>
                <li className="p__opensans"><a href="#about_us" onClick={() => handleScroll(aboutUsRef)}>ABOUT US</a></li>
                <li className="p__opensans"><a href="#private_events" onClick={() => handleScroll(privateEventsRef)}>PRIVATE EVENTS</a></li>
                <li className="p__opensans"><a href="#contact_us" onClick={() => handleScroll(contactUsRef)}>CONTACT US</a></li>
            </ul>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu className="app__navbar-smallscreen-closebutton" color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />

                {showOverlay && (
                    <div className={`app__navbar-smallscreen_overlay flex__center ${toggleMenu ? 'slide-left' : 'slide-right'}`}>
                        <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans"><a href="#upcoming">UPCOMING</a></li>
                            <li className="p__opensans"><a href="#about_us" onClick={() => handleScrollMobile(aboutUsRef)}>ABOUT US</a></li>
                            <li className="p__opensans"><a href="#private_events" onClick={() => handleScrollMobile(privateEventsRef)}>PRIVATE EVENTS</a></li>
                            <li className="p__opensans"><a href="#contact_us" onClick={() => handleScrollMobile(contactUsRef)}>CONTACT US</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;