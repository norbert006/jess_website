import React from 'react'

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
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <InfoBox />
      <div className='boxes_container'>
        <div className='box-1'>
          <Calendar />
        </div>
        <div className='box-2'>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;