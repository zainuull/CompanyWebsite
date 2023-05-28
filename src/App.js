import React from 'react';
// Routes, Route
import { Routes, Route } from 'react-router-dom';

// Component
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Galeri from './pages/Galeri';



const App = () => {
  return (
    <div className="w-full bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
