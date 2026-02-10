import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Download, Star, Building2, Globe, FileText, TrendingUp, Users, Shield, MapPin } from 'lucide-react';

export default function BusinessGuidesPage() {
  const featuredGuide = {
    title: 'The Complete Guide to Starting a Business in Bhutan (2026 Edition)',
    description: 'Everything you need to know about registering, licensing, and launching your business in the Kingdom of Bhutan. Updated with the latest MoEA regulations and digital registration processes.',
    readTime: '45 min read',
    chapters: 12,
    downloads: '8,200+',
    category: 'Getting Started',
  };

  const guides = [
    {
      icon: Building2,
      category: 'Business Registration',
      title: 'Business Registration & Licensing in Bhutan',
      description: 'Step-by-step walkthrough of the MoEA registration process, required documents, trade license categories, and compliance requirements for all business types.',
      readTime: '25 min',
      tag: 'Essential',
    },
    {
      icon: Globe,
      category: 'Digital Presence',
      title: 'Building Your Online Presence in Bhutan',
      description: 'How to leverage BhutanBiz, social media, and digital marketing to reach customers across all 20 dzongkhags and international markets.',
      readTime: '20 min',
      tag: 'Popular',
    },
    {
      icon: TrendingUp,
      category: 'Growth Strategy',
      title: 'Scaling Your Bhutanese Business',
      description: 'Strategies for growth, from expanding to new dzongkhags to accessing government grants, DHI programs, and international partnerships.',
      readTime: '30 min',
      tag: 'Advanced',
    },
    {
      icon: Shield,
      category: 'Compliance',
      title: 'Tax & Regulatory Compliance Guide',
      description: 'Navigate Bhutan\'s tax system including BIT, CIT, sales tax, and customs duties. Understand annual filing requirements and audit preparation.',
      readTime: '35 min',
      tag: 'Essential',
    },
    {
      icon: Users,
      category: 'Human Resources',
      title: 'Hiring & Employment Laws in Bhutan',
      description: 'Complete guide to Labour and Employment Act compliance, work permits, minimum wage, employee benefits, and workplace safety standards.',
      readTime: '22 min',
      tag: 'Essential',
    },
    {
      icon: MapPin,
      category: 'Tourism Business',
      title: 'Starting a Tourism Business in Bhutan',
      description: 'Guide to Tourism Council licensing, SDF requirements, tour operator permits, hotel ratings, and sustainable tourism practices.',
      readTime: '28 min',
      tag: 'Industry',
    },
    {
      icon: FileText,
      category: 'Finance',
      title: 'Accessing Business Finance in Bhutan',
      description: 'Overview of bank loans, CSI funding, Loden Foundation support, BDBL microfinance, and international development grants available to Bhutanese entrepreneurs.',
      readTime: '18 min',
      tag: 'Popular',
    },
    {
      icon: Star,
      category: 'Customer Success',
      title: 'Getting Reviews & Building Trust',
      description: 'Best practices for earning positive reviews on BhutanBiz, handling feedback professionally, and building a trusted business reputation.',
      readTime: '15 min',
      tag: 'Quick Read',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <BookOpen className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Business Guides</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Expert guides and resources to help you start, grow, and succeed in Bhutan&apos;s business landscape. Written by industry experts and updated regularly.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Featured Guide */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">Featured Guide</span>
              <h2 className="text-2xl md:text-3xl font-bold">{featuredGuide.title}</h2>
              <p className="mt-3 text-orange-100 leading-relaxed">{featuredGuide.description}</p>
              <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-orange-100">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredGuide.readTime}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{featuredGuide.chapters} chapters</span>
                <span className="flex items-center gap-1"><Download className="w-4 h-4" />{featuredGuide.downloads} downloads</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/resources/starting-business" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Read Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <div key={guide.title} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <guide.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{guide.category}</span>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  guide.tag === 'Essential' ? 'bg-blue-50 text-blue-600' :
                  guide.tag === 'Popular' ? 'bg-green-50 text-green-600' :
                  guide.tag === 'Advanced' ? 'bg-purple-50 text-purple-600' :
                  guide.tag === 'Industry' ? 'bg-yellow-50 text-yellow-700' :
                  'bg-gray-50 text-gray-600'
                }`}>{guide.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{guide.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{guide.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{guide.readTime}</span>
                <span className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-white">Need Personalized Business Advice?</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Our team of business consultants can provide tailored guidance for your specific industry and goals in Bhutan.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get Expert Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
