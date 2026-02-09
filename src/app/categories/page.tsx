'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, ArrowRight } from 'lucide-react';
import { getAllCategories } from '@/data/categories';

export default function CategoriesPage() {
  const [search, setSearch] = useState('');
  const allCats = getAllCategories();
  const filtered = search ? allCats.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) : allCats;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-orange-600">Home</Link><span>/</span><span className="text-gray-900 font-medium">Categories</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Browse Categories</h1>
          <p className="mt-2 text-gray-600">Explore businesses across {allCats.length} industry categories</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search categories..." value={search} onChange={e => setSearch(e.target.value)} className="w-full max-w-md pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cat => (
            <Link key={cat.id} href={`/categories/${cat.slug}`} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all" style={{ borderLeftColor: cat.color, borderLeftWidth: '4px' }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">{cat.businessCount}</span>
              </div>
              {cat.nameDz && <p className="text-sm text-gray-400 font-dzongkha mb-2">{cat.nameDz}</p>}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cat.subcategories.slice(0, 4).map(sub => (
                  <span key={sub.id} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded">{sub.name}</span>
                ))}
                {cat.subcategories.length > 4 && <span className="px-2 py-0.5 text-gray-400 text-xs">+{cat.subcategories.length - 4} more</span>}
              </div>
              <div className="flex items-center text-sm font-medium text-orange-600">Explore <ArrowRight className="w-4 h-4 ml-1" /></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
