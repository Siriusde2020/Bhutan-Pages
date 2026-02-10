import Link from 'next/link';
import { AlertTriangle, FileText, ArrowRight } from 'lucide-react';

export default function DisclaimerPage() {
  const lastUpdated = 'January 15, 2026';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <AlertTriangle className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Disclaimer</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Important information about the use of BhutanBiz platform and the limitations of our services.
          </p>
          <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The information provided on BhutanBiz (&quot;the Platform&quot;) is for general informational purposes only. While we strive to keep the information accurate, current, and comprehensive, BhutanBiz Pvt. Ltd. makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Platform or the information, products, services, or related graphics contained on the Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Listing Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Business listings on BhutanBiz are provided by business owners and third-party data sources. While we verify business registrations against official government records and conduct periodic accuracy checks, we cannot guarantee that all business information is current or accurate at all times. Business hours, services, pricing, and availability may change without notice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We recommend contacting businesses directly to confirm details before visiting or engaging their services. BhutanBiz is not responsible for any discrepancies between listed information and actual business operations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User-Generated Content</h2>
              <p className="text-gray-600 leading-relaxed">
                Reviews, ratings, comments, and other user-generated content on BhutanBiz represent the opinions and experiences of individual users and do not reflect the views or endorsement of BhutanBiz Pvt. Ltd. While we moderate content to remove fraudulent, defamatory, or inappropriate material, we do not verify the accuracy of individual reviews. Users should exercise their own judgment when relying on reviews.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Professional Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                Content on the Platform, including our Business Guides, Industry Reports, and blog articles, is provided for informational purposes only and does not constitute professional business, legal, financial, or investment advice. For specific advice, please consult qualified professionals. Information about government regulations, licensing requirements, and business procedures may change and should be verified with the relevant authorities.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
              <p className="text-gray-600 leading-relaxed">
                The Platform may contain links to external websites that are not operated or controlled by BhutanBiz. We have no control over the content, privacy practices, or availability of third-party sites. The inclusion of any link does not imply endorsement or recommendation. We encourage users to review the terms and privacy policies of external sites before providing personal information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Data and Analytics</h2>
              <p className="text-gray-600 leading-relaxed">
                Market reports, industry analytics, and statistical data published on BhutanBiz are based on available information and our internal analysis methodologies. These are provided as reference materials and should not be the sole basis for business or investment decisions. Past performance indicators do not guarantee future results. We recommend cross-referencing our data with official sources such as the National Statistics Bureau and Royal Monetary Authority.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall BhutanBiz Pvt. Ltd., its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the Platform or any content therein.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Endorsements</h2>
              <p className="text-gray-600 leading-relaxed">
                The listing of a business on BhutanBiz does not constitute an endorsement or recommendation by BhutanBiz Pvt. Ltd. Featured placements, premium listings, and sponsored content are clearly marked. The inclusion of government partners and institutional logos is with permission and indicates collaborative relationships, not endorsement of specific businesses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this disclaimer, please contact:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium">BhutanBiz Pvt. Ltd.</p>
                <p className="text-gray-600 text-sm mt-1">Email: legal@bhutanbiz.com</p>
                <p className="text-gray-600 text-sm">Norzin Lam, Thimphu, Bhutan</p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Terms of Service', href: '/legal/terms', icon: FileText },
            { name: 'Privacy Policy', href: '/legal/privacy', icon: FileText },
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
