import React, { useState, useEffect } from 'react'

import header_photo from '../../assets/header_photo.JPG'
import sub_header_finger from '../../assets/sub_header_finger.JPG';
import sub_header_hen from '../../assets/sub_header_hen.JPG';
import sub_header_family from '../../assets/sub_header_family.JPG';
import button1 from "../../assets/button1.svg";
import button2 from "../../assets/button2.svg";
import button3 from "../../assets/button3.svg";
import Images from "../../assets/Images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './Header.css'

const Header = ({ logoHomeRef }) => {

    const [width, setWidth] = useState(window.innerWidth);

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
    const galleryImages = [Images.hen_image1, Images.eve_image1, Images.sub_header_finger]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 3000); // Adjust the interval time as needed (e.g., 3000ms for 3 seconds)

        return () => clearInterval(interval);
    }, [width]);


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
                    <img src={button1} alt="button" className='button' />
                    <img src={button2} alt="button" className='button' />
                    <img src={button3} alt="button" className='button' />
                </div>
                <div className='thumbnailsContainer'>
                    <img src={sub_header_finger} alt="Subheader_image" className='thumbnail' />
                    <img src={sub_header_hen} alt="Subheader_image" className='thumbnail' />
                    <img src={sub_header_family} alt="Subheader_image" className='thumbnail' />
                </div>
            </header>
        )
    }






    // <div className='app__header app__wrapper section__padding' id="home" style={{ textAlign: 'center' }}>
    //     <div className='app__wrapper_img'>
    //         <img src={header_photo} alt='header_img' />
    //     </div>

    //     <div className='app__wraper_info'>
    //         <SubHeading title="Shape Your Creativity: Discover Pottery's Unique Flair." />
    //         <h1 className='app__header-h1'>Master the Art: Pottery Throwing Workshops for Aspiring Potters</h1>
    //         <p className='p__opensans' style={{ margin: '2rem 0' }}>
    //             Experience the Joy of Crafting Timeless Pottery Pieces with Expert Guidance and Hands-On Instruction.
    //         </p>
    //         <button type="button" className='custom__button'>Explore More</button>
    //     </div>

    // </div>
}

export default Header;