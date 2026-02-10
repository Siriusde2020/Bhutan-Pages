'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Star,
  Shield,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  Briefcase,
  Calendar,
  Tag,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Globe,
  Award,
  Zap,
  Phone,
  Mail,
  Clock,
  Heart,
  BookOpen,
  DollarSign,
} from 'lucide-react';

import { getFeaturedCategories } from '@/data/categories';
import { getTopDzongkhags } from '@/data/locations';
import {
  getTopRatedBusinesses,
  getFeaturedBusinesses,
  getNewBusinesses,
} from '@/data/businesses';
import {
  sampleDeals,
  sampleJobs,
  sampleEvents,
  contentPages,
} from '@/data/content';
import { platformAnalytics } from '@/data/analytics';

export default function HomePage() {
  const [heroSearch, setHeroSearch] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(heroSearch.trim())}`;
    }
  };

  const featuredCategories = getFeaturedCategories();
  const topDzongkhags = getTopDzongkhags(6);
  const topRatedBusinesses = getTopRatedBusinesses(6);
  const featuredBusinesses = getFeaturedBusinesses();
  const newBusinesses = getNewBusinesses(6);

  const popularSearches = [
    'Hotels',
    'Restaurants',
    'Lawyers',
    'Construction',
    'Tour Operators',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Discover Bhutan&apos;s{' '}
              <span className="text-orange-400">Businesses</span> &amp;{' '}
              <span className="text-orange-400">Services</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The most comprehensive directory of{' '}
              <span className="text-white font-semibold">8,900+</span> verified
              businesses across all{' '}
              <span className="text-white font-semibold">20 Dzongkhags</span> of
              Bhutan
            </p>

            {/* Search bar */}
            <form onSubmit={handleHeroSearch} className="mt-10 max-w-2xl mx-auto">
              <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center flex-1 px-4 py-4">
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Search businesses, services, or locations..."
                    className="ml-3 w-full text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  />
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 transition-colors duration-200">
                  Search
                </button>
              </div>
            </form>

            {/* Popular searches */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-gray-400 text-sm">Popular:</span>
              {popularSearches.map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 text-sm rounded-full border border-white/10 transition-colors duration-200"
                >
                  {term}
                </Link>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/businesses"
                className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-200"
              >
                Browse All Businesses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/list-business"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-200"
              >
                List Your Business
                <Building2 className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — STATS BAR
          ================================================================ */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Building2,
                value: '8,900+',
                label: 'Businesses',
              },
              {
                icon: MapPin,
                value: '20',
                label: 'Dzongkhags',
              },
              {
                icon: Shield,
                value: '3,400+',
                label: 'Verified',
              },
              {
                icon: Star,
                value: '23,000+',
                label: 'Reviews',
              },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — FEATURED CATEGORIES
          ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore by Category
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Browse businesses across 16 major industry categories spanning every
            sector of Bhutan&apos;s economy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group flex items-start gap-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md p-5 transition-all duration-200"
              style={{ borderLeftWidth: '4px', borderLeftColor: cat.color }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${cat.color}15` }}
              >
                <Building2
                  className="w-6 h-6"
                  style={{ color: cat.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
                    {cat.businessCount} businesses
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            View All Categories
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — TOP-RATED BUSINESSES
          ================================================================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top-Rated Businesses in Bhutan
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              Highest-rated businesses trusted by thousands of customers across
              the kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedBusinesses.map((biz) => (
              <div
                key={biz.id}
                className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {biz.name}
                    </h3>
                    {biz.verificationStatus === 'verified' && (
                      <span className="flex-shrink-0 ml-2 inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5">
                        <Shield className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {biz.shortDescription}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(biz.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {biz.rating}
                    </span>
                    <span className="text-sm text-gray-400">
                      ({biz.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Location & category */}
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {biz.dzongkhag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-gray-400" />
                      {biz.categoryId.replace('cat-', 'Category ')}
                    </span>
                  </div>

                  <Link
                    href={`/businesses/${biz.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    View Profile
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/businesses?sort=top-rated"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              View All Top Rated
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — BROWSE BY LOCATION
          ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse by Dzongkhag
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore businesses in all 20 districts of Bhutan, from the capital
            Thimphu to remote Gasa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topDzongkhags.map((dz) => (
            <Link
              key={dz.id}
              href={`/locations/${dz.slug}`}
              className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md p-6 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {dz.name}
                </h3>
                <span className="flex-shrink-0 ml-2 inline-flex items-center text-xs font-bold bg-orange-50 text-orange-600 rounded-full px-2.5 py-1">
                  {dz.businessCount}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                {dz.description}
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  Capital: {dz.capital}
                </span>
              </div>

              <div className="mt-3 flex items-center text-sm text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore businesses
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-200 h-64 flex items-center justify-center">
          <div className="text-center">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">
              Interactive Map of Bhutan
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Click on a dzongkhag to explore businesses
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            View All Locations
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — DEALS & OFFERS
          ================================================================ */}
      {sampleDeals.length > 0 && (
        <section className="bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Deals &amp; Offers
              </h2>
              <p className="mt-3 text-lg text-orange-100 max-w-2xl mx-auto">
                Exclusive discounts and special offers from top businesses across
                Bhutan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sampleDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-200"
                >
                  {deal.discountPercent && (
                    <span className="inline-flex items-center text-xs font-bold bg-red-500 text-white rounded-full px-2.5 py-1 mb-3">
                      {deal.discountPercent}% OFF
                    </span>
                  )}
                  {!deal.discountPercent && deal.dealPrice && (
                    <span className="inline-flex items-center text-xs font-bold bg-green-500 text-white rounded-full px-2.5 py-1 mb-3">
                      Special Price
                    </span>
                  )}

                  <h3 className="font-semibold text-gray-900 leading-snug">
                    {deal.title}
                  </h3>

                  <p className="mt-1 text-sm text-orange-600 font-medium">
                    {deal.businessName}
                  </p>

                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {deal.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      Valid till{' '}
                      {new Date(deal.endDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          SECTION 7 — LATEST JOBS
          ================================================================ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Jobs
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Career opportunities from leading businesses across Bhutan
              </p>
            </div>
            <Link
              href="/jobs"
              className="mt-4 sm:mt-0 inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              View All Jobs
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sampleJobs.slice(0, 4).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md p-6 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-orange-600 font-medium">
                      {job.businessName}
                    </p>
                  </div>
                  <Briefcase className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                    {job.salary}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    Deadline:{' '}
                    {new Date(job.deadline).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — GUIDES & INSIGHTS
          ================================================================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Guides &amp; Insights
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Expert guides, rankings, and reports to help you navigate
                Bhutan&apos;s business landscape
              </p>
            </div>
            <Link
              href="/resources/guides"
              className="mt-4 sm:mt-0 inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              View All Guides
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contentPages.slice(0, 4).map((page) => (
              <Link
                key={page.id}
                href={`/content/${page.slug}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-200"
              >
                <div className="p-5">
                  <span className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 rounded-full px-2.5 py-0.5 capitalize">
                    {page.type}
                  </span>

                  <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-600 leading-snug line-clamp-2 transition-colors">
                    {page.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {page.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {page.readTime} min read
                    </span>
                    <span>{page.author}</span>
                  </div>

                  <div className="mt-2">
                    <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">
                      {page.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9 — FOR BUSINESS OWNERS CTA
          ================================================================ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Grow Your Business with{' '}
                <span className="text-orange-500">BhutanBiz</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Join thousands of Bhutanese businesses already benefiting from
                increased visibility and customer reach.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    text: 'Get discovered by thousands of potential customers searching online',
                    icon: Search,
                  },
                  {
                    text: 'Build trust with verified business profiles and customer reviews',
                    icon: Shield,
                  },
                  {
                    text: 'Attract customers with deals, promotions, and rich business content',
                    icon: Users,
                  },
                  {
                    text: 'Access detailed analytics on profile views, leads, and engagement',
                    icon: BarChart3,
                  },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/list-business"
                  className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-200"
                >
                  List Your Business Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right column — Premium card */}
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-semibold rounded-full px-4 py-1.5 mb-6">
                <Zap className="w-4 h-4" />
                Premium Plan
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">
                Go Premium
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Unlock powerful features to accelerate your business growth and
                stand out from the competition.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Priority placement in search results',
                  'Verified business badge',
                  'Detailed analytics dashboard',
                  'Customer messaging system',
                  'Post deals and job listings',
                  'Remove competitor ads',
                  'SEO-optimized profile',
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-3xl font-bold text-white">
                  Nu. 1,500
                </span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>

              <Link
                href="/pricing"
                className="mt-6 w-full inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Upgrade to Premium
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 10 — DATA INTELLIGENCE
          ================================================================ */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bhutan&apos;s Business Intelligence Platform
            </h2>
            <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
              Actionable data and analytics powering better decisions for
              businesses, government, and investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* For Businesses */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white">For Businesses</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                Data-driven insights to grow your business and outperform
                competition.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Profile views & engagement metrics',
                  'Lead generation tracking',
                  'Competitor benchmarking data',
                  'Customer sentiment analysis',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Government */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">For Government</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                Comprehensive data for policy-making and economic planning.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Business census & registration data',
                  'Sector-wise performance metrics',
                  'Compliance monitoring tools',
                  'Regional economic indicators',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Investors */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">For Investors</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                Market intelligence to identify opportunities and manage risk.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Market sizing & opportunity data',
                  'FDI tracking & analysis',
                  'Growth signals by sector',
                  'Due diligence information',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/resources/reports"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-200"
            >
              Explore Analytics
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 11 — NEWSLETTER
          ================================================================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-2xl mb-6">
            <Mail className="w-7 h-7 text-orange-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stay Updated on Bhutan&apos;s Business Landscape
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Get weekly insights, new business listings, exclusive deals, and
            industry reports delivered to your inbox.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
            <div className="w-full flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-200">
              Subscribe
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Join 5,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
