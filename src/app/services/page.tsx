'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Wrench, DollarSign } from 'lucide-react';
import { businesses } from '@/data/businesses';
import { categories } from '@/data/categories';

export default function ServicesPage() {
  const [search, setSearch] = useState('');

  const allServices = useMemo(() => {
    const services: { name: string; description?: string; price?: string; businessId: string; businessName: string; categoryId: string }[] = [];
    businesses.forEach(b => {
      b.servicesOffered.forEach(s => {
        services.push({ name: s.name, description: s.description, price: s.price, businessId: b.id, businessName: b.name, categoryId: b.categoryId });
      });
    });
    return services;
  }, []);

  const filtered = search ? allServices.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.businessName.toLowerCase().includes(search.toLowerCase())) : allServices;

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(s => {
      const cat = categories.find(c => c.id === s.categoryId)?.name || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(s);
    });
    return groups;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-indigo-200 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Services</span></div>
          <div className="flex items-center gap-3"><Wrench className="w-8 h-8" /><h1 className="text-3xl font-bold">Browse All Services</h1></div>
          <p className="mt-2 text-indigo-200">Explore {allServices.length} services offered by businesses across Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search services..." value={search} onChange={e => setSearch(e.target.value)} className="w-full max-w-md pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white" />
        </div>
        {Object.entries(grouped).map(([cat, services]) => (
          <div key={cat} className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">{cat}<span className="text-sm font-normal text-gray-500">({services.length})</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((s, i) => (
                <Link key={`${s.businessId}-${i}`} href={`/businesses/${businesses.find(b => b.id === s.businessId)?.slug || s.businessId}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition-all">
                  <h4 className="font-medium text-gray-900">{s.name}</h4>
                  {s.description && <p className="text-xs text-gray-500 mt-1 line-clamp-1">{s.description}</p>}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-orange-600 font-medium">{s.businessName}</span>
                    {s.price && <span className="flex items-center gap-1 text-xs text-gray-600"><DollarSign className="w-3 h-3" />{s.price}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
