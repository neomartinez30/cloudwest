import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
    >
      <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Transforming Customer Experiences through Intelligent Automation
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fadeIn animation-delay-200">
              CloudWest specializes in building next-generation contact center solutions and conversational AI experiences that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <button 
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition-all"
              >
                Explore Our Services
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-full h-full bg-white rounded-2xl opacity-10"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modern contact center solution"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;