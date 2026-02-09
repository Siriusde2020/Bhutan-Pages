import Link from 'next/link';
import {
  Building2,
  MapPin,
  Users,
  Shield,
  Eye,
  Target,
  Heart,
  Lightbulb,
  Flag,
  Lock,
  ArrowRight,
  BarChart3,
  Globe,
  Handshake,
  Award,
  CheckCircle,
  Star,
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Building2, value: '8,900+', label: 'Businesses Listed', color: 'bg-orange-50 text-orange-600' },
    { icon: MapPin, value: '20', label: 'Dzongkhags Covered', color: 'bg-blue-50 text-blue-600' },
    { icon: Users, value: '45,000+', label: 'Monthly Visitors', color: 'bg-green-50 text-green-600' },
    { icon: Shield, value: '3,400+', label: 'Verified Businesses', color: 'bg-purple-50 text-purple-600' },
  ];

  const values = [
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'We believe in open, honest information. Every listing is transparent about services, pricing, and customer experiences.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Lock,
      title: 'Trust',
      description:
        'Our verification process ensures that listed businesses are legitimate, licensed, and accountable to their customers.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We continuously improve our platform with AI-powered search, analytics, and tools that help businesses and customers connect better.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Flag,
      title: 'Bhutan-First',
      description:
        'Built by Bhutanese, for Bhutan. We prioritize local businesses and contribute to the digital transformation of our national economy.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  const team = [
    {
      name: 'Karma Tshering',
      role: 'Founder & CEO',
      bio: 'Former tech executive with 10+ years in digital platforms. Passionate about digitizing Bhutan\'s economy.',
    },
    {
      name: 'Dechen Wangmo',
      role: 'Chief Technology Officer',
      bio: 'Full-stack engineer with experience at leading tech companies. Leads platform architecture and development.',
    },
    {
      name: 'Ugyen Dorji',
      role: 'Head of Business Development',
      bio: 'Connects businesses with opportunities. Deep network across all 20 dzongkhags and multiple industries.',
    },
    {
      name: 'Sonam Pelden',
      role: 'Head of Content & Research',
      bio: 'Award-winning journalist turned content strategist. Leads market research and editorial operations.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            About <span className="text-orange-400">BhutanBiz</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are building Bhutan&apos;s most comprehensive business directory
            and intelligence platform -- connecting customers with businesses,
            empowering entrepreneurs, and providing data-driven insights for
            Bhutan&apos;s economic growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To digitize and democratize access to business information in
              Bhutan, making it easy for anyone to discover, evaluate, and
              connect with businesses across all 20 dzongkhags. We aim to be the
              bridge between Bhutanese businesses and the digital economy.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To become Bhutan&apos;s essential digital infrastructure for
              commerce -- a platform where every business is discoverable, every
              service is accessible, and data-driven decisions power sustainable
              growth aligned with Gross National Happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Economic Backbone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bhutan&apos;s Digital Economic Backbone
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            More than a directory -- BhutanBiz is a comprehensive platform that
            supports every aspect of Bhutan&apos;s business ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: 'Business Discovery',
              description:
                'Search and filter through 8,900+ businesses across 16 categories and 20 dzongkhags. Find exactly what you need.',
            },
            {
              icon: BarChart3,
              title: 'Market Intelligence',
              description:
                'Access industry reports, market analytics, and growth trends that help businesses and investors make informed decisions.',
            },
            {
              icon: Shield,
              title: 'Trust & Verification',
              description:
                'Our multi-tier verification system ensures businesses are legitimate, with government registration and trade license checks.',
            },
            {
              icon: Star,
              title: 'Reviews & Ratings',
              description:
                'Transparent customer reviews and ratings help consumers make confident choices and businesses improve their services.',
            },
            {
              icon: Globe,
              title: 'Digital Presence',
              description:
                'We help businesses establish their online presence with SEO-optimized profiles, reaching customers far beyond their physical location.',
            },
            {
              icon: Handshake,
              title: 'Business Connections',
              description:
                'Facilitating partnerships, investment opportunities, and B2B connections across Bhutan and internationally.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.color.split(' ')[0]}`}
                >
                  <stat.icon
                    className={`w-7 h-7 ${stat.color.split(' ')[1]}`}
                  />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Team
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            A passionate team dedicated to building Bhutan&apos;s digital
            business infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md p-6 text-center transition-all duration-200"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-orange-600 font-medium">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
              The principles that guide everything we build and every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Partners &amp; Supporters
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Working together with key stakeholders to build Bhutan&apos;s
            digital economy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Ministry of Economic Affairs',
            'Bhutan Chamber of Commerce',
            'GovTech Agency',
            'Loden Foundation',
            'Royal Monetary Authority',
            'Tourism Council of Bhutan',
            'Thimphu TechPark',
            'DHI (Druk Holding)',
          ].map((partner) => (
            <div
              key={partner}
              className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center text-center hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-700">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Bhutan&apos;s Largest Business Directory
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Whether you are a business owner, investor, or customer, BhutanBiz
            has something for you. Get started today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/list-business"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
            >
              List Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
