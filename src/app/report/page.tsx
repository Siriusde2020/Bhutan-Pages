'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, Send, CheckCircle, ChevronDown, Shield, Clock, MessageSquare } from 'lucide-react';

const issueTypes = [
  'Incorrect Business Information',
  'Business No Longer Exists',
  'Duplicate Listing',
  'Spam or Fraudulent Listing',
  'Inappropriate Review',
  'Copyright or Trademark Issue',
  'Technical Bug or Error',
  'Accessibility Issue',
  'Privacy Concern',
  'Other',
];

export default function ReportIssuePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'Incorrect Business Information',
    url: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <AlertCircle className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Report an Issue</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Help us maintain the quality and accuracy of BhutanBiz. Report incorrect information, technical issues, or policy violations.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: 'Confidential', desc: 'Your report is handled with strict confidentiality' },
            { icon: Clock, title: 'Fast Response', desc: 'We review all reports within 48 hours' },
            { icon: MessageSquare, title: 'Follow-Up', desc: 'You will receive email updates on your report status' },
          ].map((badge) => (
            <div key={badge.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <badge.icon className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{badge.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-2">
                Thank you for helping us improve BhutanBiz, {formData.name}. We have received your report and will review it within 48 hours.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                A confirmation has been sent to {formData.email}. You will receive status updates as we investigate.
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', issueType: 'Incorrect Business Information', url: '', description: '' });
                  }}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Submit Another Report
                </button>
                <Link href="/" className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit a Report</h2>
              <p className="text-gray-500 mb-8">
                Please provide as much detail as possible so we can investigate and resolve the issue quickly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Karma Dorji"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="karma@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Issue Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
                    >
                      {issueTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Page URL <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="https://bhutanbiz.com/business/..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe the issue in detail. Include what you expected to see vs. what you actually see..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Submit Report
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
