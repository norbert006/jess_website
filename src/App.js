import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './components/Gallery/Gallery';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ContactForm />
      <Gallery />
    </div>
  )
}

export default App;