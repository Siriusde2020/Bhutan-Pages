import Link from 'next/link';
import { Scale, FileText, ArrowRight } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = 'January 15, 2026';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Scale className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using the BhutanBiz platform. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Welcome to BhutanBiz (&quot;Platform&quot;), Bhutan&apos;s premier business directory and intelligence platform operated by BhutanBiz Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the Companies Act of Bhutan and registered with the Ministry of Economic Affairs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing, browsing, or using the BhutanBiz platform at bhutanbiz.com, including all associated subdomains, APIs, mobile applications, and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>&quot;User&quot;</strong> refers to any individual or entity accessing the Platform.</li>
                <li><strong>&quot;Business Owner&quot;</strong> refers to a User who lists, claims, or manages a business profile on the Platform.</li>
                <li><strong>&quot;Content&quot;</strong> refers to all text, images, data, reviews, ratings, and other materials on the Platform.</li>
                <li><strong>&quot;Listing&quot;</strong> refers to a business profile page on the Platform.</li>
                <li><strong>&quot;Services&quot;</strong> refers to all features, tools, and functionalities offered through the Platform.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                To access certain features of the Platform, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 18 years old or the age of majority in your jurisdiction to create an account. Accounts registered by automated methods are not permitted. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Business Listings</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Business Owners may list their businesses on the Platform subject to our verification process. All business information submitted must be accurate, truthful, and not misleading. We reserve the right to verify business details against government registries, including the Ministry of Economic Affairs business registration database.
              </p>
              <p className="text-gray-600 leading-relaxed">
                BhutanBiz offers free basic listings as well as premium listing plans with enhanced features. Premium plans are subject to separate subscription terms and pricing as outlined on our Pricing page. Business Owners retain ownership of their submitted content but grant BhutanBiz a non-exclusive, worldwide license to display, distribute, and promote such content on the Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Reviews and Ratings</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Users may submit reviews and ratings for businesses listed on the Platform. Reviews must reflect genuine experiences and must not contain false information, defamatory content, hate speech, or content that violates any applicable law of the Kingdom of Bhutan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to remove reviews that violate these guidelines. Business Owners may respond to reviews but may not offer incentives for positive reviews or attempt to suppress legitimate negative reviews. BhutanBiz uses both automated and manual review moderation to maintain the integrity of our rating system.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The Platform, including its design, logos, trademarks, text, graphics, software, and all other content created by BhutanBiz, is the intellectual property of BhutanBiz Pvt. Ltd. and is protected under the Intellectual Property Act of Bhutan and international intellectual property laws. You may not reproduce, modify, distribute, or create derivative works based on our proprietary content without prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Conduct</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Using the Platform for any unlawful purpose or in violation of Bhutanese law</li>
                <li>Submitting false, misleading, or fraudulent business information</li>
                <li>Attempting to manipulate search rankings, ratings, or reviews</li>
                <li>Scraping, crawling, or using automated tools to extract data from the Platform without authorization</li>
                <li>Impersonating another person, business, or entity</li>
                <li>Uploading malware, viruses, or harmful code</li>
                <li>Interfering with the Platform&apos;s security, infrastructure, or other users&apos; access</li>
                <li>Using the Platform to send unsolicited commercial communications (spam)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Paid services, including premium business listings and advertising, are billed in Bhutanese Ngultrum (BTN) or equivalent USD. Payments may be made via bank transfer, mBOB, or other payment methods available on the Platform. All fees are non-refundable unless otherwise specified in writing. Subscription plans auto-renew unless cancelled at least 7 days before the renewal date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                BhutanBiz provides information on an &quot;as is&quot; basis. While we strive for accuracy, we do not guarantee the completeness, reliability, or accuracy of business listings, reviews, or any other content on the Platform. BhutanBiz shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Bhutan. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Thimphu, Bhutan. The parties agree to first attempt resolution through mediation before pursuing formal legal proceedings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms from time to time. We will notify registered users of material changes via email and post a notice on the Platform. Continued use of the Platform after changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium">BhutanBiz Pvt. Ltd.</p>
                <p className="text-gray-600 text-sm mt-1">Norzin Lam, Above City Mall, Thimphu, Bhutan</p>
                <p className="text-gray-600 text-sm">Email: legal@bhutanbiz.com</p>
                <p className="text-gray-600 text-sm">Phone: +975-2-334455</p>
              </div>
            </section>
          </div>
        </div>

        {/* Related Legal Pages */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Privacy Policy', href: '/legal/privacy', icon: FileText },
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
