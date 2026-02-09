'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Globe,
  BarChart3,
  Building2,
  Users,
  Zap,
  Mountain,
  Leaf,
  HardHat,
  Monitor,
  Plane,
  ArrowRight,
  CheckCircle,
  Send,
  Shield,
  DollarSign,
  Activity,
  Target,
  Database,
  Code,
  PieChart,
  ChevronDown,
} from 'lucide-react';

export default function InvestorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'Market Intelligence Reports',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const marketStats = [
    { label: 'GDP (2025)', value: '$2.8B', icon: DollarSign },
    { label: 'GDP Growth Rate', value: '5.2%', icon: TrendingUp },
    { label: 'Ease of Doing Business', value: 'Top 100', icon: Activity },
    { label: 'FDI Inflows (2025)', value: '$45M', icon: Globe },
  ];

  const platformMetrics = [
    { label: 'Total Business Listings', value: '8,900+', trend: '+12% MoM' },
    { label: 'Monthly Active Users', value: '45,000+', trend: '+18% MoM' },
    { label: 'Platform Growth Rate', value: '35%', trend: 'YoY' },
    { label: 'Verified Businesses', value: '3,400+', trend: '+15% MoM' },
  ];

  const dataProducts = [
    {
      icon: PieChart,
      title: 'Market Intelligence Reports',
      description:
        'Comprehensive industry reports covering all 16 business sectors in Bhutan. Includes market sizing, competitive landscape, and growth projections.',
      features: [
        'Sector-level market analysis',
        'Competitive benchmarking',
        'Consumer behavior trends',
        'Quarterly updates',
      ],
    },
    {
      icon: Code,
      title: 'API Access',
      description:
        'Programmatic access to Bhutan\'s most comprehensive business database via RESTful API. Ideal for data integration and analytics platforms.',
      features: [
        'Real-time business data',
        'Search & filter endpoints',
        'Review & rating data',
        'Webhooks for updates',
      ],
    },
    {
      icon: Database,
      title: 'Custom Analytics',
      description:
        'Tailored data products and analysis built for your specific investment thesis. Our team works with you to deliver actionable insights.',
      features: [
        'Custom data extraction',
        'Due diligence support',
        'Market entry analysis',
        'Risk assessment reports',
      ],
    },
  ];

  const sectors = [
    {
      icon: Plane,
      name: 'Tourism',
      growth: '+18.5%',
      description: 'Bhutan\'s premium tourism model with 658+ operators',
    },
    {
      icon: Monitor,
      name: 'Technology',
      growth: '+35.7%',
      description: 'Fastest growing sector with Thimphu TechPark as hub',
    },
    {
      icon: Leaf,
      name: 'Agriculture',
      growth: '+9.8%',
      description: 'Organic farming focus with export potential',
    },
    {
      icon: Zap,
      name: 'Energy',
      growth: '+12.1%',
      description: 'Hydropower backbone with solar energy expansion',
    },
    {
      icon: HardHat,
      name: 'Construction',
      growth: '+22.1%',
      description: 'Booming with Gelephu Mindfulness City project',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0a1a] via-[#111133] to-[#0a1628] py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold rounded-full px-5 py-2 mb-8">
            <TrendingUp className="w-4 h-4" />
            Investor Relations
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Invest in Bhutan&apos;s{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            BhutanBiz is building the definitive data platform for Bhutan&apos;s
            economy. Access market intelligence, business data, and growth
            analytics for the world&apos;s last Himalayan kingdom.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#investor-form"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
            >
              Request Investor Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/api-docs"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bhutan Market Opportunity
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              A unique, high-growth market with strong government support for
              digital transformation and foreign investment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Metrics */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Platform Metrics
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Real-time performance indicators demonstrating strong growth and
              market adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-400 mt-2">
                  <TrendingUp className="w-3 h-3" />
                  {metric.trend}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Products */}
      <section className="py-16 md:py-20 bg-[#0d0d24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Data Products
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade data products built on Bhutan&apos;s most
              comprehensive business dataset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
                  <product.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Growth Sectors
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              High-potential sectors driving Bhutan&apos;s economic
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{sector.name}</h3>
                <p className="text-green-400 text-sm font-semibold mt-1">
                  {sector.growth}
                </p>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Investor Form */}
      <section
        id="investor-form"
        className="py-16 md:py-20 bg-[#0d0d24]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Request Investor Access
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Get exclusive access to detailed market data, growth metrics,
                and investment opportunity analysis. Our team will provide a
                customized briefing based on your interest areas.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Detailed sector analysis and growth data',
                  'Company-level financial indicators',
                  'Regulatory and compliance insights',
                  'Direct connection to local business leaders',
                  'Quarterly market update briefings',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <h4 className="font-semibold text-white text-sm">
                    Data Security
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  All investor data is handled under NDA. We comply with
                  Bhutan&apos;s data protection regulations and international
                  standards for financial data handling.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Request Received
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                      Thank you, {formData.name}. Our investor relations team
                      will contact you at {formData.email} within 2 business
                      days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or fund name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Area of Interest
                      </label>
                      <div className="relative">
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full appearance-none px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
                        >
                          <option value="Market Intelligence Reports">
                            Market Intelligence Reports
                          </option>
                          <option value="API Access">API Access</option>
                          <option value="Custom Analytics">Custom Analytics</option>
                          <option value="FDI Opportunities">FDI Opportunities</option>
                          <option value="Partnership">Strategic Partnership</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your investment interest..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
