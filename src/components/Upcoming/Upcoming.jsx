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
            current.scrollLeft -= 274;
        } else {
            current.scrollLeft += 274;
        }
    }
    const galleryImages = [
        {
            image: Images.pottery_lounge,
            title: "The Pottery Lounge",
            name: "Evening Pottery Painting and Throwing",
            price: "£???",
            url: "https://www.eventbrite.co.uk/e/the-pottery-lounge-hove-tickets-986713525717?aff=oddtdtcreator"
        },
        {
            image: Images.four_week_pottery,
            title: "4 Week Pottery Course",
            name: "Pottery Throwing",
            price: "£???",
            url: "https://www.eventbrite.co.uk/e/4-week-inclusive-pottery-course-with-a-christmas-theme-tickets-1008506980527?aff=ebdsoporgprofile&_gl=1*1a5y99b*_up*MQ..*_ga*MTE5Mzc4ODM1LjE3Mjg0MTg0MTM.*_ga_TQVES5V6SH*MTcyODQxODQxMi4xLjAuMTcyODQxODQxMi4wLjAuMA.."
        },
        {
            image: Images.clay_club_halloween,
            title: "Halloween Pottery Pop-Up for Kids",
            name: "Unique Canvas",
            price: "£???",
            url: "https://www.eventbrite.co.uk/e/halloween-pottery-pop-up-for-kids-tickets-1003141291607?aff=ebdsoporgprofile&_gl=1*1x0ute2*_up*MQ..*_ga*NDEwMDE1ODU3LjE3Mjg0MTgzMTc.*_ga_TQVES5V6SH*MTcyODQxODMxNi4xLjAuMTcyODQxODMxNi4wLjAuMA.."
        },
        {
            image: Images.october_pottery_lounge,
            title: "The Pottery Lounge - October Special",
            name: "Evening Pottery Painting and Throwing",
            price: "£???",
            url: "https://www.eventbrite.co.uk/o/clayful-hands-84035095573?_gl=1*1w3a1tw*_up*MQ..*_ga*NDEwMDE1ODU3LjE3Mjg0MTgzMTc.*_ga_TQVES5V6SH*MTcyODQxODMxNi4xLjEuMTcyODQxODM4Ni4wLjAuMA.."
        },
        {
            image: Images.november_pottery_lounge,
            title: "The Pottery Lounge - November Special",
            name: "Evening Pottery Painting and Throwing",
            price: "£???",
            url: "https://www.eventbrite.co.uk/o/clayful-hands-84035095573?_gl=1*1w3a1tw*_up*MQ..*_ga*NDEwMDE1ODU3LjE3Mjg0MTgzMTc.*_ga_TQVES5V6SH*MTcyODQxODMxNi4xLjEuMTcyODQxODM4Ni4wLjAuMA.."
        }
    ]

    const openWebsite = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    if (isMobile) {
        return (
            <div className='background_image_phone' ref={upcomingEventsRef}>
                <div className='app__bg app__wrapper section__padding'>

                    <div className='app__wrapper_info'>
                        <img src={upcoming_header} alt="heading_text" className='infoBox_header' />

                        <div className='app__chef-content'>
                            <div className='app__chef-content-quote infoBoxMobile'>
                                <p className='infoBox_para_mobile' style={{color: '#718f74'}}>Upcoming Pottery Events: Get Creative with Clayful Hands!
                                Discover our latest workshops and experiences—perfect for all skill levels & abilities!
                                </p>
                            </div>
                        </div>

                        <div className='app__chef-sign'>
                            <div className="app__gallery-images" style={{ marginTop: '0rem' }}>
                                <div className="app__gallery-images_container" ref={scrollRef}>
                                    {galleryImages.map((item, index) => (
                                        <div className="app__gallery-images_card_upcoming flex__center" key={`gallery_image-${index + 1}`}>
                                            <img src={item.image} alt="gallery" onClick={() => openWebsite(item.url)}  style={{ color: "var(--color-jess-green)" }}/>
                                            {/* <BsInstagram className="gallery__image-icon" onClick={() => openWebsite("https://www.instagram.com/clayfulhands/")} /> */}
                                        </div>
                                    ))}
                                </div>
                                <div className="app__gallery-images_arrows">
                                    <BsArrowLeftShort transform="shrink-6" className="gallery__arrow-icon_upcoming" onClick={() => scroll('left')} />
                                    <BsArrowRightShort className="gallery__arrow-icon_upcoming" onClick={() => scroll('right')} />
                                </div>
                            </div>
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

                    <p className='upcoming_para upcoming'>Upcoming Pottery Events: Get Creative with Clayful Hands!
                    Discover our latest workshops and experiences—perfect for all skill levels & abilities!
                    </p>
                </div>

                <div className="upcoming_gallery_images">
                    <div className="upcoming_gallery_images_container" ref={scrollRef}>
                        {galleryImages.map((item, index) => (
                            <div className="upcoming_gallery_images_card flex__center" key={`gallery_image-${index + 1}`}>
                                <img src={item.image} alt="gallery" onClick={() => openWebsite(item.url)} />
                                {/* <BsInstagram className="gallery__image-icon" onClick={() => openWebsite(item.url)} style={{ color: "var(--color-jess-green)" }}/> */}
                            </div>
                        ))}
                    </div>
                    <div className="app__gallery-images_arrows">
                        <BsArrowLeftShort transform="shrink-2" className="gallery__arrow-icon" onClick={() => scroll('left')} style={{ backgroundColor: "var(--color-jess-green)" }} />
                        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} style={{ backgroundColor: "var(--color-jess-green)" }} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Upcoming;