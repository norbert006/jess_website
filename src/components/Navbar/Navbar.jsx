import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from "react-icons/ai";
import clayfulhands_logo from '../../assets/clayfulhands_logo_transparent.webp'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import './Navbar.css';

const Navbar = ({ aboutUsRef, logoHomeRef, contactUsRef }) => {
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
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollMobile = (ref) => {
        if (ref && ref.current) {
            setToggleMenu(false)
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '/home';
    const currentPath = location.pathname + location.hash;
    const isActive = (path) => currentPath.startsWith(path);

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>
            {isHome ? (
                <nav className="app__navbar">
                    <div className="app__navbar-logo">
                        <a href="#home" onClick={() => handleScroll(logoHomeRef)}><img src={clayfulhands_logo} alt="app_logo" /></a>
                    </div>
                    <ul className="app__navbar-links">
                        <li className="p__opensans"><a href="#about_us" onClick={() => handleScroll(aboutUsRef)}>ABOUT US</a></li>
                        <li className="p__opensans"><a href="#contact_us" onClick={() => handleScroll(contactUsRef)}>CONTACT US</a></li>
                        <li>
                            <FiFacebook style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.facebook.com/clayfulhands/")} />
                        </li>
                        <li>
                            <FiInstagram style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                        </li>
                    </ul>
                    <div className="app__navbar-smallscreen">
                        <GiHamburgerMenu className="app__navbar-smallscreen-closebutton" color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />

                        {showOverlay && (
                            <div className={`app__navbar-smallscreen_overlay flex__center ${toggleMenu ? 'slide-left' : 'slide-right'}`}>
                                <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                                <ul className="app__navbar-smallscreen_links">
                                    <li className="p__opensans"><a href="#about_us" onClick={() => handleScrollMobile(aboutUsRef)}>ABOUT US</a></li>
                                    <li className="p__opensans"><a href="#contact_us" onClick={() => handleScrollMobile(contactUsRef)}>CONTACT US</a></li>
                                    <li>
                                        <FiFacebook style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.facebook.com/clayfulhands/")} />
                                        <FiInstagram style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            ) : (
                <nav className="app__navbar">
                    <div className="app__navbar-logo">
                        <Link to="/#home"><img src={clayfulhands_logo} alt="app_logo" />{console.log(currentPath)}</Link>
                    </div>
                    <ul className="app__navbar-links">
                        <li className="p__opensans"><Link to="/#home">HOME</Link></li>
                        <li className={currentPath.endsWith("pottery_courses") ? "active" : "p__opensans"}><Link to="/services/pottery_courses">COURSES</Link></li>
                        <li className={currentPath.endsWith("kids_pottery") ? "active" : "p__opensans"}><Link to="/services/kids_pottery">KIDS POTTERY</Link></li>
                        <li className={currentPath.endsWith("pottery_painting") ? "active" : "p__opensans"}><Link to="/services/pottery_painting">POTTERY PAINTING</Link></li>
                        <li className={currentPath.endsWith("pop_up_events") ? "active" : "p__opensans"}><Link to="/services/pop_up_events">STUDIO MEMBERSHIP</Link></li>
                        <li className={currentPath.endsWith("studio_membership") ? "active" : "p__opensans"}><Link to="/services/studio_membership">POP-UP EVENTS</Link></li>
                        <li className={currentPath.endsWith("private_booking") ? "active" : "p__opensans"}><Link to="/services/private_booking">PRIVATE EVENTS</Link></li>
                        <Link to="/#contact_us"><li className="p__opensans">CONTACT US</li></Link>
                        <li>
                            <FiFacebook style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.facebook.com/clayfulhands/")} />
                        </li>
                        <li>
                            <FiInstagram style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                        </li>
                    </ul>
                    <div className="app__navbar-smallscreen">
                        <GiHamburgerMenu className="app__navbar-smallscreen-closebutton" color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />

                        {showOverlay && (
                            <div className={`app__navbar-smallscreen_overlay flex__center ${toggleMenu ? 'slide-left' : 'slide-right'}`}>
                                <AiOutlineCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                                <ul className="app__navbar-smallscreen_links">
                                    <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/#home">HOME</Link></li>
                                    <li className={currentPath.endsWith("pottery_courses") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/pottery_courses">COURSES</Link></li>
                                    <li className={currentPath.endsWith("kids_pottery") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/kids_pottery">KIDS POTTERY</Link></li>
                                    <li className={currentPath.endsWith("pottery_painting") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/pottery_painting">POTTERY PAINTING</Link></li>
                                    <li className={currentPath.endsWith("pop_up_events") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/pop_up_events">STUDIO MEMBERSHIP</Link></li>
                                    <li className={currentPath.endsWith("studio_membership") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/studio_membership">POP-UP EVENTS</Link></li>
                                    <li className={currentPath.endsWith("private_booking") ? "active" : "p__opensans"} onClick={() => setToggleMenu(false)}><Link to="/services/private_booking">PRIVATE EVENTS</Link></li>
                                    <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/#contact_us">CONTACT US</Link></li>
                                    <li>
                                        <FiFacebook style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.facebook.com/clayfulhands/")} />
                                        <FiInstagram style={{ cursor: 'pointer' }} onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            )}
        </div>
    )
}

export default Navbar;