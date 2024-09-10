import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import private_events_header from '../../assets/button2.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import './Upcoming.css'

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
            <h1>IS MOBILE</h1>
        )
    } else {
        return (
           <h1>IS DESKTOP</h1>
        )
    }
};

export default InfoBox;