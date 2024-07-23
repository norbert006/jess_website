import React, { useEffect }from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import SubHeading from '../../components/SubHeading/SubHeading';
import Images from "../../assets/Images"
import './Gallery.css';

const Gallery = ({ aboutUsRef }) => {

    // useEffect(() => {
    //     if (aboutUsRef.current) {
    //       console.log('Gallery rendered and ref assigned:', aboutUsRef.current);
    //     } else {
    //       console.error('Gallery ref is still null after rendering');
    //     }
    //   }, [aboutUsRef]);

    return (
        <div className="about-us-container" ref={aboutUsRef}>
            <h2 className="about-us-title">ABOUT US</h2>
            <div className="about-us-content" >
                <div className="about-us-text" >
                    <p> Clayful hands was started up in 2023 by Jess and Sydney. They are passionate about bringing the love they have for all things clay to others.
                    Their aim is to make sure everyone has the time to explore the medium and have some fun! Clayful Hands are currently based in East Sussex. </p>

                </div>
                <div className="about-us-logo">
                    <img src={Images.clayfulhands_logo_transparent} alt="Clayful Hands Logo" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;