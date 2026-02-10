import Link from 'next/link';
import { Cookie, FileText, ArrowRight, Settings, BarChart3, Shield, Target } from 'lucide-react';

export default function CookiePolicyPage() {
  const lastUpdated = 'January 15, 2026';

  const cookieTypes = [
    {
      icon: Shield,
      name: 'Essential Cookies',
      required: true,
      description: 'Required for the platform to function properly. These cannot be disabled.',
      examples: ['Session management', 'Authentication tokens', 'Security features', 'Load balancing'],
      retention: 'Session to 30 days',
    },
    {
      icon: Settings,
      name: 'Functional Cookies',
      required: false,
      description: 'Remember your preferences and settings for a better experience.',
      examples: ['Language preferences', 'Location settings', 'Search history', 'Display preferences'],
      retention: '1 year',
    },
    {
      icon: BarChart3,
      name: 'Analytics Cookies',
      required: false,
      description: 'Help us understand how visitors interact with the platform to improve our services.',
      examples: ['Page visit tracking', 'Feature usage patterns', 'Performance monitoring', 'Error tracking'],
      retention: '2 years',
    },
    {
      icon: Target,
      name: 'Marketing Cookies',
      required: false,
      description: 'Used to deliver relevant advertising and measure campaign effectiveness.',
      examples: ['Ad personalization', 'Campaign tracking', 'Retargeting', 'Partner attribution'],
      retention: '90 days',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Cookie className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Cookie Policy</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            This policy explains how BhutanBiz uses cookies and similar technologies to provide, improve, and protect our services.
          </p>
          <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Cookie Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cookieTypes.map((type) => (
            <div key={type.name} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <type.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{type.name}</h3>
                </div>
                {type.required ? (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">Required</span>
                ) : (
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full font-medium">Optional</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4">{type.description}</p>
              <div className="space-y-1">
                {type.examples.map((ex) => (
                  <p key={ex} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full" />
                    {ex}
                  </p>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">Retention: {type.retention}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your experience. BhutanBiz uses cookies and similar technologies (such as local storage and pixel tags) to provide and enhance our business directory services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">BhutanBiz uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Authentication:</strong> To keep you signed in and maintain your session securely.</li>
                <li><strong>Personalization:</strong> To remember your search preferences, location settings, and language choices.</li>
                <li><strong>Analytics:</strong> To understand platform usage patterns, popular searches, and feature engagement to improve our services.</li>
                <li><strong>Security:</strong> To detect and prevent fraudulent activity, abuse, and unauthorized access.</li>
                <li><strong>Advertising:</strong> To show relevant business promotions and measure advertising effectiveness.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We use services from trusted partners including analytics providers, payment processors, and content delivery networks. These third parties have their own privacy policies. We ensure all partners meet our security and privacy standards before integration.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have control over cookies. You can manage your preferences in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may affect platform functionality.</li>
                <li><strong>Cookie Banner:</strong> When you first visit BhutanBiz, our cookie consent banner allows you to accept or customize which cookie categories you permit.</li>
                <li><strong>Account Settings:</strong> Registered users can manage tracking preferences in their account privacy settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about our use of cookies or to update your preferences, contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium">BhutanBiz Privacy Team</p>
                <p className="text-gray-600 text-sm mt-1">Email: privacy@bhutanbiz.com</p>
                <p className="text-gray-600 text-sm">Phone: +975-2-334455</p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Privacy Policy', href: '/legal/privacy', icon: FileText },
            { name: 'Terms of Service', href: '/legal/terms', icon: FileText },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-gray-900">{item.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
