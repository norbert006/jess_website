import React from "react";
import { useNavigate, useParams } from 'react-router-dom';


import importedImage from "../../assets/sub_header_finger.webp"
import "./Service.css";

const ServiceComponent = ({ services }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/#home');
    };

    // Find the service that matches the urlName
    const service = services.find(s => s.urlName === 'pottery_courses');

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
                            <img src={importedImage} alt="img1" />
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
};

export default ServiceComponent;
