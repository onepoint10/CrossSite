import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Кросс-Автоматика" className="h-12 md:h-16" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center">
              <ul className="flex space-x-1">
                <li>
                  <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">О компании</Link>
                </li>
                <li>
                  <Link to="/products" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Продукция</Link>
                </li>
                <li>
                  <Link to="/solutions" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Решения</Link>
                </li>
                <li>
                  <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Услуги</Link>
                </li>
                <li>
                  <Link to="/contacts" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Контакты</Link>
                </li>
                <li>
                  <Link to="/career" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Карьера</Link>
                </li>
                <li>
                  <Link to="/gallery" className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Фотоотчеты</Link>
                </li>
              </ul>
            </nav>
            <div className="ml-4 flex items-center">
              <a href="tel:+73812660125" className="text-blue-800 font-medium hover:text-blue-900">+7 (3812) 66 01 25</a>
            </div>
          </div>
          
          <button 
            className="lg:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>О компании</Link>
                </li>
                <li>
                  <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Продукция</Link>
                </li>
                <li>
                  <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Решения</Link>
                </li>
                <li>
                  <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
                </li>
                <li>
                  <Link to="/contacts" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
                </li>
                <li>
                  <Link to="/career" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Карьера</Link>
                </li>
                <li>
                  <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Фотоотчеты</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-4 px-3">
              <a href="tel:+73812660125" className="text-blue-800 font-medium hover:text-blue-900">+7 (3812) 66 01 25</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
