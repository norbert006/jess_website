import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import private_events_header from '../../assets/button2.svg'
import SubHeading from '../SubHeading/SubHeading';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './InfoBox.css'

const InfoBox = () => {
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

    const scrollRef = React.useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }
    const galleryImages = [Images.hen_image1, Images.eve_image1, Images.sub_header_finger]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <div className='background_image_phone'>
            <div className='app__bg app__wrapper section__padding'>

                <div className='app__wrapper_info'>
                <img src={private_events_header} className='infoBox_header'/>

                    <div className='app__chef-content'>
                        <div className='app__chef-content-quote'>
                            <p className='p__opensans'>Hire us for a private event! We offer packages for hen/stag do's as well as team building. We can offer hand-building,
                            throwing, pottery painting or combination of throwing and pottery painting!</p>
                        </div>
                        <p className='p__opensans'>If you have an event you would like to celebrate with us then get in touch for more info on availability.</p>
                    </div>

                    <div className='app__chef-sign'>
                        <div className="app__gallery-images" style={{marginTop: '0rem'}}>
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
            <div className='app__bg app__wrapper section__padding'>
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
                    <img src={private_events_header} className='infoBox_header'/>
                    <p className='infoBox_para'>Hire us for a private event! We offer packages for hen/stag do's as well as team building. We can offer hand-building,
                        throwing, pottery painting or combination of throwing and pottery painting! 
                    </p>
                    <p className='infoBox_para'>If you have an event you would like to celebrate with us then get in touch for more info on availability.</p>
                </div>
            </div>
            </div>
        )
    }
};

export default InfoBox;