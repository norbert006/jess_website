import React from 'react';

import pottery_icon from '../../assets/pottery_icon.png'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={pottery_icon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;