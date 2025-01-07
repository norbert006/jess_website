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
                                <p className='infoBox_para_mobile'>Host Your Own Pottery Party with Clayful Hands!

                                    Celebrate in a fun and creative way—choose your activity: hand-building, pottery painting, & the potter's wheel. You can even select a combination of these. Whether you're new to clay or looking for something new, we’ll tailor the experience to make it truly memorable for you.
                                    Perfect for any occasion—hen dos, team-building sessions, or festive parties! We can bring the fun to the comfort of your home or host the event at a local venue near you.

                                    Let’s plan an unforgettable celebration—get in touch for pricing and availability today!
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
                        <p className='infoBox_para'>Host Your Own Pottery Party with Clayful Hands!

                            Celebrate in a fun and creative way—choose your activity: hand-building, pottery painting, & the potter's wheel. You can even select a combination of these. Whether you're new to clay or looking for something new, we’ll tailor the experience to make it truly memorable for you.
                            Perfect for any occasion—hen dos, team-building sessions, or festive parties! We can bring the fun to the comfort of your home or host the event at a local venue near you.

                            Let’s plan an unforgettable celebration—get in touch for pricing and availability today!
                        </p>
                        {/* <p className='infoBox_para'>For more information on pricing and availability, get in touch with us today and let's plan an unforgettable event!</p> */}
                        <img src={enquire_button} alt="heading_text" className='enquire_button' onClick={() => handleScroll(contactUsRef)} />
                    </div>
                </div>
            </div>
        )
    }
};

export default InfoBox;