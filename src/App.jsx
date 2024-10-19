import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header.jsx';  
import Footer from './components/Footer.jsx';  
import Home from './pages/Home.jsx'; 
import Blog from './pages/Blog.jsx';  
import Contact from './pages/Contact.jsx';  
import MentionsLegales from './pages/MentionsLegales.jsx';  
import Realisations from './pages/Realisations.jsx';  
import Services from './pages/Services.jsx';  
import GitHub from './pages/GitHub.jsx';  
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

import './App.css';



function App() {
  return (
    <div className='body-style' >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/github" element={<GitHub />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;