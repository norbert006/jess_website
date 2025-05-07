import './Navbar.scss';
import HeaderImage from '../assets/HeaderImage.jpg';
import TransparentLogo from '../assets/TransparentLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <img src={HeaderImage} alt="Header Background" className="header-image" />

      <div className="navbar-overlay">
        <img src={TransparentLogo} alt="Logo" className="logo" />

        <div className="nav-right">
          <button className="contact-button" onClick={scrollToContact}>
            CONTACT US
          </button>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
