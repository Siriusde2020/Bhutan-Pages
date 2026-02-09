'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, MapPin, ChevronRight, CheckCircle, Building2 } from 'lucide-react';
import { getCategoryBySlug } from '@/data/categories';
import { getBusinessesByCategory } from '@/data/businesses';

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug as string);
  const [activeSub, setActiveSub] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1><Link href="/categories" className="text-orange-600 hover:underline">Browse all categories</Link></div></div>;
  }

  const allBusinesses = getBusinessesByCategory(category.id);
  const sorted = [...allBusinesses].sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : sortBy === 'name' ? a.name.localeCompare(b.name) : b.reviewCount - a.reviewCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b" style={{ borderTopColor: category.color, borderTopWidth: '4px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-orange-600">Home</Link><ChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-orange-600">Categories</Link><ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          {category.nameDz && <p className="text-lg text-gray-400 font-dzongkha mt-1">{category.nameDz}</p>}
          <p className="mt-2 text-gray-600">{category.description}</p>
          <p className="mt-2 text-sm text-gray-500">{category.businessCount} businesses in this category</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button onClick={() => setActiveSub('all')} className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeSub === 'all' ? 'bg-orange-600 text-white' : 'bg-white border text-gray-600 hover:border-orange-300'}`}>All ({allBusinesses.length})</button>
          {category.subcategories.map(sub => (
            <button key={sub.id} onClick={() => setActiveSub(sub.id)} className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeSub === sub.id ? 'bg-orange-600 text-white' : 'bg-white border text-gray-600 hover:border-orange-300'}`}>{sub.name}</button>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">{sorted.length} businesses</p>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option value="rating">Highest Rated</option><option value="reviews">Most Reviews</option><option value="name">Name A-Z</option></select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500">({biz.reviewCount})</span></div><div className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3 h-3" />{biz.city}</div></div>
            </Link>
          ))}
        </div>
        {sorted.length === 0 && <div className="text-center py-16"><Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">No businesses found in this category yet.</p></div>}
      </div>
    </div>
  );
}
