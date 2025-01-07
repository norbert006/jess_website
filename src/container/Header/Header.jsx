import React, { useState, useEffect } from 'react'

import header_photo from '../../assets/header_photo.JPG'
import sub_header_finger from '../../assets/sub_header_finger.JPG';
import sub_header_hen from '../../assets/sub_header_hen.JPG';
import new_kids_club from '../../assets/new_kids_club.jpg';
import sub_header_family from '../../assets/sub_header_family.JPG';
import button1 from "../../assets/button1.svg";
import button2 from "../../assets/button2.svg";
import button3 from "../../assets/button3.svg";
import whats_on_button from "../../assets/whats_on_button.svg";
import whats_on2 from "../../assets/whats_on2.svg";
import book_now_button from "../../assets/book_now_button.svg";
import mobile_header_cover from "../../assets/mobile_header_cover2.svg"
import Images from "../../assets/Images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './Header.css'

const Header = ({ logoHomeRef, privateEventsRef, upcomingEventsRef }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [toggleMenu, setToggleMenu] = useState(false);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    const imageWidth = window.innerWidth;

    const scrollRef = React.useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return; // Add null check

        if (direction === 'left') {
            current.scrollLeft -= width;
        } else {
            current.scrollLeft += width;

            if (current.scrollLeft >= current.scrollWidth - current.clientWidth - imageWidth) {
                setTimeout(() => {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                }, 3000);
            }
        }

    }
    // const galleryImages = [Images.hen_image1, Images.eve_image1, Images.sub_header_finger]
    const galleryImages = [sub_header_hen, new_kids_club, sub_header_finger]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 5000); // Adjust the interval time as needed (e.g., 3000ms for 3 seconds)

        return () => clearInterval(interval);
    }, [width]);


    const handleScroll = (ref) => {
        console.log(ref);
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (isMobile) {
        return (
            <div className='top_container'>
                <div className="header_gallery_images_container" style={{ marginTop: '0rem' }}>
                    <div className="header_gallery_images no_scroll" ref={scrollRef}>
                        {galleryImages.map((image, index) => (
                            <div className="header_images_card flex__center" key={`gallery_image-${index + 1}`}>
                                <img src={image} alt="gallery" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                <BsInstagram className="gallery__image-icon" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                            </div>
                        ))}
                        <img src={mobile_header_cover} alt="Overlay" className="overlay_image" />
                        {/* <img src={whats_on2} className="overlay_button" onClick={() => handleScroll(upcomingEventsRef)} alt="button" /> */}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <header className='header' ref={logoHomeRef}>
                <div className='imageContainer'>
                    <img src={header_photo} alt="Header_image" className='mainImage' />
                </div>
                <div className='buttonsContainer'>
                    <img src={whats_on_button} alt="button" className='button' href="#upcoming" onClick={() => handleScroll(upcomingEventsRef)}/>
                    <img src={button2} alt="button" className='button' href="#private_events" onClick={() => handleScroll(privateEventsRef)} />
                    <img src={button3} alt="button" className='button' onClick={() => openWebsite("https://bookwhen.com/clayfulhands#focus=ev-s767-20250201100000")}/>
                </div>
                <div className='thumbnailsContainer'>
                    <img src={sub_header_finger} alt="Subheader_image" className='thumbnail' />
                    <img src={sub_header_hen} alt="Subheader_image" className='thumbnail' />
                    <img src={new_kids_club} alt="Subheader_image" className='thumbnail' />
                </div>
            </header>
        )
    }
}

export default Header;