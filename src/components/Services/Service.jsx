import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

import importedImage from "../../assets/sub_header_finger.webp"
import "./Service.css";

const ServiceComponent = ({ services }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/#home');
    };

    const { serviceName } = useParams();  // get urlName from URL params

    // Find the service that matches the urlName
    var service = services.find(s => s.urlName === 'pottery_courses');
    console.log("First service = ", service.urlName)

    console.log("img1 ",service.img1)
    if (service.urlName === 'pottery_courses' && serviceName === 'pottery_courses') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <h1 className="main-title">{service.serviceName}</h1>
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
                                <img className="top-bottom-images" src={importedImage} alt="img2" />
                                <img src={importedImage} alt="img3" />
                            </div>
                            <img src={importedImage} alt="img4" />
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
    console.log("Second service = ", service.urlName)

    if (service.urlName === 'kids_pottery' && serviceName === 'kids_pottery') {
        return (
            <div className="service-container">

                <div key={service._id}>
                    <h1 className="main-title" style={{backgroundColor: '#99B698'}}>{service.serviceName}</h1>
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
                            <div className="text-block">
                                <h2>{service.subtitle3}</h2>
                                <p dangerouslySetInnerHTML={{ __html: service.para3 }}>{ }</p>
                            </div>
                        </div>
                        <div className="image-grid">
                            <img src={importedImage} alt="img1" />
                            <div className="row">
                                <img className="top-bottom-images" src={importedImage} alt="img2" />
                                <img src={importedImage} alt="img3" />
                            </div>
                            <img src={importedImage} alt="img4" />
                        </div>
                    </div>
                </div>

                <button className="back-button" onClick={handleNavigate}>BACK TO HOME</button>
            </div>
        );
    }

};

export default ServiceComponent;
