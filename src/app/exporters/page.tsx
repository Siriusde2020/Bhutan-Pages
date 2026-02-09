import Link from 'next/link';
import { Package, Star, MapPin, Globe } from 'lucide-react';
import { getExporterBusinesses } from '@/data/businesses';

export const metadata = { title: 'Exporters & Manufacturers in Bhutan' };

export default function ExportersPage() {
  const exporters = getExporterBusinesses();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-teal-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Exporters</span></div>
          <div className="flex items-center gap-3"><Package className="w-8 h-8" /><h1 className="text-3xl font-bold">Exporters & Manufacturers</h1></div>
          <p className="mt-2 text-teal-200">Bhutanese businesses exporting products and services internationally</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exporters.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3><Globe className="w-4 h-4 text-teal-600" /></div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}, {biz.dzongkhag}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
