import React, { useRef } from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import InfoBox from './components/InfoBox/InfoBox';
import Tester from './components/Tester/Tester';
import Calendar from './components/Calendar/Calendar';
import './App.css'

const App = () => {
  const aboutUsRef = useRef(null);
  const privateEventsRef = useRef(null);
  const logoHomeRef = useRef(null);
  const contactUsRef = useRef(null);
  return (
    <div>
      <Navbar aboutUsRef={aboutUsRef} privateEventsRef={privateEventsRef} logoHomeRef={logoHomeRef} contactUsRef={contactUsRef}/>
      <Header logoHomeRef={logoHomeRef} privateEventsRef={privateEventsRef}/>
      <Gallery aboutUsRef={aboutUsRef}/>
      <InfoBox privateEventsRef={privateEventsRef}/>
      <ContactForm contactUsRef={contactUsRef}/>
      <Footer />
    </div>
  )
}

export default App;