import Link from 'next/link';
import { Shield, FileText, ArrowRight, Eye, Lock, Database, Globe, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2026';

  const highlights = [
    { icon: Lock, title: 'Data Encryption', desc: 'All data encrypted at rest and in transit using AES-256 and TLS 1.3' },
    { icon: Database, title: 'Local Storage', desc: 'Primary data stored within Bhutan-based infrastructure' },
    { icon: UserCheck, title: 'User Control', desc: 'Full control over your data with easy export and deletion' },
    { icon: Eye, title: 'Transparency', desc: 'Clear disclosure of what we collect and why' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Shield className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how BhutanBiz collects, uses, protects, and shares your personal information.
          </p>
          <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Highlights */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Account Information:</strong> Name, email address, phone number, and password when you register.</li>
                <li><strong>Business Information:</strong> Business name, address, category, description, contact details, trade license number, and photos when listing a business.</li>
                <li><strong>Reviews and Ratings:</strong> Content you post including reviews, ratings, photos, and responses.</li>
                <li><strong>Communications:</strong> Messages sent through our contact forms, support tickets, or feedback channels.</li>
                <li><strong>Payment Information:</strong> Billing details for premium services, processed securely through our payment partners.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Usage Data:</strong> Pages viewed, searches performed, time spent on pages, and interaction patterns.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and screen resolution.</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address to provide localized search results.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies as described in our Cookie Policy.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To operate, maintain, and improve the BhutanBiz platform</li>
                <li>To verify business listings and maintain directory accuracy</li>
                <li>To personalize your experience and provide relevant search results</li>
                <li>To process transactions and send related notifications</li>
                <li>To communicate important updates, security alerts, and promotional content (with opt-out options)</li>
                <li>To generate anonymized analytics and market insights for our industry reports</li>
                <li>To detect, prevent, and address fraud, security issues, and technical problems</li>
                <li>To comply with legal obligations under Bhutanese law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BhutanBiz does not sell your personal information. We share data only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Public Business Profiles:</strong> Business listings are publicly visible by design. Business owners control what information appears on their profiles.</li>
                <li><strong>Service Providers:</strong> We work with trusted partners for hosting, analytics, payment processing, and email delivery, all bound by strict data processing agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by Bhutanese law, court orders, or government agencies with proper legal authority.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred with appropriate notice.</li>
                <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated statistics that cannot identify individual users.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-leading security measures to protect your data, including AES-256 encryption at rest, TLS 1.3 encryption in transit, regular security audits, intrusion detection systems, and access controls with multi-factor authentication for administrative access. Our primary infrastructure is hosted within Bhutan to ensure data sovereignty. We conduct annual penetration testing and maintain an incident response plan in compliance with best practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Export:</strong> Download your data in a portable, machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request that we limit processing of your data in certain circumstances</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, contact us at privacy@bhutanbiz.com. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal data for as long as your account is active or as needed to provide our services. Business listing data is retained for the duration of the listing plus 12 months after removal. After account deletion, we retain anonymized data for analytics purposes. Financial records are retained for 7 years as required by Bhutanese tax law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                While our primary data storage is in Bhutan, some service providers may process data outside Bhutan. In such cases, we ensure appropriate safeguards are in place, including contractual protections and security requirements that meet or exceed Bhutanese data protection standards.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                BhutanBiz is not intended for children under 18. We do not knowingly collect personal information from children. If we discover that we have collected data from a child under 18, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For privacy-related inquiries or to exercise your data rights:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium">BhutanBiz Privacy Team</p>
                <p className="text-gray-600 text-sm mt-1">Email: privacy@bhutanbiz.com</p>
                <p className="text-gray-600 text-sm">Phone: +975-2-334455</p>
                <p className="text-gray-600 text-sm">Norzin Lam, Thimphu, Bhutan</p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Terms of Service', href: '/legal/terms', icon: FileText },
            { name: 'Cookie Policy', href: '/legal/cookies', icon: FileText },
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
