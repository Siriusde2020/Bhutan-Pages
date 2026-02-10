import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar, Download, Award, Building2, Users, Globe, TrendingUp, Mail } from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'February 3, 2026',
      title: 'BhutanBiz Surpasses 8,900 Business Listings, Becomes Bhutan\'s Largest Business Directory',
      excerpt: 'The platform now covers every dzongkhag and 16 industry categories, marking a significant milestone in Bhutan\'s digital business infrastructure.',
      category: 'Milestone',
    },
    {
      date: 'January 18, 2026',
      title: 'BhutanBiz Partners with Ministry of Economic Affairs for Digital Business Registration',
      excerpt: 'New integration allows businesses to sync their MoEA registration data directly with their BhutanBiz profiles for instant verification.',
      category: 'Partnership',
    },
    {
      date: 'December 12, 2025',
      title: 'BhutanBiz Launches Industry Reports Platform with Quarterly Economic Analysis',
      excerpt: 'New data-driven reports provide sector-by-sector analysis of Bhutan\'s business landscape, available free to registered users.',
      category: 'Product Launch',
    },
    {
      date: 'November 5, 2025',
      title: 'BhutanBiz Raises Series A Funding to Expand Platform and Team',
      excerpt: 'Investment from Druk Holding & Investments and regional investors will fuel expansion of the platform\'s analytics and mobile capabilities.',
      category: 'Funding',
    },
    {
      date: 'October 15, 2025',
      title: 'BhutanBiz Wins "Best Digital Platform" at Bhutan Innovation Awards 2025',
      excerpt: 'The platform was recognized for its contribution to digitizing Bhutan\'s business ecosystem and supporting SME growth.',
      category: 'Award',
    },
    {
      date: 'September 1, 2025',
      title: 'BhutanBiz Introduces Premium Analytics Dashboard for Business Owners',
      excerpt: 'New dashboard gives business owners real-time insights into customer behavior, search trends, and competitive positioning.',
      category: 'Product Launch',
    },
  ];

  const stats = [
    { icon: Building2, value: '8,900+', label: 'Businesses Listed' },
    { icon: Users, value: '45,000+', label: 'Monthly Users' },
    { icon: Globe, value: '20', label: 'Dzongkhags Covered' },
    { icon: TrendingUp, value: '250%', label: 'YoY Growth' },
  ];

  const mediaFeatures = [
    { outlet: 'Kuensel', title: 'BhutanBiz: The Platform Digitizing Bhutan\'s Economy', date: 'January 2026' },
    { outlet: 'BBS', title: 'How BhutanBiz is Connecting Businesses Across 20 Dzongkhags', date: 'December 2025' },
    { outlet: 'The Bhutanese', title: 'Startup Spotlight: BhutanBiz\'s Vision for Business Intelligence', date: 'November 2025' },
    { outlet: 'Business Bhutan', title: 'The Rise of Bhutan\'s Digital Business Directory', date: 'October 2025' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Newspaper className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Press &amp; Media</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            News, press releases, and media resources about BhutanBiz -- Bhutan&apos;s leading business directory and intelligence platform.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Press Releases */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Releases</h2>
        <div className="space-y-4 mb-16">
          {pressReleases.map((pr) => (
            <Link key={pr.title} href="/about" className="block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 group">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  pr.category === 'Milestone' ? 'bg-green-50 text-green-600' :
                  pr.category === 'Partnership' ? 'bg-blue-50 text-blue-600' :
                  pr.category === 'Product Launch' ? 'bg-purple-50 text-purple-600' :
                  pr.category === 'Funding' ? 'bg-yellow-50 text-yellow-700' :
                  'bg-orange-50 text-orange-600'
                }`}>{pr.category}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{pr.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{pr.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{pr.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* Media Coverage */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-orange-500" /> Media Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {mediaFeatures.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-orange-600 mb-1">{feature.outlet}</p>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-xs text-gray-400 mt-2">{feature.date}</p>
            </div>
          ))}
        </div>

        {/* Brand Assets */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Brand Assets & Media Kit</h2>
          <p className="text-gray-500 mb-6">
            Download our official logos, brand guidelines, product screenshots, and company fact sheet for editorial use.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Logo Pack', desc: 'SVG, PNG in various formats and colors' },
              { name: 'Brand Guidelines', desc: 'Colors, typography, and usage rules' },
              { name: 'Company Fact Sheet', desc: 'Key stats, leadership, and company info' },
            ].map((asset) => (
              <div key={asset.name} className="border border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 transition-colors cursor-pointer">
                <Download className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{asset.name}</p>
                <p className="text-xs text-gray-400 mt-1">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
          <Mail className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">Media Inquiries</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            For press inquiries, interview requests, or media partnership opportunities, please contact our communications team.
          </p>
          <div className="mt-6 text-gray-300">
            <p className="font-medium">Sonam Pelden, Head of Content &amp; Communications</p>
            <p className="text-sm text-gray-400 mt-1">press@bhutanbiz.com | +975-17-112233</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Press Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
