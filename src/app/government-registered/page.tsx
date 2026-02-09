import Link from 'next/link';
import { Shield, Star, MapPin, CheckCircle, Building2 } from 'lucide-react';
import { getGovernmentBusinesses } from '@/data/businesses';

export const metadata = { title: 'Government-Registered Businesses' };

export default function GovernmentRegisteredPage() {
  const govBiz = getGovernmentBusinesses();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-purple-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Government Registered</span></div>
          <div className="flex items-center gap-3"><Shield className="w-8 h-8" /><h1 className="text-3xl font-bold">Government-Registered Businesses</h1></div>
          <p className="mt-2 text-purple-200">Official government entities and publicly registered organizations in Bhutan</p>
          <div className="mt-4 px-4 py-2 bg-white/10 rounded-lg inline-block"><span className="font-bold text-xl">{govBiz.length}</span> <span className="text-purple-200">registered entities</span></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {govBiz.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">Govt</span></div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}</span></div>
                <span className="text-sm font-bold text-purple-600">{biz.trustScore}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
