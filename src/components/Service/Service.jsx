import React from "react";
import importedImage from "../../assets/sub_header_finger.webp"
import "./Service.css";

const ServiceComponent = () => {
    return (
        <div className="service-container">
            <h1 className="main-title">POTTERY COURSES</h1>
            <p className="intro">
                We update this regularly for future holiday clubs. <br />
                If you’d like to keep up to date and be the first to know – sign up to our newsletter!
            </p>

            <div className="section">
                <div className="text-blocks">
                    <div className="text-block">
                        <h2>WEEKLY CLASSES</h2>
                        <p>
                            TUESDAY 1PM-3PM<br />
                            TUESDAY 6:30PM-8:30PM<br />
                            THURSDAY 9:30AM-12PM<br />
                        </p>
                    </div>
                    <div className="text-block">
                        <h2>WORKSHOPS</h2>
                        <p>
                            All<br />
                            MAKE A SET OF MUGS<br />
                            NERIKOMI<br />
                        </p>
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
                        <h2>TASTER THROWING</h2>
                        <p>
                            Looking for a pottery throwing experience?<br />
                            Send us a message, with a date, time and how many people you’d like!<br />
                            ENQUIRE NOW<br />
                        </p>
                    </div>
                    <div className="text-block">
                        <h2>PRIVATE CLASSES</h2>
                        <p>
                            Would you like a private 1:1 to work on your skill set or learn something new. All materials included.
                            If you’d like to do it with a friend, we can send you the price <br />
                            4 HOURS £155<br />
                            6 HOURS £250<br />
                        </p>
                    </div>
                </div>
            </div>



            <button className="back-button">BACK TO HOME</button>
        </div>
    );
};

export default ServiceComponent;
