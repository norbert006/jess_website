// PotteryActivities.jsx
import React from 'react';
import './Header.css';
import importedImage from "../../assets/sub_header_finger.webp"
import importedLabelImage from "../../assets/button1.svg"

const activities = [
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'dark'
    },
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'green'
    },
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'pink'
    },
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'pink'
    },
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'dark'
    },
    {
        labelImage: importedLabelImage,
        image: importedImage,
        className: 'green'
    },
];

const PotteryActivities = () => {
    return (
        <div className="activities-container">
            {activities.map((activity, index) => (
                <div className="activity-card">
                    <img src={activity.labelImage} alt="Label" className="activity-label-image" />
                    <img src={activity.image} alt="Activity" className="activity-image" />
                </div>
            ))}
        </div>
    );
};

export default PotteryActivities;
