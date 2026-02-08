'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Zap,
} from 'lucide-react';

const footerColumns = {
  about: {
    title: 'About',
    links: [
      { name: 'About BhutanBiz', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  categories: {
    title: 'Categories',
    links: [
      { name: 'Hotels & Lodging', href: '/categories/hotels-lodging' },
      { name: 'Restaurants & Cafes', href: '/categories/restaurants-cafes' },
      { name: 'Construction', href: '/categories/construction' },
      { name: 'IT & Technology', href: '/categories/it-technology' },
      { name: 'Health & Wellness', href: '/categories/health-wellness' },
      { name: 'All Categories', href: '/categories' },
    ],
  },
  locations: {
    title: 'Locations',
    links: [
      { name: 'Thimphu', href: '/locations/thimphu' },
      { name: 'Paro', href: '/locations/paro' },
      { name: 'Punakha', href: '/locations/punakha' },
      { name: 'Bumthang', href: '/locations/bumthang' },
      { name: 'Phuentsholing', href: '/locations/chhukha' },
      { name: 'All Dzongkhags', href: '/locations' },
    ],
  },
  forBusiness: {
    title: 'For Business',
    links: [
      { name: 'Add Your Business', href: '/business/add' },
      { name: 'Claim a Listing', href: '/business/claim' },
      { name: 'Advertising', href: '/business/advertise' },
      { name: 'Premium Plans', href: '/pricing' },
      { name: 'Business Dashboard', href: '/dashboard' },
      { name: 'Success Stories', href: '/resources/success-stories' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Business Guides', href: '/resources/guides' },
      { name: 'Industry Reports', href: '/resources/reports' },
      { name: 'Starting a Business', href: '/resources/starting-business' },
      { name: 'FDI in Bhutan', href: '/resources/fdi' },
      { name: 'Events & Fairs', href: '/events' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Disclaimer', href: '/legal/disclaimer' },
      { name: 'Accessibility', href: '/legal/accessibility' },
      { name: 'Report an Issue', href: '/report' },
    ],
  },
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bhutanbiz' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bhutanbiz' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/bhutanbiz' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/bhutanbiz' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@bhutanbiz' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Stay Updated with Bhutan&apos;s Business Landscape
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Get weekly insights, new listings, and business opportunities delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-lg bg-green-900/30 px-4 py-3 text-green-400">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Thank you for subscribing! Check your inbox to confirm.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-[#FF6B00] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e55f00]"
                  >
                    Subscribe
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {Object.values(footerColumns).map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[#FF6B00]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B00]">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="text-[#FF6B00]">Bhutan</span>
                  <span className="text-white">Biz</span>
                </span>
              </Link>
              <span className="hidden text-gray-600 md:inline">|</span>
              <span className="text-xs text-gray-500">
                Powered by Bhutan&apos;s Digital Economy
              </span>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-[#FF6B00] hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Thimphu, Bhutan
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                +975 2 123 456
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 border-t border-gray-800 pt-6 text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} BhutanBiz. All rights reserved. Built with care for the
              Land of the Thunder Dragon.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
