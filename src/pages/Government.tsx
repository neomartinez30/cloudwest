import React from 'react';
import { ArrowRight, Users, Zap, Network, FileCheck, Clock } from 'lucide-react';

const Government: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white px-6 py-4">
        <a href="/" className="hover:text-teal-400 transition">← Back to Home</a>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Modernizing Government Operations with AI</h1>
          <p className="text-xl text-blue-100 mb-8">Eliminate citizen service backlogs. Automate permits. Streamline inter-agency workflows. Meet compliance at scale.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Government Operational Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Users className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Citizen Services Backlogs</h3>
              <p className="text-gray-700">Thousands of requests pile up. Citizens wait weeks for licenses, permits, and documents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Zap className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Permit Processing Delays</h3>
              <p className="text-gray-700">Manual review and inter-department coordination create 30+ day processing times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Network className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Inter-Department Silos</h3>
              <p className="text-gray-700">Disconnected systems and manual handoffs lose context and create duplicate work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <FileCheck className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Legacy System Integration</h3>
              <p className="text-gray-700">Old databases can't talk to each other. Data entry is manual, slow, and error-prone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Clock className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Public Records Management</h3>
              <p className="text-gray-700">Archiving, searching, and retrieving documents manually drains staff hours daily.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <ArrowRight className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Compliance Tracking</h3>
              <p className="text-gray-700">Meeting open records, FOIA, and retention policies demands constant manual oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How CloudWest Helps */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">How CloudWest Helps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Citizen Request Routing</h3>
                <p className="text-gray-700">AI agents intake requests, validate completeness, and route to the right department instantly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Permit Workflow Automation</h3>
                <p className="text-gray-700">Automate eligibility checks, route reviews, track approvals, and notify applicants—no manual steps.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileCheck className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Document Processing</h3>
                <p className="text-gray-700">Extract data from applications, match against requirements, flag missing info automatically.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Network className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Legacy System Integration</h3>
                <p className="text-gray-700">Bridge old and new systems. AI agents understand context and move data safely across departments.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Public Records Management</h3>
                <p className="text-gray-700">Index, search, retrieve, and categorize documents at scale. Comply with retention policies automatically.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ArrowRight className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Compliance Monitoring</h3>
                <p className="text-gray-700">Track FOIA requests, enforce retention rules, audit access—all logged and auditable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="bg-blue-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Success Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              "We had a 6-week backlog on building permits. CloudWest's agents now triage and validate submissions within 24 hours, routing to the right inspector. Compliance checks are automated. Average processing time dropped to 4 days. Citizens are happier, inspectors focus on actual review, and we reclaimed two FTEs."
            </p>
            <p className="font-semibold text-blue-900">— Municipal Planning Department Director</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Clear Your Backlogs</h2>
          <p className="text-blue-100 mb-8">Schedule a demo to see how government agencies are cutting processing time by 70% and improving citizen satisfaction.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Government;
