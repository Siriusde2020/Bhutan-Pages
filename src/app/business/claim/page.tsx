import Link from 'next/link';
import { ClipboardCheck, ArrowRight, CheckCircle, Search, Shield, FileText, Settings, Star } from 'lucide-react';

export default function ClaimBusinessPage() {
  const steps = [
    { icon: Search, title: 'Find Your Business', desc: 'Search for your business on BhutanBiz using the search bar. Most registered businesses in Bhutan are already listed in our directory.' },
    { icon: FileText, title: 'Submit Claim Request', desc: 'Click "Claim This Business" on your listing page and fill out the verification form with your ownership details.' },
    { icon: Shield, title: 'Verify Ownership', desc: 'Submit your trade license, business registration certificate, and a valid ID. Our team verifies against MoEA records.' },
    { icon: Settings, title: 'Take Control', desc: 'Once verified, you gain full access to edit your listing, respond to reviews, view analytics, and manage your business profile.' },
  ];

  const benefits = [
    'Edit and update your business information anytime',
    'Respond to customer reviews and build reputation',
    'Access detailed analytics on views, clicks, and inquiries',
    'Upload unlimited photos and showcase your services',
    'Add special offers, promotions, and announcements',
    'Control your business hours and contact details',
    'Receive direct customer messages and inquiries',
    'Get a verified business badge for enhanced credibility',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <ClipboardCheck className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Claim Your Business</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your business is already on BhutanBiz. Take control of your listing to update information, respond to reviews, and unlock powerful management tools.
          </p>
          <Link href="/search" className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-orange-500/25 transition-all text-lg">
            <Search className="w-5 h-5" /> Find Your Business
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* How to Claim */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">How to Claim Your Listing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{idx + 1}</span>
              </div>
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Claim Your Listing?</h2>
              <p className="text-gray-500 mb-6">Claimed businesses receive 3x more engagement than unclaimed listings. Take control to maximize your visibility.</p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-72 flex-shrink-0">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <Star className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-bold text-gray-900">Claimed Business Stats</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'More profile views', value: '3x' },
                    { label: 'More customer inquiries', value: '2.5x' },
                    { label: 'Higher search ranking', value: '+45%' },
                    { label: 'Average rating boost', value: '+0.4' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{stat.label}</span>
                      <span className="text-sm font-bold text-orange-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does verification take?', a: 'Standard verification takes 2-3 business days. Premium members receive expedited 24-hour verification.' },
              { q: 'What documents do I need?', a: 'A valid trade license, business registration certificate from MoEA, and your national ID (CID) or passport.' },
              { q: 'What if my business is not listed?', a: 'You can add your business for free. Visit the "Add Your Business" page to create a new listing.' },
              { q: 'Is claiming free?', a: 'Yes, claiming and managing your basic listing is completely free. Premium features are available through our paid plans.' },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-sm text-gray-500 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/search" className="bg-orange-500 hover:bg-orange-600 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold">Find & Claim Your Business</h3>
            <p className="text-orange-100 text-sm mt-2">Search for your business and start the claim process today.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              Search Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/business/add" className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold">Not Listed Yet?</h3>
            <p className="text-gray-300 text-sm mt-2">Add your business to BhutanBiz for free and start getting discovered.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              Add Business <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
