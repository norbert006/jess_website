import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
