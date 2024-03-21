import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
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
    const galleryImages = [Images.sample_image1, Images.sample_image2, Images.sample_image3]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <div className='app__bg app__wrapper section__padding'>

                <div className='app__wrapper_info'>
                    <SubHeading title="Event Title" />
                    <h1 className='headtext__cormorant'>Some random text</h1>

                    <div className='app__chef-content'>
                        <div className='app__chef-content-quote'>
                            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                            </div>
                        </div>

                        <p>Price</p>
                        <p className='p__opensans'>£££</p>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
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
                        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                    </div>
                </div>

                <div className='app__wrapper_info' style={{ marginLeft: '5rem' }}>
                    <SubHeading title="Event Title" />
                    <h1 className='headtext__cormorant'>Some random text</h1>

                    <div className='app__chef-content'>
                        <div className='app__chef-content-quote'>
                            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className='app__chef-sign'>
                        <p>Price</p>
                        <p className='p__opensans'>£££</p>
                    </div>

                </div>
            </div>
        )
    }
};

export default InfoBox;