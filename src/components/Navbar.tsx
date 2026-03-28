import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const industries = [
  { name: 'Insurance', path: '/insurance' },
  { name: 'Healthcare', path: '/healthcare' },
  { name: 'Government', path: '/government' },
  { name: 'Real Estate', path: '/real-estate' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/');
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
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
    setIndustriesOpen(false);
    setMobileIndustriesOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/10 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <img
              src="/logo transparency white.png"
              alt="CloudWest Logo"
              className="h-10 w-auto mr-3"
              onError={(e) => {
                e.currentTarget.src = "/logo.svg";
                e.currentTarget.onerror = null;
              }}
            />
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              CloudWest
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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

            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
              >
                <span>Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn">
                  {industries.map((industry) => (
                    <button
                      key={industry.path}
                      onClick={() => handleNavigation(industry.path)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/', 'about')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/', 'pricing')}
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'} transition-colors font-medium`}
            >
              Pricing
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
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-2 animate-fadeIn">
            <button
              onClick={() => handleNavigation('/', 'home')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2 text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/', 'services')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2 text-left"
            >
              Services
            </button>

            {/* Mobile Industries */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-700 transition-colors font-medium py-2"
              >
                <span>Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 space-y-1">
                  {industries.map((industry) => (
                    <button
                      key={industry.path}
                      onClick={() => handleNavigation(industry.path)}
                      className="block w-full text-left text-gray-600 hover:text-blue-700 transition-colors font-medium py-1.5 text-sm"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/', 'about')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2 text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/', 'pricing')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2 text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation('/blog')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium py-2 text-left"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors w-full mt-2"
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
