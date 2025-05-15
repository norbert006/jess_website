import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import importedImage from "../../assets/sub_header_finger.webp"
import Button_pottery_courses from "../../assets/Button_pottery_courses.svg"
import Button_pop_up_events from "../../assets/Button_pop_up_events.svg"
import Button_kids_pottery from "../../assets/Button_kids_pottery.svg"
import Button_private_booking from "../../assets/Button_private_booking.svg"
import Button_studio_membership from "../../assets/Button_studio_membership.svg"
import Button_pottery_painting from "../../assets/Button_pottery_painting.svg"

const activities = [
    {
        labelImage: Button_pottery_courses,
        image: importedImage,
        serviceName: 'pottery_courses'
    },
    {
        labelImage: Button_kids_pottery,
        image: importedImage,
        serviceName: 'kids_pottery'
    },
    {
        labelImage: Button_pottery_painting,
        image: importedImage,
        serviceName: 'pottery_painting'
    },
    {
        labelImage: Button_studio_membership,
        image: importedImage,
        serviceName: 'studio_membership'
    },
    {
        labelImage: Button_pop_up_events,
        image: importedImage,
        serviceName: 'pop_up_events'
    },
    {
        labelImage: Button_private_booking,
        image: importedImage,
        serviceName: 'private_booking'
    },
];

const PotteryActivities = () => {
    const navigate = useNavigate();

    const handleNavigate = (serviceName) => {
        navigate(`/services/${serviceName}`);
    };

    return (
        <div className="activities-container" id="header">
            {activities.map((activity, index) => (
                <div key={index} className="activity-card">
                    <img src={activity.image} alt="Activity" className="activity-image" onClick={() => handleNavigate(activity.serviceName)}/>
                    <img src={activity.labelImage} alt="Label" className="activity-label-image" onClick={() => handleNavigate(activity.serviceName)}/>
                </div>
            ))}
        </div>
    );
};

export default PotteryActivities;
