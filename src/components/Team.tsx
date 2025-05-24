import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Morgan",
    position: "CEO & Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Alex has 15+ years of experience in the contact center industry and is passionate about leveraging technology to improve customer experiences."
  },
  {
    name: "Jamie Chen",
    position: "CTO",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Jamie leads our technology team with expertise in AI, machine learning, and enterprise software architecture."
  },
  {
    name: "Taylor Reynolds",
    position: "Head of AI Solutions",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Taylor specializes in conversational AI and natural language processing, bringing intelligent automation to life for our clients."
  },
  {
    name: "Jordan Smith",
    position: "Customer Success Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Jordan ensures our clients achieve their business goals through our solutions with a focus on continuous improvement."
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind CloudWest who are dedicated to transforming customer experiences through innovative technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3 justify-center">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-700" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-100 transition-colors">
                      <Twitter className="h-5 w-5 text-blue-700" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-100 transition-colors">
                      <Mail className="h-5 w-5 text-blue-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors">
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;