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
    const galleryImages = [
        {
            image: Images.pottery_lounge,
            title: "Pottery Lounge",
            name: "Handmade Pottery",
            price: "$50",
            url: "https://www.eventbrite.co.uk/e/the-pottery-lounge-hove-tickets-986713525717?aff=oddtdtcreator"
        },
        {
            image: Images.eve_image1,
            title: "Eve's Artwork",
            name: "Modern Painting",
            price: "$200",
            url: "https://www.eventbrite.co.uk/o/clayful-hands-84035095573"
        },
        {
            image: Images.hen_image1,
            title: "Finger Print Art",
            name: "Unique Canvas",
            price: "$75",
            url: "https://www.eventbrite.co.uk/o/clayful-hands-84035095573"
        },
        {
            image: Images.sub_header_finger,
            title: "Finger Print Art",
            name: "Unique Canvas",
            price: "$75",
            url: "https://www.eventbrite.co.uk/o/clayful-hands-84035095573"
        }
    ]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <div className='background_image_phone' ref={upcomingEventsRef}>
                <div className='upcoming_bg upcoming__wrapper upcoming_padding'>

                    <div className='upcoming_wrapper_info_mobile'>
                        <img src={upcoming_header} alt="heading_text" className='upcoming_header' />

                        <div className='upcoming_content'>
                            <div className='upcoming_content_quote upcomingMobile'>
                                <p className='infoBox_para_mobile'>Book a Private Event with Clayful Hands
                                    Looking for a unique and creative way to celebrate? Whether it's a hen or stag do,
                                    team-building session, or Christmas party, Clayful Hands offers tailored pottery experiences
                                    just for you. Choose from hand-building, pottery painting, or even a combination of both,
                                    including the chance to try your hand at the potter's wheel.
                                </p>
                            </div>
                            <p className='upcoming_para_mobile upcomingMobile'>For more information on pricing and availability, get in touch with us today and let's plan an unforgettable event!</p>
                        </div>

                        <div className="gallery-container">
                            {galleryImages.map((item, index) => (
                                <div key={index} className="gallery-item flex__center">
                                    <img src={item.image} alt={item.name} className="gallery-image" onClick={() => openWebsite(item.url)}/>
                                    <BsInstagram className="gallery__image-icon" onClick={() => openWebsite(item.url)} />
                                    <div className="image-details">
                                        <h3 className="image-title">{item.title}</h3>
                                        <p className="image-name">{item.name}</p>
                                        <p className="image-price">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className='upcoming_bg upcoming__wrapper upcoming_padding' ref={upcomingEventsRef}>
                <div className='upcoming_wrapper_info upcoming'>
                    <img src={upcoming_header} alt="heading_text" className='upcoming_header' />
                    <p className='upcoming_para'>Upcoming Pottery Events: Get Creative with Clayful Hands!
                        Discover our latest workshops and experiences—perfect for all skill levels & abilities!
                    </p>
                </div>

                <div className="upcoming_gallery_images">
                    <div className="upcoming_gallery_images_container" ref={scrollRef}>
                        {galleryImages.map((item, index) => (
                            <div className="upcoming_gallery_images_card flex__center" key={`gallery_image-${index + 1}`}>
                                <img src={item.image} alt="gallery" onClick={() => openWebsite(item.url)} />
                                <BsInstagram className="gallery__image-icon" onClick={() => openWebsite(item.url)} />
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