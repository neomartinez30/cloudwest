import React from 'react';
import { Phone, MessageSquare, BarChart3, Headphones, Lock, Zap } from 'lucide-react';

const serviceItems = [
  {
    icon: <Phone className="h-12 w-12 text-blue-700" />,
    title: "Contact Center Solutions",
    description: "Modernize your customer service with our state-of-the-art contact center platforms designed for optimal agent productivity and customer satisfaction.",
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-blue-700" />,
    title: "Conversational AI",
    description: "Deploy intelligent virtual assistants and chatbots that understand context, learn from interactions, and provide human-like experiences for your customers.",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-blue-700" />,
    title: "Analytics & Insights",
    description: "Leverage powerful analytics tools to gain meaningful insights from customer interactions and improve your business processes.",
  },
  {
    icon: <Headphones className="h-12 w-12 text-blue-700" />,
    title: "Omnichannel Support",
    description: "Deliver consistent customer experiences across all communication channels including voice, chat, email, and social media.",
  },
  {
    icon: <Lock className="h-12 w-12 text-blue-700" />,
    title: "Security & Compliance",
    description: "Ensure your customer data is protected with enterprise-grade security solutions and compliance with industry regulations.",
  },
  {
    icon: <Zap className="h-12 w-12 text-blue-700" />,
    title: "Process Automation",
    description: "Streamline operations with intelligent workflow automation that reduces manual tasks and increases efficiency.",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions for contact centers and conversational AI to help businesses transform their customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100 group"
            >
              <div className="mb-6 transition-transform duration-300 transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-6">
                <a href="#" className="text-blue-700 font-medium inline-flex items-center group">
                  Learn more 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to transform your customer experience?</h3>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;