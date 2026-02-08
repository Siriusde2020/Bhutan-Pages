'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  BarChart3,
  Trophy,
  Newspaper,
  HelpCircle,
  Clock,
  User,
  Calendar,
  ArrowRight,
  Search,
} from 'lucide-react';
import { contentPages } from '@/data/content';

type ContentFilter = 'all' | 'guide' | 'report' | 'ranking' | 'article' | 'explainer';

const filterTabs: { key: ContentFilter; label: string; icon: React.ElementType }[] = [
  { key: 'all', label: 'All', icon: BookOpen },
  { key: 'guide', label: 'Guides', icon: FileText },
  { key: 'report', label: 'Reports', icon: BarChart3 },
  { key: 'ranking', label: 'Rankings', icon: Trophy },
  { key: 'article', label: 'Articles', icon: Newspaper },
  { key: 'explainer', label: 'Explainers', icon: HelpCircle },
];

const typeBadgeColors: Record<string, string> = {
  guide: 'bg-emerald-50 text-emerald-700',
  report: 'bg-blue-50 text-blue-700',
  ranking: 'bg-amber-50 text-amber-700',
  article: 'bg-purple-50 text-purple-700',
  explainer: 'bg-rose-50 text-rose-700',
  case_study: 'bg-teal-50 text-teal-700',
};

export default function ContentHubPage() {
  const [activeFilter, setActiveFilter] = useState<ContentFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = contentPages.filter((page) => {
    const matchesFilter = activeFilter === 'all' || page.type === activeFilter;
    const matchesSearch =
      !searchQuery ||
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Guides, Reports &amp; Insights
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Expert content to help you navigate Bhutan&apos;s business landscape.
            From startup guides to industry reports and curated rankings.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, reports, articles..."
                className="ml-3 w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-200 hover:text-orange-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredContent.length} of {contentPages.length} articles
        </p>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((page) => (
              <Link
                key={page.id}
                href={`/content/${page.slug}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-200"
              >
                {/* Color strip at top */}
                <div
                  className={`h-1 ${
                    page.type === 'guide'
                      ? 'bg-emerald-500'
                      : page.type === 'report'
                      ? 'bg-blue-500'
                      : page.type === 'ranking'
                      ? 'bg-amber-500'
                      : page.type === 'article'
                      ? 'bg-purple-500'
                      : 'bg-rose-500'
                  }`}
                />

                <div className="p-6">
                  {/* Type badge */}
                  <span
                    className={`inline-flex items-center text-xs font-medium rounded-full px-2.5 py-0.5 capitalize ${
                      typeBadgeColors[page.type] || 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    {page.type}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-orange-600 leading-snug line-clamp-2 transition-colors">
                    {page.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {page.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {page.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {page.readTime} min
                    </span>
                  </div>

                  {/* Date */}
                  <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(page.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>

                  {/* Category tag */}
                  <div className="mt-3">
                    <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
                      {page.category}
                    </span>
                  </div>

                  {/* Read more */}
                  <div className="mt-4 flex items-center text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No content found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filter or search term.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="text-orange-600 hover:text-orange-700 font-medium text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
