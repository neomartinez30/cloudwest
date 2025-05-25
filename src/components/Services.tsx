import React from 'react';
import { Bot, Rocket, Headphones, Code, Database, Shield, Zap, Target, Users } from 'lucide-react';

const primaryServices = [
  {
    icon: <Bot className="h-16 w-16 text-blue-700" />,
    badgeIcon: <Zap className="h-4 w-4" />,
    badge: "Custom AI Automation",
    title: "Agentic AI Solutions",
    subtitle: "Custom Intelligent Automation Architects",
    description: "Deploy AI agents that think, decide, and execute complex business processes autonomously. Reduce operational overhead by 60-80% through intelligent workflow automation tailored to your industry-specific challenges.",
    keyPoints: [
      "Autonomous process optimization",
      "Decision-making AI implementation", 
      "Custom agent development lifecycle",
      "Industry-specific use case deployment"
    ],
    cta: "Explore AI Automation"
  },
  {
    icon: <Rocket className="h-16 w-16 text-blue-700" />,
    badgeIcon: <Target className="h-4 w-4" />,
    badge: "Strategic Innovation",
    title: "Product Development Acceleration",
    subtitle: "Strategic Product Innovation Partners",
    description: "Accelerate time-to-market through expert product strategy and development execution. From concept validation to market launch—we bridge the gap between vision and reality with technology-agnostic solutions.",
    keyPoints: [
      "Product discovery and validation frameworks",
      "Technical architecture design",
      "Go-to-market strategy development",
      "Cross-functional team augmentation"
    ],
    cta: "Accelerate Development"
  },
  {
    icon: <Headphones className="h-16 w-16 text-blue-700" />,
    badgeIcon: <Users className="h-4 w-4" />,
    badge: "CX Revolution",
    title: "Intelligent Contact Center Transformation",
    subtitle: "Customer Experience Revolution Specialists",
    description: "Transform customer interactions through AI-powered contact center intelligence. Reduce response times by 75% while improving satisfaction scores through seamless integration of human expertise with AI-driven automation.",
    keyPoints: [
      "AI-powered customer journey optimization",
      "Omnichannel intelligent routing",
      "Predictive analytics implementation",
      "Agent augmentation technologies"
    ],
    cta: "Transform CX"
  }
];

const supportingServices = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Custom Integration Architecture",
    description: "Seamless system integrations that connect your existing tech stack with new AI-powered solutions."
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: "Data Intelligence Platforms",
    description: "Transform raw data into actionable insights that drive autonomous decision-making across your organization."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Security & Compliance",
    description: "Maintain enterprise-grade security and regulatory compliance throughout your AI transformation journey."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            AI-First Consulting Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized AI Solutions for Forward-Thinking Organizations
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            CloudWest provides three specialized service offerings that can be engaged independently or in combination, helping clients become early adopters and stay ahead of AI trends.
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
            >
              <div className="p-8">
                {/* Badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {service.badgeIcon}
                    <span>{service.badge}</span>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="mb-6 transition-transform duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-medium mb-4 text-sm">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {service.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center group">
                  {service.cta}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Supporting Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supportingServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Proven Results Across AI Implementations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">60-80%</div>
              <div className="text-blue-100 text-sm">Operational Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">75%</div>
              <div className="text-blue-100 text-sm">Faster Response Times</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-blue-100 text-sm">AI Implementations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">3-6x</div>
              <div className="text-blue-100 text-sm">Development Acceleration</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to architect your intelligent business transformation?
          </h3>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-lg transition-colors transform hover:scale-105"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;