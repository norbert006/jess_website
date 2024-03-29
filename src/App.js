import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import InfoBox from './components/InfoBox/InfoBox';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <InfoBox />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;