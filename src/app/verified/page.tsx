'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, Shield, CheckCircle, Award } from 'lucide-react';
import { getVerifiedBusinesses } from '@/data/businesses';

export default function VerifiedPage() {
  const [badgeFilter, setBadgeFilter] = useState('all');
  const verified = getVerifiedBusinesses();
  const filtered = badgeFilter === 'all' ? verified : verified.filter(b => b.verificationBadge === badgeFilter);
  const badges = [
    { key: 'all', label: 'All Verified', color: 'bg-green-600' },
    { key: 'government', label: 'Government', color: 'bg-purple-600' },
    { key: 'trusted', label: 'Trusted', color: 'bg-green-600' },
    { key: 'premium', label: 'Premium', color: 'bg-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-green-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Verified</span></div>
          <div className="flex items-center gap-3"><Shield className="w-8 h-8" /><h1 className="text-3xl font-bold">Verified & Trusted Businesses</h1></div>
          <p className="mt-2 text-green-100">Businesses verified through government records, documentation, or premium validation</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {badges.map(b => (
            <button key={b.key} onClick={() => setBadgeFilter(b.key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${badgeFilter === b.key ? `${b.color} text-white` : 'bg-white border text-gray-600 hover:border-gray-400'}`}>{b.label}</button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-4">{filtered.length} verified businesses</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><CheckCircle className="w-4 h-4 text-green-600" /></div>
                {biz.verificationBadge && <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${biz.verificationBadge === 'government' ? 'bg-purple-100 text-purple-800' : biz.verificationBadge === 'premium' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{biz.verificationBadge}</span>}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}</span></div>
                <div className="text-right"><span className={`text-sm font-bold ${biz.trustScore >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>{biz.trustScore}</span><span className="text-xs text-gray-500 block">Trust</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
