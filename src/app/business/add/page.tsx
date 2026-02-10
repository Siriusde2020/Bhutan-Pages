import Link from 'next/link';
import { PlusCircle, ArrowRight, CheckCircle, Star, Shield, BarChart3, Globe, Zap } from 'lucide-react';

export default function AddBusinessPage() {
  const benefits = [
    { icon: Globe, title: 'Instant Visibility', desc: 'Get discovered by customers across all 20 dzongkhags of Bhutan and internationally' },
    { icon: Shield, title: 'Verified Badge', desc: 'Earn a verified badge that builds trust and credibility with potential customers' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track views, inquiries, and customer engagement with real-time insights' },
    { icon: Star, title: 'Customer Reviews', desc: 'Build your reputation through genuine customer reviews and ratings' },
  ];

  const steps = [
    { step: 1, title: 'Create Your Account', desc: 'Sign up for a free BhutanBiz account with your email or phone number.' },
    { step: 2, title: 'Add Business Details', desc: 'Enter your business name, category, location, contact information, and services.' },
    { step: 3, title: 'Upload Photos', desc: 'Add photos of your business, products, and team to make your listing stand out.' },
    { step: 4, title: 'Submit for Verification', desc: 'Our team verifies your listing against MoEA records within 2-3 business days.' },
    { step: 5, title: 'Go Live', desc: 'Once verified, your listing goes live and starts attracting customers immediately.' },
  ];

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: ['Business profile page', 'Contact information', 'Category listing', 'Up to 5 photos', 'Customer reviews'],
    },
    {
      name: 'Premium',
      price: 'Nu. 2,500/mo',
      features: ['Everything in Basic', 'Priority in search results', 'Verified badge', 'Unlimited photos', 'Analytics dashboard', 'Remove competitor ads', 'Social media links'],
      popular: true,
    },
    {
      name: 'Gold',
      price: 'Nu. 7,500/mo',
      features: ['Everything in Premium', 'Featured on homepage', 'Custom profile URL', 'Video showcase', 'Dedicated account manager', 'Monthly SEO report', 'API access'],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <PlusCircle className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Add Your Business</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join 8,900+ businesses on Bhutan&apos;s largest business directory. Get discovered by thousands of customers searching for services like yours every day.
          </p>
          <Link href="/auth/register?plan=free" className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-orange-500/25 transition-all text-lg">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{b.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* How It Works */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-16">
          <div className="space-y-6">
            {steps.map((item, idx) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  {idx < steps.length - 1 && <div className="w-0.5 h-6 bg-orange-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">Choose Your Plan</h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">Start with a free listing and upgrade anytime to unlock premium features.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-7 ${'popular' in plan && plan.popular ? 'bg-orange-500 text-white ring-4 ring-orange-300' : 'bg-white border border-gray-200 shadow-sm'}`}>
              <h3 className={`text-lg font-bold ${'popular' in plan && plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-2xl font-extrabold mt-2 ${'popular' in plan && plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</p>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${'popular' in plan && plan.popular ? 'text-orange-200' : 'text-green-500'}`} />
                    <span className={'popular' in plan && plan.popular ? 'text-white/90' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/auth/register?plan=${plan.name.toLowerCase()}`} className={`mt-6 block text-center py-3 rounded-lg font-semibold transition-colors ${'popular' in plan && plan.popular ? 'bg-white text-orange-600 hover:bg-orange-50' : 'bg-orange-500 text-white hover:bg-orange-600'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
          <Zap className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">Join Bhutan&apos;s Fastest Growing Business Platform</h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Over 8,900 businesses trust BhutanBiz to connect them with customers. Start your free listing today.
          </p>
          <Link href="/auth/register?plan=free" className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Add Your Business Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
