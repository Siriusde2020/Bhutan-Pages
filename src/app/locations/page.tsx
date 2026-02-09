'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Globe, ArrowRight, Users, Building2 } from 'lucide-react';
import { getAllDzongkhags } from '@/data/locations';

export default function LocationsPage() {
  const [sortBy, setSortBy] = useState<'businesses' | 'name'>('businesses');
  const allDz = getAllDzongkhags();
  const sorted = sortBy === 'name' ? [...allDz].sort((a, b) => a.name.localeCompare(b.name)) : allDz;
  const totalBiz = allDz.reduce((s, d) => s + d.businessCount, 0);
  const totalGewogs = allDz.reduce((s, d) => s + d.gewogs.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4"><Link href="/" className="hover:text-orange-600">Home</Link><span>/</span><span className="text-gray-900 font-medium">Locations</span></div>
          <h1 className="text-3xl font-bold text-gray-900">Browse by Dzongkhag</h1>
          <p className="mt-2 text-gray-600">Explore businesses across all 20 districts of Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border p-5 text-center"><div className="text-2xl font-bold text-orange-600">20</div><div className="text-sm text-gray-500">Dzongkhags</div></div>
          <div className="bg-white rounded-xl border p-5 text-center"><div className="text-2xl font-bold text-orange-600">{totalGewogs}</div><div className="text-sm text-gray-500">Gewogs</div></div>
          <div className="bg-white rounded-xl border p-5 text-center"><div className="text-2xl font-bold text-orange-600">{totalBiz.toLocaleString()}</div><div className="text-sm text-gray-500">Businesses</div></div>
        </div>
        {/* Map placeholder */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center mb-8">
          <Globe className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-gray-500 font-medium">Interactive Map Coming Soon</p>
          <p className="text-sm text-gray-400">Explore Bhutan&apos;s 20 dzongkhags visually</p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">{allDz.length} dzongkhags</p>
          <div className="flex gap-2">
            <button onClick={() => setSortBy('businesses')} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${sortBy === 'businesses' ? 'bg-orange-600 text-white' : 'bg-white border text-gray-600'}`}>Most Businesses</button>
            <button onClick={() => setSortBy('name')} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-white border text-gray-600'}`}>A-Z</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sorted.map(dz => (
            <Link key={dz.id} href={`/locations/${dz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{dz.name}</h3>
                  {dz.nameDz && <p className="text-xs text-gray-400 font-dzongkha">{dz.nameDz}</p>}
                </div>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">{dz.businessCount}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{dz.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{dz.capital}</span>
                {dz.population && <span className="flex items-center gap-1"><Users className="w-3 h-3" />{dz.population.toLocaleString()}</span>}
              </div>
              <div className="flex flex-wrap gap-1">
                {dz.cities.slice(0, 3).map(c => <span key={c} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded">{c}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
