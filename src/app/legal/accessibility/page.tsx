import Link from 'next/link';
import { Accessibility, FileText, ArrowRight, Monitor, Keyboard, Eye, Volume2, Globe, CheckCircle } from 'lucide-react';

export default function AccessibilityPage() {
  const lastUpdated = 'January 15, 2026';

  const features = [
    { icon: Keyboard, title: 'Keyboard Navigation', desc: 'Full keyboard accessibility for all interactive elements and navigation' },
    { icon: Eye, title: 'Screen Reader Support', desc: 'ARIA labels and semantic HTML for comprehensive screen reader compatibility' },
    { icon: Monitor, title: 'Responsive Design', desc: 'Optimized experience across desktop, tablet, and mobile devices' },
    { icon: Volume2, title: 'Text Alternatives', desc: 'Alt text for images and transcripts for multimedia content' },
    { icon: Globe, title: 'Multi-Language', desc: 'Support for English and Dzongkha with clear, readable typography' },
    { icon: CheckCircle, title: 'Color Contrast', desc: 'WCAG AA compliant color contrast ratios throughout the platform' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Accessibility className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Accessibility Statement</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            BhutanBiz is committed to ensuring digital accessibility for all users, including people with disabilities. We continuously work to improve the accessibility of our platform.
          </p>
          <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Accessibility Features Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                BhutanBiz is dedicated to providing an inclusive experience for everyone. As Bhutan&apos;s leading business directory, we recognize the importance of making business information accessible to all citizens and visitors, regardless of ability. Our platform is designed and developed following the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conformance Status</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BhutanBiz aims to conform to WCAG 2.1 Level AA. We have implemented the following measures to ensure accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Accessibility is integrated into our development process and design system</li>
                <li>Regular automated and manual accessibility audits are conducted</li>
                <li>Team members receive accessibility training as part of onboarding</li>
                <li>We test with assistive technologies including NVDA, VoiceOver, and JAWS</li>
                <li>User feedback on accessibility is actively sought and addressed</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BhutanBiz relies on the following technologies for accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Semantic HTML5 with proper heading hierarchy and landmark regions</li>
                <li>WAI-ARIA attributes for dynamic content and custom components</li>
                <li>CSS with relative units for text resizing up to 200% without loss of functionality</li>
                <li>Skip navigation links for keyboard users</li>
                <li>Focus management for single-page application navigation</li>
                <li>Color contrast ratios meeting or exceeding 4.5:1 for normal text and 3:1 for large text</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Known Limitations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we work toward full accessibility, we acknowledge the following areas for improvement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Some older business listing images may lack descriptive alt text; we are progressively updating these</li>
                <li>Interactive maps may have limited screen reader support; text-based location information is always provided as an alternative</li>
                <li>Some third-party embedded content may not meet our accessibility standards</li>
                <li>PDF documents in the Resources section are being converted to accessible formats</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Assistive Technology Compatibility</h2>
              <p className="text-gray-600 leading-relaxed">
                BhutanBiz is designed to be compatible with the following assistive technologies: NVDA and JAWS screen readers on Windows, VoiceOver on macOS and iOS, TalkBack on Android, voice recognition software such as Dragon NaturallySpeaking, and browser zoom functionality up to 400%. We test across multiple browsers including Chrome, Firefox, Safari, and Edge.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Assistance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of BhutanBiz. If you encounter any accessibility barriers or need assistance, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium">Accessibility Team</p>
                <p className="text-gray-600 text-sm mt-1">Email: accessibility@bhutanbiz.com</p>
                <p className="text-gray-600 text-sm">Phone: +975-2-334455</p>
                <p className="text-gray-600 text-sm mt-2">We aim to respond to accessibility feedback within 2 business days and resolve issues within 10 business days.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h2>
              <p className="text-gray-600 leading-relaxed">
                Accessibility is an ongoing effort. We conduct quarterly accessibility audits, incorporate accessibility into our feature development lifecycle, and work with disability advocacy organizations in Bhutan to ensure our platform serves everyone effectively. Our goal is to be the most accessible business platform in the region.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Terms of Service', href: '/legal/terms', icon: FileText },
            { name: 'Report an Issue', href: '/report', icon: FileText },
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
