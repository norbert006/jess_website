import React, { useEffect }from "react";
import './Gallery.css';
import '../InfoBox/InfoBox.css'
import about_us_photo from '../../assets/about_us_photo.webp'

const Gallery = ({ aboutUsRef }) => {
    console.log("width = ", window.innerWidth)

    return (
        <div className="about-us-container" ref={aboutUsRef} id="about_us">
            <h2 className="about-us-title">ABOUT US</h2>
            <div className="about-us-content" >
                <div className='about_para'>
                    <p> Founded in 2023 by Jess and Sydney, Clayful Hands is all about sharing our passion for clay with others. We're dedicated 
                        to creating a space where everyone can explore this versatile medium, unleash their creativity, and have fun in the process. 
                        Based in East Sussex, Clayful Hands offers a welcoming environment for all, whether you're new to pottery or a seasoned enthusiast. 
                        Join us and discover the joy of working with clay!
                    </p>

                </div>
                <div className="about-us-logo">
                    <img src={about_us_photo} alt="Clayful Hands Logo" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;