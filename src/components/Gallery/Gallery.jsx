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
                    <p> Founded in 2023 by Jess and Sydney, Clayful Hands is all about sharing our passion for clay with others. We're dedicated 
                        to creating a space where everyone can explore this versatile medium, unleash their creativity, and have fun in the process. 
                        Based in East Sussex, Clayful Hands offers a welcoming environment for all, whether you're new to pottery or a seasoned enthusiast. 
                        Join us and discover the joy of working with clay!
                    </p>

                </div>
                <div className="about-us-logo">
                    <img src={Images.clayfulhands_logo_transparent} alt="Clayful Hands Logo" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;