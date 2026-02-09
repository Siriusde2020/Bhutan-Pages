'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ChevronRight, Star, CheckCircle, Building2, Users, Ruler } from 'lucide-react';
import { getDzongkhagBySlug } from '@/data/locations';
import { getBusinessesByDzongkhag } from '@/data/businesses';

export default function DzongkhagDetailPage() {
  const { dzongkhag } = useParams();
  const dz = getDzongkhagBySlug(dzongkhag as string);

  if (!dz) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Dzongkhag Not Found</h1><Link href="/locations" className="text-orange-600 hover:underline">Browse all locations</Link></div></div>;
  }

  const bizList = getBusinessesByDzongkhag(dz.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-3 h-3" />
            <Link href="/locations" className="hover:text-white">Locations</Link><ChevronRight className="w-3 h-3" />
            <span className="text-white">{dz.name}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold">{dz.name}</h1>
          {dz.nameDz && <p className="text-lg text-gray-300 font-dzongkha mt-1">{dz.nameDz}</p>}
          <p className="mt-3 text-gray-300 max-w-3xl">{dz.description}</p>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /><span>Capital: <strong>{dz.capital}</strong></span></div>
            {dz.population && <div className="flex items-center gap-2"><Users className="w-4 h-4 text-orange-400" /><span>Pop: <strong>{dz.population.toLocaleString()}</strong></span></div>}
            {dz.area && <div className="flex items-center gap-2"><Ruler className="w-4 h-4 text-orange-400" /><span><strong>{dz.area.toLocaleString()}</strong> km²</span></div>}
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-orange-400" /><span><strong>{dz.businessCount}</strong> businesses</span></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-bold text-gray-900 mb-3">Gewogs ({dz.gewogs.length})</h3>
              <div className="space-y-2">{dz.gewogs.map(g => (
                <div key={g.id} className="flex items-center justify-between py-1.5 text-sm"><span className="text-gray-700">{g.name}</span><span className="text-xs text-gray-500">{g.businessCount} biz</span></div>
              ))}</div>
            </div>
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-bold text-gray-900 mb-3">Cities & Towns</h3>
              <div className="flex flex-wrap gap-2">{dz.cities.map(c => <span key={c} className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full">{c}</span>)}</div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Businesses in {dz.name} ({bizList.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bizList.map(biz => (
                <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
                  <div className="flex items-center gap-3"><div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span></div><span className="text-xs text-gray-500">{biz.city}</span></div>
                </Link>
              ))}
            </div>
            {bizList.length === 0 && <div className="text-center py-16 bg-white rounded-xl border"><Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No businesses listed in {dz.name} yet.</p></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
