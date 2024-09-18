import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './ContactForm.css'
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = ({ contactUsRef }) => {
    const formattedPhone = '+447707327739'
    const whatsappURL = `https://wa.me/${formattedPhone}?text=${encodeURIComponent('Meesage us!')}`;


    const contactFormRef = useRef(null);
    const submitBtnRef = useRef(null);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const publicKey = process.env.REACT_APP_PUBLICKEY;
    const serviceID = process.env.REACT_APP_SERVICEID;
    const templateID = process.env.REACT_APP_TEMPLATEID;

    emailjs.init(publicKey);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitBtnRef.current.innerText = "Just a moment...";
        const inputFields = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            message: messageInputRef.current.value
        };
        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                submitBtnRef.current.innerText = "Message Sent Successfully";
                nameInputRef.current.value = "";
                emailInputRef.current.value = "";
                messageInputRef.current.value = "";
            })
            .catch((error) => {
                console.log(error);
                submitBtnRef.current.innerText = "Something went wrong";
            });
    };

    const linkStyle = {
        display: 'flex',       // Flexbox to align items horizontally
        alignItems: 'center',     // Center the content vertically (in case they have different heights)
        textDecoration: 'none',
        color: '#25D366',
        fontSize: '18px',
      };
    
      const iconStyle = {
        marginRight: '10px',   // Adds space between icon and text
      };

    return (
        <section className='contact' ref={contactUsRef}>
            <div>
                <h1>Contact Us</h1>
                <p>Feel free to send us a message about anything you might need help with. We would love to hear from you!</p>

                <h3>Message us on Whatsapp</h3>
                <br></br>
                <div>
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <FaWhatsapp size={50} style={iconStyle}/>
                    <i className="fab fa-whatsapp"></i>{'+44707327739'}
                    <br></br>
                </a>
                </div>

                <br></br>

                <h3>Send us an Email</h3>
                <form ref={contactFormRef} onSubmit={handleSubmit}>

                    <label htmlFor="user_name">Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        placeholder='Your Name...'
                        ref={nameInputRef}
                        required
                    />

                    <label htmlFor="user_email">Your Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder='example@gmail.com'
                        ref={emailInputRef}
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder='Your message...'
                        ref={messageInputRef}
                        required
                    />

                    <button type="submit" className='submit-btn' ref={submitBtnRef}>
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
