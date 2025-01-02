import React, { useRef } from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import InfoBox from './components/InfoBox/InfoBox';
import Upcoming from './components/Upcoming/Upcoming';

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
      <Header logoHomeRef={logoHomeRef} privateEventsRef={privateEventsRef} upcomingEventsRef={upcomingEventsRef}/>
      <Upcoming upcomingEventsRef={upcomingEventsRef}/>
      <InfoBox privateEventsRef={privateEventsRef} contactUsRef={contactUsRef}/>
      <Gallery aboutUsRef={aboutUsRef}/>
      <ContactForm contactUsRef={contactUsRef}/>
      <Footer />
    </div>
  )
}

export default App;