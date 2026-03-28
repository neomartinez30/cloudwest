import React from 'react';
import { ArrowRight, PhoneOff, Calendar, AlertCircle, FileText, CheckCircle, BarChart3 } from 'lucide-react';

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white px-6 py-4">
        <a href="/" className="hover:text-teal-400 transition">← Back to Home</a>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Intelligent Automation for Healthcare</h1>
          <p className="text-xl text-blue-100 mb-2">Front Office and Back</p>
          <p className="text-lg text-blue-100 mb-8">Patient engagement AND revenue cycle automation. Two-sided efficiency no one else offers.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="bg-teal-50 border-l-4 border-teal-500 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold text-blue-900 mb-3">Our Unique Advantage:</p>
          <p className="text-lg text-blue-900 leading-relaxed">
            Competitors all focus on the front office — answering phones, scheduling, patient reminders. Almost nobody is automating the back office. <span className="font-bold">We do both.</span> That's where the real operational pain lives, and where you recover the most time and money.
          </p>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Your Operational Reality</h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-teal-600 mb-6">Front Office Challenges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <PhoneOff className="w-8 h-8 text-teal-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Overloaded Phone Lines</h4>
                <p className="text-gray-700">Call centers drowning in patient inquiries, long wait times, missed appointments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <Calendar className="w-8 h-8 text-teal-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Scheduling Inefficiency</h4>
                <p className="text-gray-700">Manual scheduling leads to gaps, overbooking, and poor resource allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <AlertCircle className="w-8 h-8 text-teal-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Missed Reminders</h4>
                <p className="text-gray-700">No-shows and cancellations hurt revenue and clinician schedules.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-teal-600 mb-6">Back Office Challenges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <FileText className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Billing & Coding Delays</h4>
                <p className="text-gray-700">Manual claim generation and coding errors delay cash flow and trigger denials.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <CheckCircle className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Prior Authorization Bottleneck</h4>
                <p className="text-gray-700">Staff manually chase insurance approvals, delaying patient care and payments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <BarChart3 className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="font-bold text-lg mb-2">Credentialing Overhead</h4>
                <p className="text-gray-700">Onboarding clinicians and managing network credentials is painfully manual.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How CloudWest Helps */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">How CloudWest Helps</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-600 mb-6">Front Office Automation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <PhoneOff className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">AI Contact Center</h4>
                  <p className="text-gray-700">Answer patient calls 24/7, handle appointment inquiries, provide basic triage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Smart Scheduling</h4>
                  <p className="text-gray-700">Suggest optimal appointment times, handle rebooking, reduce no-shows.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Back Office Automation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Revenue Cycle Automation</h4>
                  <p className="text-gray-700">Auto-generate claims, validate coding, submit to payers, track status end-to-end.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Prior Auth at Scale</h4>
                  <p className="text-gray-700">Agents gather documentation, submit requests, follow up with insurers automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <BarChart3 className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Credentialing Workflow</h4>
                  <p className="text-gray-700">Manage provider onboarding, licenses, network enrollment—no manual tracking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Claims Processing</h4>
                  <p className="text-gray-700">Route denials, manage appeals, and reconcile payments automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="bg-blue-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Impact Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              "We deployed CloudWest across both contact center and billing. Patients now self-schedule through AI, cutting front-desk overhead by 40%. At the same time, our billing team went from 8 days to 3 days average claim turnaround thanks to automated submission and follow-up. Cash flow improved 35% in the first quarter."
            </p>
            <p className="font-semibold text-blue-900">— Healthcare Network CFO</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Automate Both Front and Back</h2>
          <p className="text-blue-100 mb-8">See how CloudWest recovers weeks of staff time every month across patient engagement and revenue cycle.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            Schedule Demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
