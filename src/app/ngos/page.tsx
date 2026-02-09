import Link from 'next/link';
import { Heart, Star, MapPin } from 'lucide-react';
import { businesses } from '@/data/businesses';

export const metadata = { title: 'NGOs & Civil Society Organizations in Bhutan' };

export default function NgosPage() {
  const ngos = businesses.filter(b => b.type === 'ngo' || b.type === 'cso' || b.categoryId === 'cat-16');
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-rose-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">NGOs</span></div>
          <div className="flex items-center gap-3"><Heart className="w-8 h-8" /><h1 className="text-3xl font-bold">NGOs & Civil Society Organizations</h1></div>
          <p className="mt-2 text-rose-200">Non-profit organizations making a difference in Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ngos.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><Heart className="w-4 h-4 text-rose-500" /></div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}</span></div>
            </Link>
          ))}
        </div>
        {ngos.length === 0 && <div className="text-center py-16"><Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No NGOs listed yet.</p></div>}
      </div>
    </div>
  );
}
