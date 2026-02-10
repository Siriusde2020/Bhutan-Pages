import Link from 'next/link';
import { BarChart3, ArrowRight, Calendar, Download, TrendingUp, Building2, Globe, Briefcase, ShoppingBag, Hotel, Construction, Wifi } from 'lucide-react';

export default function IndustryReportsPage() {
  const featuredReport = {
    title: 'Bhutan Economic Outlook 2026: Business Landscape & Growth Opportunities',
    description: 'Comprehensive analysis of Bhutan\'s economic trajectory, sector-by-sector growth projections, emerging industries, and investment opportunities across all 20 dzongkhags.',
    date: 'January 2026',
    pages: 86,
    downloads: '12,400+',
  };

  const reports = [
    {
      icon: Hotel,
      title: 'Tourism & Hospitality Sector Report',
      description: 'Analysis of Bhutan\'s tourism recovery post-SDF reform, hotel occupancy trends, emerging destinations, and opportunities in premium tourism.',
      date: 'Q4 2025',
      category: 'Tourism',
      pages: 42,
    },
    {
      icon: Wifi,
      title: 'Digital Economy & IT Sector Report',
      description: 'Growth of Thimphu TechPark ecosystem, startup landscape, government digitization initiatives, and opportunities in fintech and e-commerce.',
      date: 'Q4 2025',
      category: 'Technology',
      pages: 38,
    },
    {
      icon: Construction,
      title: 'Construction & Real Estate Market Report',
      description: 'Real estate trends across Thimphu, Paro, and emerging urban centers. Infrastructure projects, housing demand, and commercial property analysis.',
      date: 'Q3 2025',
      category: 'Real Estate',
      pages: 35,
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Consumer Goods Report',
      description: 'Consumer spending patterns, retail modernization trends, e-commerce adoption, and opportunities in FMCG distribution across Bhutan.',
      date: 'Q3 2025',
      category: 'Retail',
      pages: 30,
    },
    {
      icon: Building2,
      title: 'Small & Medium Enterprise Report',
      description: 'State of SMEs in Bhutan: challenges, government support programs, CSI funding utilization, growth metrics, and success factors.',
      date: 'Q2 2025',
      category: 'SME',
      pages: 44,
    },
    {
      icon: Globe,
      title: 'Foreign Direct Investment Report',
      description: 'FDI trends, sector-wise investment flows, policy changes, and comparative analysis of Bhutan\'s investment climate in South Asia.',
      date: 'Q2 2025',
      category: 'Investment',
      pages: 40,
    },
    {
      icon: Briefcase,
      title: 'Employment & Workforce Report',
      description: 'Labor market analysis, skill gaps, youth employment trends, salary benchmarks by industry, and workforce development initiatives.',
      date: 'Q1 2025',
      category: 'Employment',
      pages: 36,
    },
    {
      icon: TrendingUp,
      title: 'Startup Ecosystem Report',
      description: 'Bhutan\'s emerging startup ecosystem: Loden Foundation impact, incubators, funding landscape, and profiles of high-growth ventures.',
      date: 'Q1 2025',
      category: 'Startups',
      pages: 28,
    },
  ];

  const keyStats = [
    { value: '24', label: 'Reports Published' },
    { value: '50K+', label: 'Total Downloads' },
    { value: '16', label: 'Industries Covered' },
    { value: '20', label: 'Dzongkhags Analyzed' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <BarChart3 className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Industry Reports</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Data-driven insights into Bhutan&apos;s business landscape. Our research team analyzes market trends, growth opportunities, and sector performance to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Featured Report */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 md:p-10 text-white mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-orange-500/30 text-orange-300 px-3 py-1 rounded-full mb-4">Featured Report</span>
              <h2 className="text-2xl md:text-3xl font-bold">{featuredReport.title}</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">{featuredReport.description}</p>
              <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredReport.date}</span>
                <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" />{featuredReport.pages} pages</span>
                <span className="flex items-center gap-1"><Download className="w-4 h-4" />{featuredReport.downloads} downloads</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                <Download className="w-4 h-4" /> Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div key={report.title} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <report.icon className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{report.category}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{report.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{report.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{report.date}</span>
                  <span>{report.pages} pages</span>
                </div>
                <button className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  <Download className="w-3 h-3" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-orange-50 border border-orange-100 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need Custom Research?</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Our research team can produce bespoke industry reports, market entry studies, and competitive analyses tailored to your specific business needs in Bhutan.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Request Custom Report <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
