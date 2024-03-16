import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ContactForm />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App;