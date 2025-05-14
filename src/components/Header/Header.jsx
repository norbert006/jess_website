// PotteryActivities.jsx
import React from 'react';
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
        className: 'dark'
    },
    {
        labelImage: Button_kids_pottery,
        image: importedImage,
        className: 'green'
    },
    {
        labelImage: Button_pottery_painting,
        image: importedImage,
        className: 'pink'
    },
    {
        labelImage: Button_studio_membership,
        image: importedImage,
        className: 'pink'
    },
    {
        labelImage: Button_pop_up_events,
        image: importedImage,
        className: 'dark'
    },
    {
        labelImage: Button_private_booking,
        image: importedImage,
        className: 'green'
    },
];

const PotteryActivities = () => {
    return (
        <div className="activities-container">
            {activities.map((activity, index) => (
                <div className="activity-card">
                    <img src={activity.image} alt="Activity" className="activity-image" />
                    <img src={activity.labelImage} alt="Label" className="activity-label-image" />
                </div>
            ))}
        </div>
    );
};

export default PotteryActivities;
