import Link from 'next/link';
import {
  BookOpen,
  Clock,
  ArrowRight,
  User,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { getContentByType } from '@/data/content';

export default function GuidesListingPage() {
  const guides = getContentByType('guide');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/20 rounded-2xl mb-6">
            <BookOpen className="w-7 h-7 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Business Guides
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Step-by-step guides to help you navigate business registration,
            compliance, and growth opportunities in Bhutan.
          </p>
          {/* Breadcrumbs */}
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/content" className="hover:text-white transition-colors">
              Content
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Guides</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-gray-500 mb-8">
          {guides.length} guide{guides.length !== 1 ? 's' : ''} available
        </p>

        {guides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/content/${guide.slug}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-200"
              >
                {/* Green top strip */}
                <div className="h-1 bg-emerald-500" />

                <div className="p-6">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full px-2.5 py-0.5">
                    <BookOpen className="w-3 h-3" />
                    Guide
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-emerald-600 leading-snug line-clamp-2 transition-colors">
                    {guide.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {guide.excerpt}
                  </p>

                  {/* Meta row */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime} min read
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {guide.author}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>

                  {/* Category */}
                  <div className="mt-3">
                    <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
                      {guide.category}
                    </span>
                  </div>

                  {/* Read more */}
                  <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Guide
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
              No guides available yet
            </h3>
            <p className="text-gray-500">
              Check back soon for expert guides on doing business in Bhutan.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Looking for More Content?
          </h2>
          <p className="mt-3 text-emerald-100 max-w-xl mx-auto">
            Explore our full library of reports, rankings, articles, and
            explainers to stay ahead in Bhutan&apos;s business landscape.
          </p>
          <Link
            href="/content"
            className="mt-6 inline-flex items-center px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Browse All Content
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
