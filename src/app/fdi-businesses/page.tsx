import Link from 'next/link';
import { TrendingUp, Star, MapPin, Globe, Building2 } from 'lucide-react';
import { getFdiBusinesses } from '@/data/businesses';

export const metadata = { title: 'Foreign Investment (FDI) Businesses in Bhutan' };

export default function FdiBusinessesPage() {
  const fdiBiz = getFdiBusinesses();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">FDI Businesses</span></div>
          <div className="flex items-center gap-3"><TrendingUp className="w-8 h-8" /><h1 className="text-3xl font-bold">Foreign Investment (FDI) Businesses</h1></div>
          <p className="mt-2 text-blue-200">Foreign-owned and joint venture companies registered in Bhutan</p>
          <div className="flex gap-6 mt-6">
            <div className="px-4 py-2 bg-white/10 rounded-lg"><span className="font-bold text-xl">{fdiBiz.length}</span> <span className="text-blue-200">FDI entities</span></div>
            <div className="px-4 py-2 bg-white/10 rounded-lg"><span className="font-bold text-xl">{new Set(fdiBiz.map(b => b.categoryId)).size}</span> <span className="text-blue-200">sectors</span></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fdiBiz.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><Globe className="w-4 h-4 text-blue-600" /></div>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded capitalize mb-2 inline-block">{biz.ownershipType.replace(/_/g, ' ')}</span>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}, {biz.dzongkhag}</span></div>
            </Link>
          ))}
        </div>
        {fdiBiz.length === 0 && <div className="text-center py-16"><Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No FDI businesses listed yet.</p></div>}
      </div>
    </div>
  );
}
