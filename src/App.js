import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NewHeader from './components/Header/Header';
import Service from './components/Services/Service';
import ScrollToTop from './components/ScrollToTop';
import ScrollToHashElement from './components/ScrollToHashElement';

import './App.css'


const App = () => {
  const aboutUsRef = useRef(null);
  const logoHomeRef = useRef(null);
  const contactUsRef = useRef(null);

  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true); // optional

  /* Load backend data */
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/services/services');
        setServices(res.data);
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Loading services...</div>;
  
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
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
            <Service services={services}/>
            <Footer />
          </>
        }
        />
      </Routes>
    </Router>
  );
};

export default App;