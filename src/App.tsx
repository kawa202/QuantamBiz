import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import TechnologySolutions from './pages/services/TechnologySolutions';
import BusinessStrategy from './pages/services/BusinessStrategy';
import MarketingBranding from './pages/services/MarketingBranding';
import TrainingCapacity from './pages/services/TrainingCapacity';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/technology-solutions" element={<TechnologySolutions />} />
            <Route path="/services/business-strategy" element={<BusinessStrategy />} />
            <Route path="/services/marketing-branding" element={<MarketingBranding />} />
            <Route path="/services/training-capacity" element={<TrainingCapacity />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;