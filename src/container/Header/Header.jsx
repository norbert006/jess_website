import React from 'react'

import clayfulhands_border from '../../assets/clayfulhands_border.png'
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css'

const Header = () => (
        <div className='app__header app__wrapper section__padding' id="home" style={{textAlign: 'center'}}>
            <div className='app__wraper_info'>
                <SubHeading title="Shape Your Creativity: Discover Pottery's Unique Flair." />
                <h1 className='app__header-h1'>Master the Art: Pottery Throwing Workshops for Aspiring Potters</h1>
                <p className='p__opensans' style={{ margin: '2rem 0'}}>
                Experience the Joy of Crafting Timeless Pottery Pieces with Expert Guidance and Hands-On Instruction.
                </p>
                <button type="button" className='custom__button'>Explore Menu</button>
            </div>

            <div className='app__wrapper_img'>
                <img src={clayfulhands_border} alt='header_img'/>
            </div>

        </div>
)

export default Header;