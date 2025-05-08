import './Navbar.scss';
import HeaderImage from '../assets/HeaderImage.jpg';
import TransparentLogo from '../assets/TransparentLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  // Scrolls smoothly to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      
      {/* Background image that fills the navbar area */}
      <img src={HeaderImage} alt="Header Background" className="header-image" />

      {/* Overlay for logo, nav buttons, and icons */}
      <div className="navbar-overlay">
        <img src={TransparentLogo} alt="Logo" className="logo" />

        {/* Right side of navbar: contact button and social icons */}
        <div className="nav-right">
          <button className="contact-button" onClick={scrollToContact}>
            CONTACT US
          </button>

          {/* Facebook icon linking to Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          {/* Instagram icon linking to Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
