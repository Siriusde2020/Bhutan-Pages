'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Star,
  Shield,
  SlidersHorizontal,
  ArrowRight,
  X,
  ChevronDown,
  Tag,
  ArrowUpDown,
  Building2,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { searchBusinesses, businesses } from '@/data/businesses';
import { categories } from '@/data/categories';
import { dzongkhags } from '@/data/locations';

type SortOption = 'relevance' | 'rating' | 'reviews' | 'name';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const popularSearches = [
    'Hotels in Thimphu',
    'Best Restaurants',
    'Tour Operators',
    'Construction Companies',
    'Lawyers',
    'Banks',
    'Coffee Shops',
    'IT Companies',
  ];

  const results = useMemo(() => {
    let filtered = searchTerm ? searchBusinesses(searchTerm) : [...businesses];

    if (selectedCategory) {
      filtered = filtered.filter((b) => b.categoryId === selectedCategory);
    }
    if (selectedLocation) {
      filtered = filtered.filter((b) => b.dzongkhag === selectedLocation);
    }
    if (selectedRating > 0) {
      filtered = filtered.filter((b) => b.rating >= selectedRating);
    }
    if (verifiedOnly) {
      filtered = filtered.filter((b) => b.verificationStatus === 'verified');
    }

    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        if (searchTerm) {
          filtered.sort((a, b) => b.trustScore - a.trustScore);
        }
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedLocation, selectedRating, verifiedOnly, sortBy]);

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedLocation('');
    setSelectedRating(0);
    setVerifiedOnly(false);
    setSortBy('relevance');
  };

  const hasActiveFilters = selectedCategory || selectedLocation || selectedRating > 0 || verifiedOnly;

  const uniqueLocations = Array.from(new Set(businesses.map((b) => b.dzongkhag))).sort();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Search Businesses
          </h1>
          <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center flex-1 px-5 py-4">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search businesses, services, locations..."
                className="ml-3 w-full text-gray-700 placeholder-gray-400 text-base focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    setSearchTerm('');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 transition-colors duration-200"
            >
              Search
            </button>
          </div>

          {/* Popular searches */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-gray-400 text-sm">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  setSearchTerm(term);
                }}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 text-sm rounded-full border border-white/10 transition-colors duration-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            {searchTerm ? (
              <h2 className="text-xl font-bold text-gray-900">
                {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{searchTerm}&rdquo;
              </h2>
            ) : (
              <h2 className="text-xl font-bold text-gray-900">
                All Businesses ({results.length})
              </h2>
            )}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="reviews">Sort: Most Reviews</option>
                <option value="name">Sort: Name A-Z</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-72 flex-shrink-0`}
          >
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() =>
                        setSelectedRating(selectedRating === rating ? 0 : rating)
                      }
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedRating === rating
                          ? 'bg-orange-50 border border-orange-200 text-orange-700'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span>& up</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Filter */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-6 rounded-full transition-colors ${
                        verifiedOnly ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform absolute top-1 ${
                          verifiedOnly ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Verified Only
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Shield className="w-3 h-3" />
                      Government verified
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1 min-w-0">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {results.map((biz) => (
                  <Link
                    key={biz.id}
                    href={`/businesses/${biz.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-1">
                          {biz.name}
                        </h3>
                        {biz.verificationStatus === 'verified' && (
                          <span className="flex-shrink-0 ml-2 inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5">
                            <Shield className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                        {biz.shortDescription}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
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
                        <span className="text-xs text-gray-400">
                          ({biz.reviewCount})
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          {biz.dzongkhag}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Tag className="w-3 h-3 text-gray-400" />
                          {categories.find((c) => c.id === biz.categoryId)?.name || biz.categoryId}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* No Results State */
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  We couldn&apos;t find any businesses matching &ldquo;{searchTerm}&rdquo;
                  {hasActiveFilters && ' with the selected filters'}.
                </p>

                {/* Suggestions */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Did you mean:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Hotels', 'Restaurants', 'Banks', 'Lawyers', 'Tour Operators'].map(
                      (suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            setQuery(suggestion);
                            setSearchTerm(suggestion);
                          }}
                          className="px-4 py-2 bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-orange-600 text-sm rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Popular searches */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Popular searches:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {popularSearches.slice(0, 6).map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setQuery(term);
                          setSearchTerm(term);
                        }}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-orange-50 text-orange-600 text-sm rounded-full hover:bg-orange-100 transition-colors"
                      >
                        <TrendingUp className="w-3 h-3" />
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 inline-flex items-center px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Building2 className="w-10 h-10 text-orange-500 animate-pulse mx-auto mb-3" />
            <p className="text-gray-500">Loading search...</p>
          </div>
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
