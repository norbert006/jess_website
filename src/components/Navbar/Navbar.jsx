import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from "react-icons/ai";

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images} alt="app logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="/" className="p__opensans">Inquiries</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu className="app__navbar-smallscreen-closebutton" color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-left">
                        <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#about">About</a></li>
                            <li className="p__opensans"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar