'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Star, Shield, SlidersHorizontal, Building2, Phone, Globe, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { dzongkhags } from '@/data/locations';
import { Business } from '@/types';

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const perPage = 12;

  // Fetch businesses from API (reads from in-memory store, reflects edits)
  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const res = await fetch('/api/businesses?limit=200');
        if (res.ok) {
          const data = await res.json();
          setBusinesses(data.businesses || []);
        }
      } catch { /* silent */ }
      finally { setLoadingData(false); }
    }
    fetchBusinesses();
  }, []);

  const filtered = useMemo(() => {
    let result = [...businesses];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(b => b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.keywords.some(k => k.toLowerCase().includes(q)));
    }
    if (selectedCategory) result = result.filter(b => b.categoryId === selectedCategory);
    if (selectedLocation) result = result.filter(b => b.dzongkhag.toLowerCase() === selectedLocation.toLowerCase());
    if (minRating > 0) result = result.filter(b => b.rating >= minRating);
    if (verifiedOnly) result = result.filter(b => b.verificationStatus === 'verified');
    switch (sortBy) {
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'reviews': result.sort((a, b) => b.reviewCount - a.reviewCount); break;
      case 'newest': result.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [businesses, searchQuery, selectedCategory, selectedLocation, minRating, verifiedOnly, sortBy]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || '';

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-orange-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Businesses</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Browse Businesses</h1>
          <p className="mt-2 text-gray-600">Discover {businesses.length} businesses across Bhutan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search businesses by name, service, or keyword..." value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white" />
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button onClick={() => { setSelectedCategory(''); setSelectedLocation(''); setMinRating(0); setVerifiedOnly(false); }} className="text-xs text-orange-600 hover:underline">Clear all</button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option value="">All Categories</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select value={selectedLocation} onChange={(e) => { setSelectedLocation(e.target.value); setCurrentPage(1); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option value="">All Dzongkhags</option>
                    {dzongkhags.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                  <div className="flex gap-2">
                    {[0, 3, 3.5, 4, 4.5].map(r => (
                      <button key={r} onClick={() => { setMinRating(r); setCurrentPage(1); }} className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${minRating === r ? 'bg-orange-50 border-orange-300 text-orange-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                        {r === 0 ? 'Any' : `${r}+`}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={verifiedOnly} onChange={(e) => { setVerifiedOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                    <span className="text-sm text-gray-700">Verified only</span>
                    <Shield className="w-3.5 h-3.5 text-green-600" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile filter toggle */}
          <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden fixed bottom-4 right-4 z-40 bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">{filtered.length} businesses found</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                <option value="relevance">Sort: Relevance</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="newest">Newest First</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {paginated.map(biz => (
                <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        {biz.logo ? <img src={biz.logo} alt="" className="w-full h-full object-cover" /> : <span className="text-sm font-bold text-orange-500">{biz.name.charAt(0)}</span>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{biz.name}</h3>
                          {biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{getCategoryName(biz.categoryId)}</p>
                      </div>
                    </div>
                    {biz.isPremium && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Premium</span>}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-semibold text-gray-900">{biz.rating}</span>
                      <span className="text-xs text-gray-500">({biz.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />{biz.city}, {biz.dzongkhag}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-600"><Phone className="w-3 h-3" /> Call</span>
                    {biz.website && <span className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-600"><Globe className="w-3 h-3" /> Website</span>}
                    <span className="ml-auto text-xs font-medium text-orange-600">View Profile →</span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">No businesses found</h3>
                <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or search query</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)} className={`w-10 h-10 rounded-lg text-sm font-medium ${currentPage === p ? 'bg-orange-600 text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>{p}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronRight className="w-4 h-4" /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
