import React from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import SubHeading from '../../components/SubHeading/SubHeading';
import Images from "../../assets/Images"
import './Gallery.css';

const Gallery = () => {
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

    const openInstagram = () => {
        window.open("https://www.instagram.com/clayfulhands/", "_blank", "noreferrer");
      };


    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opersans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button type="button" className="custom__button">View More</button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery" />
                            <BsInstagram className="gallery__image-icon" onClick={() => openInstagram()}/>
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>

            </div>

        </div>
    );
}

export default Gallery;