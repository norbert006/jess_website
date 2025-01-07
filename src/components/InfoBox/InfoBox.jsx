import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import private_events_header from '../../assets/button2.svg'
import enquire_button from '../../assets/enquire_button.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './InfoBox.css'

const InfoBox = ({ privateEventsRef, contactUsRef }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
    const galleryImages = [
        Images.private_events1, Images.private_events5, Images.private_events4,
        Images.private_events2, Images.private_events3, Images.private_events6,
        Images.private_events7, Images.private_events8, Images.hen_image1,
        Images.eve_image1, Images.sub_header_finger
    ]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

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

    if (isMobile) {
        return (
            <div className='background_image_phone' ref={privateEventsRef}>
                <div className='app__bg app__wrapper section__padding'>

                    <div className='app__wrapper_info'>
                        <img src={private_events_header} alt="heading_text" className='infoBox_header' />

                        <div className='app__chef-content'>
                            <div className='app__chef-content-quote infoBoxMobile'>
                                <p className='infoBox_para_mobile'>
                                    <h3>Book an event with Clayful Hands</h3>
                                    Looking for a fun and creative way to celebrate? Whether it’s a birthday, hen do, team-building session, or Christmas party, Clayful Hands offers tailored pottery experiences to make your event truly memorable.
                                    <br></br>
                                    <br></br>
                                    Choose from a variety of techniques, including:
                                    <li>Hand-building</li>
                                    <li>Pottery painting</li>
                                    <li>Throwing on the potter's wheel</li>
                                    <li>A combination of hand-building or pottery painting with throwing</li>
                                    <br></br>
                                    Private parties start from £200. We can host your event at a local venue, or bring the creativity to the comfort of your own home!
                                    For more information on pricing, party packages and availability, get in touch today and let’s plan a special celebration together!
                                </p>
                            </div>
                            {/* <p className='infoBox_para_mobile infoBoxMobile'>For more information on pricing and availability, get in touch with us today and let's plan an unforgettable event!</p> */}
                            <img src={enquire_button} alt="heading_text" className='enquire_button' onClick={() => handleScrollMobile(contactUsRef)} />
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
                        <p className='infoBox_para'>
                            <h3>Book an event with Clayful Hands</h3>
                            Looking for a fun and creative way to celebrate? Whether it’s a birthday, hen do, team-building session, or Christmas party, Clayful Hands offers tailored pottery experiences to make your event truly memorable.
                            <br></br>
                            <br></br>
                            Choose from a variety of techniques, including:
                            <li>Hand-building</li>
                            <li>Pottery painting</li>
                            <li>Throwing on the potter's wheel</li>
                            <li>A combination of hand-building or pottery painting with throwing</li>
                            <br></br>
                            Private parties start from £200. We can host your event at a local venue, or bring the creativity to the comfort of your own home!
                            For more information on pricing, party packages and availability, get in touch today and let’s plan a special celebration together!
                        </p>
                        <img src={enquire_button} alt="heading_text" className='enquire_button' onClick={() => handleScroll(contactUsRef)} />
                    </div>
                </div>
            </div>
        )
    }
};

export default InfoBox;