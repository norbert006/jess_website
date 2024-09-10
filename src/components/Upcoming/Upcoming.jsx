import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import upcoming_header from '../../assets/button1.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './Upcoming.css'

const Upcoming = ({ upcomingEventsRef }) => {
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

    const isMobile = width <= 1200;

    const scrollRef = React.useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 964;
        } else {
            current.scrollLeft += 964;
        }
    }
    const galleryImages = [Images.pottery_lounge, Images.eve_image1, Images.sub_header_finger, Images.sub_header_finger, Images.sub_header_finger, Images.sub_header_finger]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <h1>IS MOBILE</h1>
        )
    } else {
        return (
            <div className='upcoming_bg upcoming__wrapper upcoming_padding' ref={upcomingEventsRef}>
                <div className='upcoming__wrapper_info upcoming'>
                    <img src={upcoming_header} alt="heading_text" className='upcoming_header' />
                    <p className='upcoming_para'>Upcoming Pottery Events: Get Creative with Clayful Hands!
                    Discover our latest workshops and experiences—perfect for all skill levels & abilities!
                    </p>
                </div>

                <div className="upcoming_gallery_images">
                    <div className="upcoming_gallery_images_container" ref={scrollRef}>
                        {galleryImages.map((image, index) => (
                            <div className="upcoming_gallery_images_card flex__center" key={`gallery_image-${index + 1}`}>
                                <img src={image} alt="gallery" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                <BsInstagram className="gallery__image-icon" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                            </div>
                        ))}
                    </div>
                    <div className="app__gallery-images_arrows">
                        <BsArrowLeftShort transform="shrink-2" className="gallery__arrow-icon" onClick={() => scroll('left')} />
                        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Upcoming;