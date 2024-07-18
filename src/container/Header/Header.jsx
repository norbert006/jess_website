import React from 'react'

import header_photo from '../../assets/header_photo.JPG'
import sub_header_finger from '../../assets/sub_header_finger.JPG';
import sub_header_hen from '../../assets/sub_header_hen.JPG';
import sub_header_family from '../../assets/sub_header_family.JPG';
import button1 from "../../assets/button1.svg"
import button2 from "../../assets/button2.svg"
import button3 from "../../assets/button3.svg"
import './Header.css'

const Header = () => (
    <header className='header'>
        <div className='imageContainer'>
            <img src={header_photo} alt="Header_image" className='mainImage' />
        </div>
        <div className='buttonsContainer'>
            <img src={button1} alt="button" className='button'/>
            <img src={button2} alt="button" className='button'/>
            <img src={button3} alt="button" className='button'/>
        </div>
        <div className='thumbnailsContainer'>
            <img src={sub_header_finger} alt="Subheader_image" className='thumbnail' />
            <img src={sub_header_hen} alt="Subheader_image" className='thumbnail' />
            <img src={sub_header_family} alt="Subheader_image" className='thumbnail' />
        </div>
    </header>




    // <div className='app__header app__wrapper section__padding' id="home" style={{ textAlign: 'center' }}>
    //     <div className='app__wrapper_img'>
    //         <img src={header_photo} alt='header_img' />
    //     </div>

    //     <div className='app__wraper_info'>
    //         <SubHeading title="Shape Your Creativity: Discover Pottery's Unique Flair." />
    //         <h1 className='app__header-h1'>Master the Art: Pottery Throwing Workshops for Aspiring Potters</h1>
    //         <p className='p__opensans' style={{ margin: '2rem 0' }}>
    //             Experience the Joy of Crafting Timeless Pottery Pieces with Expert Guidance and Hands-On Instruction.
    //         </p>
    //         <button type="button" className='custom__button'>Explore More</button>
    //     </div>

    // </div>
)

export default Header;