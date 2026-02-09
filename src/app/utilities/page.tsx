import Link from 'next/link';
import { Zap, Star, MapPin, Phone, AlertTriangle } from 'lucide-react';
import { businesses } from '@/data/businesses';

export const metadata = { title: 'Public Utilities & Essential Services in Bhutan' };

export default function UtilitiesPage() {
  const utils = businesses.filter(b => b.type === 'public_utility' || (b.type === 'government' && ['cat-7', 'cat-13', 'cat-5'].includes(b.categoryId)));
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-yellow-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Utilities</span></div>
          <div className="flex items-center gap-3"><Zap className="w-8 h-8" /><h1 className="text-3xl font-bold">Public Utilities & Essential Services</h1></div>
          <p className="mt-2 text-yellow-100">Government services, telecom, postal, healthcare, and transport in Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-red-600" /><h3 className="font-bold text-red-800">Emergency Contacts</h3></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
            <div><span className="text-red-600 font-medium">Police:</span> 113</div>
            <div><span className="text-red-600 font-medium">Fire:</span> 110</div>
            <div><span className="text-red-600 font-medium">Ambulance:</span> 112</div>
            <div><span className="text-red-600 font-medium">Disaster:</span> 111</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {utils.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full capitalize">{biz.type.replace(/_/g, ' ')}</span></div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span></div><span className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3 h-3" />{biz.city}</span></div>
              {biz.phone && <div className="mt-2 flex items-center gap-1 text-xs text-gray-500"><Phone className="w-3 h-3" />{biz.phone}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
