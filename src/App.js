import React, { useRef } from 'react'

import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NewHeader from './components/Header/Header';
import Service from './components/Service/Service';

import './App.css'

const App = () => {
  const aboutUsRef = useRef(null);
  const logoHomeRef = useRef(null);
  const contactUsRef = useRef(null);
  return (
    <div>
      <Navbar aboutUsRef={aboutUsRef} logoHomeRef={logoHomeRef} contactUsRef={contactUsRef} />
      <NewHeader logoHomeRef={logoHomeRef} />
      <Gallery aboutUsRef={aboutUsRef}/>
      <ContactForm contactUsRef={contactUsRef}/>
      <Footer />
      <Service />
    </div>
  )
}

export default App;