import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/');
      // If we're navigating to a section on the home page
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/10 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo transparency white.png" 
              alt="CloudWest Logo" 
              className="h-10 w-auto mr-3"
              onError={(e) => {
              // Fallback to SVG if PNG fails
                e.currentTarget.src = "/logo.svg";
                e.currentTarget.onerror = null;
            }}
          />
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              CloudWest
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/', 'home')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/', 'services')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/', 'about')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/blog')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('/', 'contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
            <button 
              onClick={() => handleNavigation('/', 'home')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/', 'services')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/', 'about')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/blog')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('/', 'contact')}
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