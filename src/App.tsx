import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import CustomSolutions from './components/CustomSolutions';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Products />
      <CustomSolutions />
      <Sustainability />
      <Contact />
    </div>
  );
}

export default App;