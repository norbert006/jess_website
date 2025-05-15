import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NewHeader from './components/Header/Header';
import Service from './components/Service/Service';
import ScrollToTop from './components/ScrollToTop';

import './App.css'

const App = () => {
  const aboutUsRef = useRef(null);
  const logoHomeRef = useRef(null);
  const contactUsRef = useRef(null);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/" element={
            <>
              <Navbar
                aboutUsRef={aboutUsRef}
                logoHomeRef={logoHomeRef}
                contactUsRef={contactUsRef}
              />
              <NewHeader logoHomeRef={logoHomeRef} />
              <Gallery aboutUsRef={aboutUsRef} />
              <ContactForm contactUsRef={contactUsRef} />
              <Footer />
            </>
          }
        />

        {/* Service Route */}
        <Route path="/services/:serviceName" element={
          <>
            <Navbar
              aboutUsRef={aboutUsRef}
              logoHomeRef={logoHomeRef}
              contactUsRef={contactUsRef}
            />
            <Service />
            <Footer />
          </>
        }
        />
      </Routes>
    </Router>
  );
};

export default App;