'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, CheckCircle, Trophy } from 'lucide-react';
import { getTopRatedBusinesses } from '@/data/businesses';

export default function TopRatedPage() {
  const [minRating, setMinRating] = useState(0);
  const topBiz = getTopRatedBusinesses(50);
  const filtered = minRating > 0 ? topBiz.filter(b => b.rating >= minRating) : topBiz;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-amber-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Top Rated</span></div>
          <div className="flex items-center gap-3"><Trophy className="w-8 h-8" /><h1 className="text-3xl font-bold">Top-Rated Businesses in Bhutan</h1></div>
          <p className="mt-2 text-amber-100">The highest-rated and most-reviewed businesses across the kingdom</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-6">
          {[0, 4.0, 4.5, 4.7].map(r => (
            <button key={r} onClick={() => setMinRating(r)} className={`px-4 py-2 rounded-lg text-sm font-medium ${minRating === r ? 'bg-orange-600 text-white' : 'bg-white border text-gray-600 hover:border-orange-300'}`}>{r === 0 ? 'All' : `${r}+ Stars`}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((biz, idx) => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all relative">
              {idx < 3 && <div className="absolute top-3 right-3 w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center text-sm font-bold">#{idx + 1}</div>}
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.round(biz.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />)}<span className="ml-1 text-sm font-bold text-gray-900">{biz.rating}</span><span className="text-xs text-gray-500">({biz.reviewCount} reviews)</span></div>
              <div className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3 h-3" />{biz.city}, {biz.dzongkhag}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
