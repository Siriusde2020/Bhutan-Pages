import Link from 'next/link';
import { Star, MapPin, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { getNewBusinesses } from '@/data/businesses';

export const metadata = { title: 'Newly Added Businesses' };

export default function NewListingsPage() {
  const newBiz = getNewBusinesses(50);

  const daysAgo = (date: string) => {
    const diff = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return `${diff} days ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-emerald-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">New Listings</span></div>
          <div className="flex items-center gap-3"><Sparkles className="w-8 h-8" /><h1 className="text-3xl font-bold">Newly Added Businesses</h1></div>
          <p className="mt-2 text-emerald-100">Discover the latest businesses joining Bhutan&apos;s directory</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newBiz.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
                <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"><Clock className="w-3 h-3" />{daysAgo(biz.listedDate)}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span></div><div className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3 h-3" />{biz.city}, {biz.dzongkhag}</div></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
