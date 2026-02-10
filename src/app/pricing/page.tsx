'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  Building2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Phone,
  Shield,
} from 'lucide-react';
import { pricingPlans } from '@/data/content';

const faqs = [
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be charged the prorated difference for the remaining billing period. When downgrading, the new rate takes effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial for Premium and Gold plans?',
    answer:
      'We offer a 14-day free trial for both Premium and Gold plans. No credit card is required to start your trial. You can explore all features and decide which plan works best for your business.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept payments via Bhutan National Bank transfers, mBoB, Druk PNB mobile banking, and international cards (Visa, Mastercard). Enterprise clients can also pay via invoice with NET-30 terms.',
  },
  {
    question: 'What happens to my listing if I cancel my premium plan?',
    answer:
      'Your business listing will remain active on BhutanBiz, but it will revert to the Free plan features. You will lose priority placement, the verified badge, analytics access, and other premium features. Your reviews and basic information will be preserved.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes! Annual billing comes with a 20% discount compared to monthly billing. For Premium, that means Nu. 14,400/year instead of Nu. 18,000. For Gold, Nu. 48,000/year instead of Nu. 60,000.',
  },
  {
    question: 'How does verification work?',
    answer:
      'Premium and Gold plan members receive a verified badge after submitting their trade license, CID of the business owner, and business registration documents. Our team verifies these within 2-3 business days. Government-registered businesses get an additional government verification badge.',
  },
  {
    question: 'Can I list multiple branches under one plan?',
    answer:
      'The Free and Premium plans cover a single business location. The Gold plan includes up to 3 branch locations. For businesses with more branches, our Enterprise plan offers unlimited branch management with a centralized dashboard.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Free plan users get community support. Premium users have email support with 24-hour response times. Gold users receive priority support via phone and email with 4-hour response times. Enterprise clients get a dedicated account manager and 24/7 support.',
  },
];

const planIcons: Record<string, React.ElementType> = {
  Free: Building2,
  Premium: Zap,
  Gold: Crown,
  Enterprise: Shield,
};

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            From free listings to enterprise-grade solutions, find the perfect
            plan to grow your business on Bhutan&apos;s largest directory.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => {
            const Icon = planIcons[plan.name] || Building2;
            const isEnterprise = plan.name === 'Enterprise';
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border-2 shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl ${
                  isHighlighted
                    ? 'border-orange-500 scale-[1.02] lg:scale-105'
                    : 'border-gray-200'
                }`}
              >
                {/* Most Popular badge */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`p-6 ${isHighlighted ? 'pt-10' : ''}`}>
                  {/* Plan icon and name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-orange-100'
                          : isEnterprise
                          ? 'bg-gray-900'
                          : 'bg-gray-100'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isHighlighted
                            ? 'text-orange-600'
                            : isEnterprise
                            ? 'text-white'
                            : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {isEnterprise ? (
                      <div>
                        <p className="text-3xl font-bold text-gray-900">
                          Custom
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Tailored pricing
                        </p>
                      </div>
                    ) : plan.price === 0 ? (
                      <div>
                        <p className="text-3xl font-bold text-gray-900">Free</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Forever free
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-end gap-1">
                          <span className="text-sm text-gray-500">
                            {plan.currency}
                          </span>
                          <span className="text-3xl font-bold text-gray-900">
                            {plan.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          per {plan.period}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  {isEnterprise ? (
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Sales
                    </Link>
                  ) : (
                    <Link
                      href={`/auth/register?plan=${plan.name.toLowerCase()}`}
                      className={`w-full block text-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                        isHighlighted
                          ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                          : plan.price === 0
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          : 'bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  )}

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isHighlighted
                              ? 'text-orange-500'
                              : 'text-green-500'
                          }`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison note */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold text-gray-900">
              Save 20% with Annual Billing
            </h3>
          </div>
          <p className="text-sm text-gray-600">
            Switch to annual billing and save Nu. 3,600/year on Premium or Nu.
            12,000/year on Gold. Contact our team for annual plan setup.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl mb-4">
              <HelpCircle className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-500">
              Everything you need to know about our plans and pricing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Join thousands of Bhutanese businesses already reaching more
            customers through BhutanBiz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/list-business"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
