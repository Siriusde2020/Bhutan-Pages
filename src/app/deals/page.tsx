'use client';

import Link from 'next/link';
import { Tag, Calendar, Percent } from 'lucide-react';
import { sampleDeals } from '@/data/content';

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-orange-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Deals</span></div>
          <div className="flex items-center gap-3"><Tag className="w-8 h-8" /><h1 className="text-3xl font-bold">Deals & Offers</h1></div>
          <p className="mt-2 text-orange-100">Exclusive deals and promotions from businesses across Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleDeals.map(deal => (
            <div key={deal.id} className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 flex items-center justify-between">
                {deal.discountPercent && <span className="flex items-center gap-1 text-white font-bold text-xl"><Percent className="w-5 h-5" />{deal.discountPercent} OFF</span>}
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${deal.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>{deal.isActive ? 'Active' : 'Expired'}</span>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-1">{deal.businessName}</p>
                <h3 className="font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{deal.description}</p>
                {deal.originalPrice && deal.dealPrice && <div className="flex items-center gap-2 mb-3"><span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span><span className="text-lg font-bold text-orange-600">{deal.dealPrice}</span></div>}
                <div className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />Valid: {deal.startDate} - {deal.endDate}</div>
                <span className="mt-2 inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{deal.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
