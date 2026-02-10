import Link from 'next/link';
import { Globe, ArrowRight, TrendingUp, Shield, Building2, Briefcase, CheckCircle, DollarSign, MapPin, BarChart3 } from 'lucide-react';

export default function FDIPage() {
  const investmentSectors = [
    {
      name: 'Tourism & Hospitality',
      fdiAllowed: '100%',
      minInvestment: 'USD 500,000',
      description: 'Hotels, resorts, tourism services, and cultural tourism ventures',
      growth: '+18%',
    },
    {
      name: 'IT & Technology',
      fdiAllowed: '100%',
      minInvestment: 'USD 250,000',
      description: 'Software development, IT services, BPO, and digital platforms',
      growth: '+35%',
    },
    {
      name: 'Manufacturing',
      fdiAllowed: '74%',
      minInvestment: 'USD 1,000,000',
      description: 'Food processing, textiles, construction materials, and light manufacturing',
      growth: '+12%',
    },
    {
      name: 'Education & Training',
      fdiAllowed: '51%',
      minInvestment: 'USD 500,000',
      description: 'Technical institutes, vocational training, and professional development',
      growth: '+22%',
    },
    {
      name: 'Renewable Energy',
      fdiAllowed: '74%',
      minInvestment: 'USD 2,000,000',
      description: 'Solar, wind, and small-scale hydropower projects',
      growth: '+28%',
    },
    {
      name: 'Agriculture & Food',
      fdiAllowed: '51%',
      minInvestment: 'USD 300,000',
      description: 'Organic farming, food processing, cold chain, and agri-tech',
      growth: '+15%',
    },
  ];

  const advantages = [
    { icon: Shield, title: 'Stable Governance', desc: 'Constitutional monarchy with strong rule of law and zero corruption tolerance' },
    { icon: TrendingUp, title: 'Growing Economy', desc: 'Consistent GDP growth averaging 5-7% with diversification agenda' },
    { icon: Globe, title: 'Strategic Location', desc: 'Between two of the world\'s largest economies - India and China' },
    { icon: DollarSign, title: 'Tax Incentives', desc: 'Tax holidays up to 10 years for priority sectors and special economic zones' },
    { icon: MapPin, title: 'Untapped Market', desc: 'First-mover advantages in many sectors with growing consumer base' },
    { icon: Building2, title: 'Gov Support', desc: 'Proactive government with dedicated investment promotion agency' },
  ];

  const process = [
    { step: 1, title: 'Initial Application', desc: 'Submit FDI application to the Department of Industry (DoI) under MoEA with project proposal' },
    { step: 2, title: 'Sector Clearance', desc: 'Obtain clearance from relevant sector ministry and environmental approval if required' },
    { step: 3, title: 'FDI Committee Review', desc: 'Application reviewed by the FDI Committee chaired by the Minister of Economic Affairs' },
    { step: 4, title: 'Approval & Registration', desc: 'Upon approval, register the company and obtain trade license and tax registration' },
    { step: 5, title: 'Operations Setup', desc: 'Set up operations with support from the DoI investment facilitation services' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Globe className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Foreign Direct Investment in Bhutan</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover investment opportunities in one of Asia&apos;s fastest-growing economies. Bhutan offers a unique combination of stability, incentives, and untapped potential.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '$284M', label: 'Total FDI Stock' },
            { value: '47', label: 'Active FDI Projects' },
            { value: '6.2%', label: 'GDP Growth Rate' },
            { value: '10 yrs', label: 'Max Tax Holiday' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Why Invest */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Why Invest in Bhutan?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <adv.icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{adv.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Sectors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">Priority Investment Sectors</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
            Bhutan&apos;s FDI policy identifies key sectors with specific ownership caps and minimum investment thresholds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentSectors.map((sector) => (
              <div key={sector.name} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{sector.name}</h3>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{sector.growth} YoY</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{sector.description}</p>
                <div className="flex items-center gap-4 text-xs">
                  <div className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg font-medium">
                    FDI: up to {sector.fdiAllowed}
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-medium">
                    Min: {sector.minInvestment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FDI Process */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">FDI Application Process</h2>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="space-y-6">
              {process.map((item, idx) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    {idx < process.length - 1 && <div className="w-0.5 h-8 bg-orange-200 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="mb-16">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-400" />
              Key Regulatory Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'FDI Policy 2019 (Amended 2023)', desc: 'Primary legislation governing foreign investment, ownership limits, and sector-specific regulations' },
                { title: 'Companies Act of Bhutan 2016', desc: 'Governs company registration, corporate governance, and shareholder rights' },
                { title: 'Tax Act & Incentives', desc: 'Tax holidays up to 10 years, import duty exemptions on capital goods, and profit repatriation guarantees' },
                { title: 'Labour Act 2007', desc: 'Employment regulations, minimum wage, work permits for foreign workers, and workplace standards' },
              ].map((reg) => (
                <div key={reg.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{reg.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{reg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold">Investment Inquiry</h3>
            <p className="text-orange-100 text-sm mt-2">Speak with our investment facilitation team for personalized guidance on FDI in Bhutan.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/resources/reports" className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 text-white transition-colors group">
            <h3 className="text-lg font-bold flex items-center gap-2"><BarChart3 className="w-5 h-5" /> FDI Reports</h3>
            <p className="text-gray-300 text-sm mt-2">Download our detailed FDI sector analysis reports and market entry studies.</p>
            <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold">
              View Reports <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
