'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Clock,
  User,
  Calendar,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ArrowRight,
  BookOpen,
  Building2,
  Star,
  MapPin,
  Shield,
  AlertTriangle,
} from 'lucide-react';
import { getContentBySlug, contentPages } from '@/data/content';
import { businesses } from '@/data/businesses';

export default function ContentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = getContentBySlug(slug);

  if (!content) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-orange-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Content Not Found
          </h1>
          <p className="text-gray-500 mb-6">
            The article you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/content"
              className="inline-flex items-center px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Browse All Content
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedBusinesses = content.relatedBusinessIds
    .map((id) => businesses.find((b) => b.id === id))
    .filter(Boolean);

  const relatedArticles = contentPages
    .filter((c) => c.id !== content.id && (c.category === content.category || c.type === content.type))
    .slice(0, 3);

  const typeBadgeColors: Record<string, string> = {
    guide: 'bg-emerald-50 text-emerald-700',
    report: 'bg-blue-50 text-blue-700',
    ranking: 'bg-amber-50 text-amber-700',
    article: 'bg-purple-50 text-purple-700',
    explainer: 'bg-rose-50 text-rose-700',
    case_study: 'bg-teal-50 text-teal-700',
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/content" className="hover:text-white transition-colors">
              Content
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 capitalize">{content.type}s</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white line-clamp-1">{content.title}</span>
          </nav>

          {/* Type badge */}
          <span
            className={`inline-flex items-center text-xs font-medium rounded-full px-3 py-1 capitalize ${
              typeBadgeColors[content.type] || 'bg-gray-50 text-gray-700'
            }`}
          >
            {content.type}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {content.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4 text-gray-400" />
              {content.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              {new Date(content.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-400" />
              {content.readTime} min read
            </span>
          </div>
          {content.updatedAt && content.updatedAt !== content.publishedAt && (
            <p className="mt-2 text-xs text-gray-500">
              Updated:{' '}
              {new Date(content.updatedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10">
              {/* Excerpt */}
              <div className="border-l-4 border-orange-500 pl-5 mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {content.excerpt}
                </p>
              </div>

              {/* Content Body */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base">
                  {content.content}
                </p>

                {content.type === 'guide' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                      Key Takeaways
                    </h2>
                    <ul className="space-y-3">
                      {content.tags.slice(0, 4).map((tag) => (
                        <li key={tag} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                            <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                          </div>
                          <span className="text-gray-700 capitalize">
                            Important aspects of {tag} in Bhutan&apos;s business ecosystem
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {content.type === 'report' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                      Report Highlights
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Category', value: content.category },
                        { label: 'Published', value: new Date(content.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
                        { label: 'Reading Time', value: `${content.readTime} minutes` },
                        { label: 'Related Businesses', value: `${content.relatedBusinessIds.length} featured` },
                      ].map((item) => (
                        <div key={item.label} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-gray-900">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {content.type === 'ranking' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                      Ranking Criteria
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our rankings are based on a comprehensive evaluation of customer
                      reviews, service quality, years of operation, industry certifications,
                      and overall trustworthiness. Businesses are reviewed and updated
                      regularly to ensure accuracy.
                    </p>
                  </>
                )}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {content.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/search?q=${encodeURIComponent(tag)}`}
                      className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-3 py-1 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" />
                    Share:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          '_blank'
                        )
                      }
                      className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(content.title)}`,
                          '_blank'
                        )
                      }
                      className="w-9 h-9 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(content.title)}`,
                          '_blank'
                        )
                      }
                      className="w-9 h-9 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="w-9 h-9 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Copy link"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/content/${article.slug}`}
                      className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-200"
                    >
                      <div
                        className={`h-1 ${
                          article.type === 'guide'
                            ? 'bg-emerald-500'
                            : article.type === 'report'
                            ? 'bg-blue-500'
                            : article.type === 'ranking'
                            ? 'bg-amber-500'
                            : article.type === 'article'
                            ? 'bg-purple-500'
                            : 'bg-rose-500'
                        }`}
                      />
                      <div className="p-5">
                        <span
                          className={`inline-flex items-center text-xs font-medium rounded-full px-2 py-0.5 capitalize ${
                            typeBadgeColors[article.type] || 'bg-gray-50 text-gray-700'
                          }`}
                        >
                          {article.type}
                        </span>
                        <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-orange-600 line-clamp-2 transition-colors">
                          {article.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            {/* Related Businesses */}
            {relatedBusinesses.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  Related Businesses
                </h3>
                <div className="space-y-4">
                  {relatedBusinesses.map((biz) =>
                    biz ? (
                      <Link
                        key={biz.id}
                        href={`/businesses/${biz.slug}`}
                        className="group block"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                              {biz.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < Math.round(biz.rating)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'fill-gray-200 text-gray-200'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-400">
                                ({biz.reviewCount})
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                              <MapPin className="w-3 h-3" />
                              {biz.dzongkhag}
                              {biz.verificationStatus === 'verified' && (
                                <Shield className="w-3 h-3 text-blue-500 ml-1" />
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}

            {/* Content Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Browse by Type
              </h3>
              <nav className="space-y-2">
                {[
                  { label: 'All Content', href: '/content', type: 'all' },
                  { label: 'Guides', href: '/content/guides', type: 'guide' },
                  { label: 'Reports', href: '/content?filter=report', type: 'report' },
                  { label: 'Rankings', href: '/content?filter=ranking', type: 'ranking' },
                  { label: 'Articles', href: '/content?filter=article', type: 'article' },
                ].map((item) => (
                  <Link
                    key={item.type}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      content.type === item.type
                        ? 'bg-orange-50 text-orange-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-white">
                List Your Business
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Get featured in our guides and reach more customers.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Get Started
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
