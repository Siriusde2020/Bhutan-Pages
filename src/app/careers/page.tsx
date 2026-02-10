import Link from 'next/link';
import { Briefcase, ArrowRight, MapPin, Clock, Heart, Zap, Users, Globe, BookOpen, Coffee, Shield, Star } from 'lucide-react';

export default function CareersPage() {
  const values = [
    { icon: Heart, title: 'Purpose-Driven', desc: 'Every line of code we write helps Bhutanese businesses grow and contributes to our nation\'s digital economy.' },
    { icon: Users, title: 'Collaborative', desc: 'We work as one team, sharing ideas, mentoring each other, and celebrating wins together.' },
    { icon: Zap, title: 'Innovation-First', desc: 'We encourage experimentation, embrace new technologies, and think big about what\'s possible.' },
    { icon: Globe, title: 'Impact at Scale', desc: 'Your work directly reaches thousands of businesses and hundreds of thousands of users across Bhutan.' },
  ];

  const benefits = [
    { icon: Coffee, title: 'Flexible Work', desc: 'Hybrid work model with WFH options. We trust you to do great work from anywhere.' },
    { icon: BookOpen, title: 'Learning Budget', desc: 'Nu. 50,000 annual learning stipend for courses, conferences, and certifications.' },
    { icon: Shield, title: 'Health Coverage', desc: 'Comprehensive health insurance for you and your family.' },
    { icon: Star, title: 'Equity Options', desc: 'Employee stock options so you share in our success.' },
  ];

  const openPositions = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Thimphu',
      type: 'Full-Time',
      description: 'Build and scale the platform that powers Bhutan\'s largest business directory. Experience with Next.js, TypeScript, and PostgreSQL required.',
    },
    {
      title: 'Product Designer (UI/UX)',
      department: 'Design',
      location: 'Thimphu / Remote',
      type: 'Full-Time',
      description: 'Design intuitive, beautiful interfaces for our web and mobile platforms. Shape the user experience for thousands of daily users.',
    },
    {
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Thimphu',
      type: 'Full-Time',
      description: 'Drive business growth by onboarding premium clients, building partnerships, and expanding our advertiser base across Bhutan.',
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Thimphu',
      type: 'Full-Time',
      description: 'Turn platform data into actionable insights. Create industry reports, user analytics, and market intelligence products.',
    },
    {
      title: 'Content Writer (English & Dzongkha)',
      department: 'Content',
      location: 'Thimphu / Remote',
      type: 'Full-Time',
      description: 'Create compelling business guides, blog posts, and marketing content in both English and Dzongkha for our growing audience.',
    },
    {
      title: 'Customer Success Associate',
      department: 'Operations',
      location: 'Thimphu',
      type: 'Full-Time',
      description: 'Help business owners succeed on the platform. Provide onboarding support, resolve issues, and gather feedback to improve our products.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Briefcase className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Build Bhutan&apos;s <span className="text-orange-400">Digital Future</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join the team building Bhutan&apos;s most impactful business platform. We are looking for passionate people who want to make a real difference in our nation&apos;s economy.
          </p>
          <a href="#openings" className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-orange-500/25 transition-all text-lg">
            View Open Positions <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Work at BhutanBiz?</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We are more than a tech company. We are building critical digital infrastructure for Bhutan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{v.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <b.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">Open Positions</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We are hiring across multiple teams. If you do not see a role that fits, send us your resume anyway -- we are always looking for exceptional talent.
          </p>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div key={position.title} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{position.department}</span>
                      <span className="text-xs text-gray-400">{position.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{position.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{position.description}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{position.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{position.type}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex-shrink-0">
                    Apply <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-orange-50 border border-orange-100 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Don&apos;t See Your Role?</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We are always looking for talented individuals who share our passion for building Bhutan&apos;s digital future. Send us your resume and tell us how you&apos;d contribute.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Send Your Resume <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
