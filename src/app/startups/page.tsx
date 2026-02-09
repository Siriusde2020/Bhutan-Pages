import Link from 'next/link';
import { Zap, Star, MapPin, Rocket, Calendar } from 'lucide-react';
import { getStartupBusinesses } from '@/data/businesses';

export const metadata = { title: 'Startups & MSMEs in Bhutan' };

export default function StartupsPage() {
  const startups = getStartupBusinesses();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-violet-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Startups</span></div>
          <div className="flex items-center gap-3"><Rocket className="w-8 h-8" /><h1 className="text-3xl font-bold">Startups & MSMEs in Bhutan</h1></div>
          <p className="mt-2 text-violet-200">Discover Bhutan&apos;s emerging entrepreneurs and micro, small & medium enterprises</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {startups.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><Zap className="w-4 h-4 text-violet-600" /></div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">{biz.foundedYear && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Est. {biz.foundedYear}</span>}<span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{biz.city}</span></div>
              <div className="flex items-center gap-1 mt-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span></div>
            </Link>
          ))}
        </div>
        {startups.length === 0 && <div className="text-center py-16"><Rocket className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No startups listed yet. Are you a startup? <Link href="/claim" className="text-orange-600 hover:underline">List your business</Link></p></div>}
      </div>
    </div>
  );
}
