import React from 'react';
import { ArrowRight, FileText, Search, CheckCircle, Lock, TrendingUp } from 'lucide-react';

const RealEstate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white px-6 py-4">
        <a href="/" className="hover:text-teal-400 transition">← Back to Home</a>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">AI Agents for Mortgage, Title & Escrow</h1>
          <p className="text-xl text-blue-100 mb-8">Eliminate document bottlenecks. Automate title searches. Close faster. Stay compliant.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Industry Pain Points</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <FileText className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Manual Document Review</h3>
              <p className="text-gray-700">Staff manually review hundreds of pages per file, searching for inconsistencies and missing data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Search className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Slow Title Searches</h3>
              <p className="text-gray-700">Title companies query multiple county records manually, adding 5-7 days to closing timelines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <CheckCircle className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Compliance-Heavy Closings</h3>
              <p className="text-gray-700">Regulatory checklists and disclosure requirements slow every transaction. One mistake costs time and liability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <Lock className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Escrow Tracking Overhead</h3>
              <p className="text-gray-700">Manually track fund movements, reconciliations, and disbursements. Zero visibility into process status.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <TrendingUp className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Loan Processing Bottlenecks</h3>
              <p className="text-gray-700">Document collection, underwriting requests, and condition management are juggled manually across teams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
              <ArrowRight className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-bold text-lg mb-2">Poor Visibility Across Pipeline</h3>
              <p className="text-gray-700">No real-time tracking of deal status. Customers and teams constantly ask "where are we in the process?"</p>
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
                <h3 className="font-bold mb-2">AI-Powered Document Extraction</h3>
                <p className="text-gray-700">Extract loan terms, borrower info, property details, and lien data automatically. Flag inconsistencies instantly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Search className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Title Search Automation</h3>
                <p className="text-gray-700">AI agents query public records, compile ownership history, identify title issues—in hours, not days.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Closing Workflow Orchestration</h3>
                <p className="text-gray-700">Automate disclosure checklists, verify signatures and notarizations, ensure full compliance every time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lock className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Escrow Status Tracking</h3>
                <p className="text-gray-700">Real-time visibility into fund holds, conditions, and disbursements. Automated reconciliation and reporting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Loan File Processing</h3>
                <p className="text-gray-700">Auto-generate condition requests, collect documents, track status, and update underwriters in real time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ArrowRight className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">End-to-End Pipeline Visibility</h3>
                <p className="text-gray-700">Automated status updates keep borrowers, partners, and teams informed. Reduce inquiry volume by 60%.</p>
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
              "CloudWest transformed our closing process. AI extracts and verifies documents while our team handles customer relationships. Title searches that took 5-7 days are now 24 hours. We closed 40% more loans in Q4 without adding headcount. Compliance audits are cleaner because everything is logged and auditable."
            </p>
            <p className="font-semibold text-blue-900">— Mortgage Broker Operations Director</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Close Faster, Automate Smarter</h2>
          <p className="text-blue-100 mb-8">See how real estate firms are cutting processing time by 50% and scaling without hiring.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            Schedule Demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
