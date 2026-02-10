import Link from 'next/link';
import { Megaphone, ArrowRight, CheckCircle, BarChart3, Eye, Users, Target, TrendingUp, Star, Zap } from 'lucide-react';

export default function AdvertisingPage() {
  const plans = [
    {
      name: 'Spotlight',
      price: 'Nu. 5,000',
      period: '/month',
      description: 'Perfect for small businesses looking to increase local visibility.',
      features: [
        'Featured placement in category results',
        'Highlighted listing with badge',
        'Monthly performance report',
        'Priority in local search results',
        '1 sponsored search keyword',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Amplify',
      price: 'Nu. 15,000',
      period: '/month',
      description: 'For growing businesses that want maximum exposure across Bhutan.',
      features: [
        'Everything in Spotlight',
        'Homepage featured section placement',
        'Banner ads on category pages',
        'Weekly performance analytics',
        '5 sponsored search keywords',
        'Social media promotion (1x/month)',
        'Priority customer support',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Dominate',
      price: 'Nu. 35,000',
      period: '/month',
      description: 'Enterprise-grade visibility for market leaders and national brands.',
      features: [
        'Everything in Amplify',
        'Exclusive top placement across all pages',
        'Custom landing page on BhutanBiz',
        'Daily analytics dashboard',
        'Unlimited sponsored keywords',
        'Social media promotion (4x/month)',
        'Dedicated account manager',
        'Quarterly strategy review',
        'Competitor analysis reports',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  const stats = [
    { icon: Eye, value: '2.5M+', label: 'Monthly Page Views' },
    { icon: Users, value: '45,000+', label: 'Monthly Active Users' },
    { icon: Target, value: '92%', label: 'Bhutanese Audience' },
    { icon: TrendingUp, value: '5.2x', label: 'Average ROI' },
  ];

  const adFormats = [
    {
      title: 'Featured Listings',
      description: 'Appear at the top of search results and category pages with a highlighted badge. The most effective way to capture high-intent users.',
      metric: '3.8x more clicks than standard listings',
    },
    {
      title: 'Banner Advertising',
      description: 'Display banners on high-traffic pages including the homepage, category pages, and location pages. Multiple sizes available.',
      metric: '1.2% average click-through rate',
    },
    {
      title: 'Sponsored Search',
      description: 'Bid on keywords relevant to your business. Appear as the top result when users search for your products or services.',
      metric: '4.5x higher conversion rate',
    },
    {
      title: 'Newsletter Sponsorship',
      description: 'Reach our 28,000+ email subscribers with dedicated sponsor placements in our weekly business insights newsletter.',
      metric: '35% average open rate',
    },
    {
      title: 'Content Partnership',
      description: 'Sponsored articles, business spotlights, and industry features that showcase your expertise and reach our engaged audience.',
      metric: '2,500+ average article views',
    },
    {
      title: 'Event Promotion',
      description: 'Promote your business events, workshops, and launches to a targeted audience through our Events section and notifications.',
      metric: '85% event awareness in target market',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Megaphone className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Advertise on BhutanBiz</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Reach Bhutan&apos;s most engaged business audience. Our advertising solutions put your brand in front of the right customers at the right time.
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Why Advertise */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Advertise With Us?</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            BhutanBiz is where Bhutanese consumers and businesses come to discover, evaluate, and connect. Our audience is highly targeted and ready to engage.
          </p>
        </div>

        {/* Ad Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {adFormats.map((format) => (
            <div key={format.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900">{format.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{format.description}</p>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                <p className="text-xs font-medium text-green-700 flex items-center gap-1">
                  <BarChart3 className="w-3 h-3" />
                  {format.metric}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">Advertising Plans</h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Choose the plan that fits your goals. All plans include performance tracking and can be customized.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 ${plan.popular ? 'bg-orange-500 text-white ring-4 ring-orange-300 scale-105' : 'bg-white border border-gray-200 shadow-sm'}`}>
              {plan.popular && (
                <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4 flex items-center gap-1 w-fit">
                  <Star className="w-3 h-3" /> Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className="mt-2">
                <span className={`text-3xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mt-2 ${plan.popular ? 'text-orange-100' : 'text-gray-500'}`}>{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-orange-200' : 'text-green-500'}`} />
                    <span className={plan.popular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-white text-orange-600 hover:bg-orange-50' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
          <Zap className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">Ready to Grow Your Business?</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Our advertising team will work with you to create a custom strategy that maximizes your ROI and reaches your target audience.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Our Ad Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
