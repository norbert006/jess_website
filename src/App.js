import React, { useRef } from 'react'

import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NewHeader from './components/Header/Header';

import './App.css'

const App = () => {
  const aboutUsRef = useRef(null);
  const privateEventsRef = useRef(null);
  const logoHomeRef = useRef(null);
  const contactUsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  return (
    <div>
      <Navbar aboutUsRef={aboutUsRef} privateEventsRef={privateEventsRef} logoHomeRef={logoHomeRef} contactUsRef={contactUsRef} upcomingEventsRef={upcomingEventsRef}/>
      <NewHeader logoHomeRef={logoHomeRef} privateEventsRef={privateEventsRef} upcomingEventsRef={upcomingEventsRef}/>
      <Gallery aboutUsRef={aboutUsRef}/>
      <ContactForm contactUsRef={contactUsRef}/>
      <Footer />
    </div>
  )
}

export default App;