import React from 'react';
import { Zap, Building2, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Stage of Growth
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a founder building your first AI-powered workflow or an enterprise scaling across departments, we have a model that fits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Founders Plan */}
          <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden group border border-blue-700">
            <div className="absolute top-0 right-0 bg-teal-400 text-blue-900 px-4 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider">
              For Founders
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-400/20 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Founder's Plan</h3>
                  <p className="text-blue-200 text-sm">For startups & early-stage companies</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-white mb-2">Fixed Price</div>
                <p className="text-blue-200 text-sm">
                  One predictable cost — no surprises, no usage fees. Get everything you need to launch and validate your AI-powered operations.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Full AI agent deployment for your core workflow',
                  'Dedicated onboarding & integration support',
                  'Industry-specific customization',
                  'Up to 3 months of post-launch optimization',
                  'Direct access to our engineering team'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-blue-100">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-teal-400 hover:bg-teal-300 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
              >
                Talk to Us
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Enterprise / Subscription Plan */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group border border-gray-200">
            <div className="absolute top-0 right-0 bg-blue-700 text-white px-4 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider">
              For Teams & Enterprise
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Building2 className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Subscription</h3>
                  <p className="text-gray-500 text-sm">For growing teams & enterprises</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">Subscription-Based</div>
                <p className="text-gray-500 text-sm">
                  Scale your AI operations month over month. Flexible plans that grow with your business — add agents, workflows, and integrations as you need them.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited AI agent deployments across departments',
                  'Priority support with dedicated account manager',
                  'Custom integrations with your existing tech stack',
                  'Continuous optimization & performance monitoring',
                  'Advanced analytics & ROI reporting dashboard',
                  'Enterprise-grade security & compliance'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Every engagement starts with a free consultation. We'll scope your needs, map your workflows, and recommend the right plan — no commitment required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
