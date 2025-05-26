import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProductShowcase from './components/sections/ProductShowcase';
import FeaturesSection from './components/sections/FeaturesSection';
import SpecificationsSection from './components/sections/SpecificationsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

// Pages
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import CareerPage from './pages/CareerPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductShowcase />
              <FeaturesSection />
              <SpecificationsSection />
              <TestimonialsSection />
              <ContactSection />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
