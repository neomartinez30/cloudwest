import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-blue-700 mr-2" />
            <span className="text-xl font-bold text-blue-900">CloudWest</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors w-full"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;