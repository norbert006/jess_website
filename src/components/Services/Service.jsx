import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

import importedImage from "../../assets/Button_kids_pottery.svg"
import "./Service.css";

const ServiceComponent = ({ services }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/#home');
    };

    const { serviceName } = useParams();  // get urlName from URL params

    // Find the service that matches the urlName
    var service = services.find(s => s.urlName === 'pottery_courses');

    if (service.urlName === 'pottery_courses' && serviceName === 'pottery_courses') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block">
                                <h2>{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle2}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                        <div className="text-blocks">
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle4}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para4 }}>{ }</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

    service = services.find(s => s.urlName === 'kids_pottery');

    if (service.urlName === 'kids_pottery' && serviceName === 'kids_pottery') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block" >
                                <h2 >{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle2}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

    service = services.find(s => s.urlName === 'pottery_painting');

    if (service.urlName === 'pottery_painting' && serviceName === 'pottery_painting') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block" >
                                <h2 >{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle2}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

    service = services.find(s => s.urlName === 'studio_membership');

    if (service.urlName === 'studio_membership' && serviceName === 'studio_membership') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block" >
                                <h2 >{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle2}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

    service = services.find(s => s.urlName === 'pop_up_events');

    if (service.urlName === 'pop_up_events' && serviceName === 'pop_up_events') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block" >
                                <h2 >{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle2}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

service = services.find(s => s.urlName === 'private_booking');

    if (service.urlName === 'private_booking' && serviceName === 'private_booking') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <img className="main-title" src={service.mainTitle} alt="main-title" />
                    <p className="intro">{service.intro}</p>

                    <div className="section">
                        <div className="text-blocks">
                            <div className="text-block" >
                                <h2 >{service.subtitle1}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para1 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2 dangerouslySetInnerHTML={{ __html: service.subtitle2 }}>{ }</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para2 }}>{ }</p>
                            </div>
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={service.img1} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={service.img2} alt="img2" />
                                <img src={service.img3} alt="img3" />
                            </div>
                            <img src={service.img4} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

};

export default ServiceComponent;
