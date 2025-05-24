import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="CloudWest team meeting" 
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CloudWest</h2>
            <div className="w-24 h-1 bg-blue-700 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At CloudWest, we're passionate about revolutionizing how businesses connect with their customers through innovative contact center solutions and conversational AI.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded by a team of industry veterans with decades of combined experience, we understand the challenges businesses face in delivering exceptional customer experiences. Our mission is to simplify this journey with technology that feels human.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Over 50+ successful enterprise implementations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Industry-leading customer satisfaction rates</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Advanced AI solutions that deliver measurable ROI</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Dedicated support team available 24/7</p>
              </div>
            </div>
            
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors transform hover:scale-105">
              Our Approach
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CloudWest?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We combine technical expertise with a deep understanding of customer experience to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h4>
              <p className="text-gray-600 leading-relaxed">
                Our solutions can be deployed quickly, allowing you to see results sooner without lengthy integration periods.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure & Compliant</h4>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with compliance certifications to protect your sensitive customer data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h4>
              <p className="text-gray-600 leading-relaxed">
                Our AI systems learn and improve over time, ensuring your customer experience gets better with each interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;