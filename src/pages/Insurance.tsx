import React from 'react';
import { ArrowRight, FileText, CheckCircle, BarChart3, Shield } from 'lucide-react';

const Insurance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white px-6 py-4">
        <a href="/" className="hover:text-teal-400 transition">← Back to Home</a>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">AI-Powered Back Office for Insurance</h1>
          <p className="text-xl text-blue-100 mb-8">Automate claims, policies, compliance, and underwriting. Reclaim weeks of manual work every month.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Industry Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2">Manual Claims Processing</h3>
              <p className="text-gray-700">Staff manually triage, categorize, and route claims, creating bottlenecks and errors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2">Policy Admin Overhead</h3>
              <p className="text-gray-700">Policy renewals, endorsements, and lifecycle events demand repetitive manual data entry.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2">Compliance Documentation</h3>
              <p className="text-gray-700">Regulatory requirements force constant document collection, verification, and audit trails.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2">Slow Underwriting Workflows</h3>
              <p className="text-gray-700">Underwriters spend hours gathering application data instead of making decisions.</p>
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
              <FileText className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Claims Triage AI</h3>
                <p className="text-gray-700">Automatically categorize and route claims to the right desk, reducing manual sorting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Policy Lifecycle Automation</h3>
                <p className="text-gray-700">Handle renewals, endorsements, and cancellations end-to-end without human touch.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Compliance Monitoring</h3>
                <p className="text-gray-700">AI agents continuously track regulatory requirements and flag missing documentation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Underwriting Acceleration</h3>
                <p className="text-gray-700">Gather and verify application data instantly, so underwriters focus on decisions.</p>
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
              "We were spending 20 hours a week on claims triage alone. CloudWest's AI agents now handle 90% of incoming claims, sorting them correctly on arrival. Our team focuses on complex cases and customer relationships. We've cut processing time in half."
            </p>
            <p className="font-semibold text-blue-900">— Insurance Broker, Midwest</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Back Office?</h2>
          <p className="text-blue-100 mb-8">Schedule a 15-minute demo tailored to your insurance operations.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
