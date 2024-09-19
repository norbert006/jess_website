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


    return (
        <section className='contact' ref={contactUsRef}>
            <div>
                <h1>Contact Us</h1>
                <p>Feel free to send us a message about anything you might need help with. We would love to hear from you!</p>

                <h3>Message us on Whatsapp</h3>
                <br />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', marginRight: '10px' }}>
                        <FaWhatsapp size={50} />
                    </a>
                    <a href='tel:+447707327739' rel='noopener' style={{ margin: 0, fontSize: '18px', color: '#0b238e'}}>+447707327739</a>
                </div>
                <br />

                <h3>Send us an Email: clayfulhandsuk@gmail.com</h3>
                <h4>Or fill in the from below</h4>
                <br></br>

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
