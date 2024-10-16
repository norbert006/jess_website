import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import private_events_header from '../../assets/button2.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './InfoBox.css'

const InfoBox = ({ privateEventsRef }) => {
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
            current.scrollLeft -= 275;
        } else {
            current.scrollLeft += 275;
        }
    }
    const galleryImages = [Images.hen_image1, Images.eve_image1, Images.sub_header_finger]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <div className='background_image_phone' ref={privateEventsRef}>
                <div className='app__bg app__wrapper section__padding'>

                    <div className='app__wrapper_info'>
                        <img src={private_events_header} alt="heading_text" className='infoBox_header' />

                        <div className='app__chef-content'>
                            <div className='app__chef-content-quote infoBoxMobile'>
                                <p className='infoBox_para_mobile'>Book a Private Event with Clayful Hands
                                    Looking for a unique and creative way to celebrate? Whether it's a hen or stag do, 
                                    team-building session, or Christmas party, Clayful Hands offers tailored pottery experiences 
                                    just for you. Choose from hand-building, pottery painting, or even a combination of both, 
                                    including the chance to try your hand at the potter's wheel.
                                </p>
                            </div>
                            <p className='infoBox_para_mobile infoBoxMobile'>For more information on pricing and availability, get in touch with us today and let's plan an unforgettable event!</p>
                        </div>

                        <div className='app__chef-sign'>
                            <div className="app__gallery-images" style={{ marginTop: '0rem' }}>
                                <div className="app__gallery-images_container" ref={scrollRef}>
                                    {galleryImages.map((image, index) => (
                                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                                            <img src={image} alt="gallery" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                            <BsInstagram className="gallery__image-icon" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} />
                                        </div>
                                    ))}
                                </div>
                                <div className="app__gallery-images_arrows">
                                    <BsArrowLeftShort transform="shrink-6" className="gallery__arrow-icon" onClick={() => scroll('left')} />
                                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className='background_image'>
                <div className='app__bg app__wrapper section__padding' ref={privateEventsRef}>
                    <div className="app__gallery-images">
                        <div className="app__gallery-images_container" ref={scrollRef}>
                            {galleryImages.map((image, index) => (
                                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
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

                    <div className='app__wrapper_info infoBox' style={{ marginLeft: '5rem' }}>
                        <img src={private_events_header} alt="heading_text" className='infoBox_header' />
                        <p className='infoBox_para'>Book a Private Event with Clayful Hands
                                    Looking for a unique and creative way to celebrate? Whether it's a hen or stag do, 
                                    team-building session, or Christmas party, Clayful Hands offers tailored pottery experiences 
                                    just for you. Choose from hand-building, pottery painting, or even a combination of both, 
                                    including the chance to try your hand at the potter's wheel.
                        </p>
                        <p className='infoBox_para'>For more information on pricing and availability, get in touch with us today and let's plan an unforgettable event!</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default InfoBox;