import Link from 'next/link';
import { Rocket, ArrowRight, CheckCircle, Clock, FileText, Building2, Shield, CreditCard, Users, Globe, AlertCircle } from 'lucide-react';

export default function StartingBusinessPage() {
  const steps = [
    {
      step: 1,
      title: 'Choose Your Business Structure',
      icon: Building2,
      description: 'Select the appropriate legal structure for your venture.',
      details: [
        'Sole Proprietorship - Simplest form, ideal for small businesses with a single owner',
        'Partnership - For two or more individuals sharing ownership and management',
        'Private Limited Company - Separate legal entity with limited liability protection',
        'Public Limited Company - For larger enterprises seeking public investment',
        'Joint Venture - Partnership between domestic and foreign entities',
      ],
      tip: 'Most small businesses in Bhutan start as sole proprietorships. Consider a Private Limited Company if you plan to seek external investment.',
    },
    {
      step: 2,
      title: 'Register with the Ministry of Economic Affairs',
      icon: FileText,
      description: 'Complete the official business registration process.',
      details: [
        'Visit the MoEA G2C portal or regional office to submit your application',
        'Provide a proposed business name (checked against existing registrations)',
        'Submit a detailed business plan or project proposal',
        'Provide national ID (CID) copies of all owners/directors',
        'Pay the registration fee (varies by business type)',
      ],
      tip: 'The MoEA now offers online registration through the G2C portal, significantly speeding up the process from weeks to days.',
    },
    {
      step: 3,
      title: 'Obtain Your Trade License',
      icon: Shield,
      description: 'Secure the appropriate trade license for your industry.',
      details: [
        'Apply at your local Dzongkhag or Thromde office',
        'Provide your business registration certificate',
        'Submit a No Objection Certificate (NOC) from the relevant sector authority',
        'Pay the annual trade license fee',
        'License categories: Retail, Wholesale, Service, Manufacturing, Import/Export',
      ],
      tip: 'Trade licenses must be renewed annually. Set a reminder 30 days before expiry to avoid business interruptions.',
    },
    {
      step: 4,
      title: 'Tax Registration',
      icon: CreditCard,
      description: 'Register with the Department of Revenue and Customs.',
      details: [
        'Obtain a Tax Identification Number (TIN) from the DRC',
        'Register for Business Income Tax (BIT) for sole proprietors',
        'Register for Corporate Income Tax (CIT) for companies',
        'Register for Sales Tax if applicable to your business',
        'Understand quarterly and annual filing requirements',
      ],
      tip: 'Businesses with annual turnover above Nu. 5 million must maintain audited financial statements.',
    },
    {
      step: 5,
      title: 'Set Up Your Business Operations',
      icon: Users,
      description: 'Establish your physical and digital presence.',
      details: [
        'Secure a business location with proper zoning approvals',
        'Open a business bank account (BNB, BDBL, BOB, or T-Bank)',
        'Register for employee provident fund if hiring staff',
        'Set up accounting and bookkeeping systems',
        'Obtain sector-specific permits (food safety, environmental clearance, etc.)',
      ],
      tip: 'Consider co-working spaces in Thimphu TechPark or Loden incubator if you\'re a startup looking to minimize initial overhead.',
    },
    {
      step: 6,
      title: 'Build Your Digital Presence',
      icon: Globe,
      description: 'Get discovered online and attract customers from day one.',
      details: [
        'List your business on BhutanBiz for instant visibility across 20 dzongkhags',
        'Set up Google Business Profile for map visibility',
        'Create social media accounts (Facebook is the most popular platform in Bhutan)',
        'Consider a professional website for credibility',
        'Encourage early customers to leave reviews on BhutanBiz',
      ],
      tip: 'BhutanBiz Premium listings appear at the top of search results and receive 5x more visibility than basic listings.',
    },
  ];

  const keyFacts = [
    { label: 'Registration Time', value: '3-5 days', detail: 'Online via G2C portal' },
    { label: 'Minimum Capital', value: 'Nu. 0', detail: 'For sole proprietorship' },
    { label: 'Trade License Fee', value: 'Nu. 500-5,000', detail: 'Annually, varies by type' },
    { label: 'Corporate Tax Rate', value: '25%', detail: 'Standard CIT rate' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Rocket className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Starting a Business in Bhutan</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your complete guide to launching a successful business in the Land of the Thunder Dragon. From registration to your first customer, we cover every step.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-xl font-bold text-orange-600">{fact.value}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{fact.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{fact.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Start a Business in Bhutan?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bhutan offers a unique and increasingly favorable environment for entrepreneurs. With a stable political system, growing digital infrastructure, strategic location between India and China, and a government committed to economic diversification, the Kingdom presents compelling opportunities for business founders.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Royal Government&apos;s focus on Cottage and Small Industries (CSI), the establishment of Thimphu TechPark, and initiatives like the Loden Foundation&apos;s entrepreneurship programs have created a supportive ecosystem for new ventures. Whether you&apos;re a Bhutanese citizen or a foreign investor, this guide will walk you through every step of the process.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.step} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-5">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-orange-800">Pro Tip</p>
                  <p className="text-sm text-orange-700 mt-0.5">{step.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            Expected Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Registration & Licensing', time: '1-2 weeks', desc: 'Business registration, trade license, and tax registration' },
              { phase: 'Setup & Operations', time: '2-4 weeks', desc: 'Location setup, bank accounts, hiring, and systems' },
              { phase: 'Launch & Growth', time: 'Ongoing', desc: 'Customer acquisition, digital presence, and scaling' },
            ].map((phase) => (
              <div key={phase.phase} className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-lg font-bold text-orange-600">{phase.time}</p>
                <p className="text-sm font-semibold text-gray-900 mt-1">{phase.phase}</p>
                <p className="text-xs text-gray-500 mt-1">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/claim" className="bg-orange-500 hover:bg-orange-600 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold">List Your New Business</h3>
            <p className="text-orange-100 text-sm mt-2">Get your business on BhutanBiz and start attracting customers across Bhutan immediately.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/resources/guides" className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold">More Business Guides</h3>
            <p className="text-gray-300 text-sm mt-2">Explore our complete library of guides covering taxation, hiring, compliance, and growth strategies.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              Browse Guides <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
