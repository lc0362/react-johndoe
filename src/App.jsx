import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Home from './pages/Home'; 
import Blog from './pages/Blog';  
import Contact from './pages/Contact';  
import MentionsLegales from './pages/MentionsLegales';  
import Realisations from './pages/Realisations';  
import Services from './pages/Services';  

import './App.css';

function App() {
  return (
    <div >
      {/* Header commun à toutes les pages */}
      <Header />

      {/* Gestion des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
      </Routes>

      {/* Footer commun à toutes les pages */}
      <Footer />
    </div>
  );
}

export default App;