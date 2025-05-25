import React from 'react';
import { CheckCircle2, Target, Users, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="CloudWest enterprise AI transformation team" 
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Disabled Veteran Owned • AI-First Consulting
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Architecting the Future of Business Operations
            </h2>
            <div className="w-24 h-1 bg-blue-700 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              CloudWest is a disabled veteran-owned, AI-first consulting firm with a disciplined and strategic focus. We help forward-thinking clients become early adopters by recognizing the transformational value of AI and keeping pace with the latest technological trends.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our specialized services—custom agentic applications, strategic product development, and intelligent contact center solutions—can be engaged independently or in combination, depending on your organization's specific needs and AI readiness.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">60-80% operational cost reduction through intelligent automation</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">3-6x faster product development acceleration</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">75% improvement in customer response times</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">50+ successful AI implementations across industries</p>
              </div>
            </div>
            
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors transform hover:scale-105">
              Our AI-First Transformation Approach
            </button>
          </div>
        </div>
        
         <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CloudWest?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We combine deep technical expertise with strategic business acumen to deliver AI transformation solutions that exceed enterprise expectations and drive measurable ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI-First Architecture</h4>
              <p className="text-gray-600 leading-relaxed">
                Custom agentic AI solutions that autonomously optimize business processes and reduce operational overhead.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategic Product Development</h4>
              <p className="text-gray-600 leading-relaxed">
                Accelerate time-to-market with expert product strategy, technical architecture, and go-to-market execution.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Intelligent CX Transformation</h4>
              <p className="text-gray-600 leading-relaxed">
                AI-powered contact center intelligence that transforms customer interactions and drives satisfaction scores.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Measurable ROI</h4>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade solutions with quantifiable business outcomes and continuous performance optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Market Position */}
        <div className="mt-20 bg-blue-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Unique Market Position</h3>
            <p className="text-blue-100 text-lg max-w-4xl mx-auto">
              The convergence of AI automation, product innovation, and customer experience creates unprecedented opportunities for enterprise transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-teal-400">End-to-End Transformation</h4>
              <p className="text-blue-100">
                Complete business transformation capability across three critical enterprise functions
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-teal-400">Technology-Agnostic Approach</h4>
              <p className="text-blue-100">
                Vendor-neutral solutions ensuring optimal technology selection for your specific requirements
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-teal-400">Proven Enterprise Experience</h4>
              <p className="text-blue-100">
                Deep expertise in both emerging AI technologies and traditional enterprise system integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;