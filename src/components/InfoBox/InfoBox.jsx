import React, { useState, useEffect } from 'react'
import Images from '../../assets/Images';
import SubHeading from '../SubHeading/SubHeading';
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
    console.log("window.innerWidth", window.innerWidth)
    console.log("isMobile = ", isMobile)

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
                        <p>Price</p>
                        <p className='p__opensans'>£££</p>
                    </div>
                </div>
                <div className='app__wrapper_img app__wrapper_img-reverse'>
                    <img src={Images.sample_image1} alt='sample_image' />
                </div>

            </div>
        )
    } else {
        return (
            <div className='app__bg app__wrapper section__padding'>
                <div className='app__wrapper_img app__wrapper_img-reverse'>
                    <img src={Images.sample_image1} alt='sample_image' />
                </div>

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
                        <p>Price</p>
                        <p className='p__opensans'>£££</p>
                    </div>

                </div>
            </div>
        )
    }
};

export default InfoBox;