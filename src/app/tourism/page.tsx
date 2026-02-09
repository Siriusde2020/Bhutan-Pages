'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Star, CheckCircle, Mountain, Hotel, Map, Compass } from 'lucide-react';
import { getBusinessesByCategory } from '@/data/businesses';

export default function TourismPage() {
  const [tab, setTab] = useState('all');
  const hotels = getBusinessesByCategory('cat-1');
  const tours = getBusinessesByCategory('cat-8');
  const all = [...hotels, ...tours];
  const displayed = tab === 'hotels' ? hotels : tab === 'tours' ? tours : all;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-sky-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Tourism</span></div>
          <div className="flex items-center gap-3"><Mountain className="w-8 h-8" /><h1 className="text-3xl font-bold">Tourism & Hospitality Directory</h1></div>
          <p className="mt-2 text-sky-200">Hotels, resorts, tour operators, and travel services across Bhutan</p>
          <div className="flex gap-4 mt-6">
            <div className="px-4 py-2 bg-white/10 rounded-lg"><Hotel className="w-4 h-4 inline mr-1" /><span className="font-bold">{hotels.length}</span> Hotels</div>
            <div className="px-4 py-2 bg-white/10 rounded-lg"><Compass className="w-4 h-4 inline mr-1" /><span className="font-bold">{tours.length}</span> Tour Operators</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-6">
          {[{ key: 'all', label: 'All' }, { key: 'hotels', label: 'Hotels & Accommodation' }, { key: 'tours', label: 'Tour & Travel' }].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === t.key ? 'bg-sky-600 text-white' : 'bg-white border text-gray-600'}`}>{t.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
              {biz.isPremium && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-2 inline-block">Premium</span>}
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500">({biz.reviewCount})</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}</span></div>
              <div className="mt-2"><span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded capitalize">{biz.pricingTier}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
