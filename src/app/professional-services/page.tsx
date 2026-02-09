'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, CheckCircle, Briefcase, Scale, Calculator, Monitor } from 'lucide-react';
import { getBusinessesByCategory } from '@/data/businesses';

export default function ProfessionalServicesPage() {
  const [tab, setTab] = useState('all');
  const legal = getBusinessesByCategory('cat-4');
  const finance = getBusinessesByCategory('cat-9');
  const tech = getBusinessesByCategory('cat-7');
  const all = [...legal, ...finance, ...tech];
  const displayed = tab === 'legal' ? legal : tab === 'finance' ? finance : tab === 'tech' ? tech : all;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Professional Services</span></div>
          <div className="flex items-center gap-3"><Briefcase className="w-8 h-8" /><h1 className="text-3xl font-bold">Professional Services Directory</h1></div>
          <p className="mt-2 text-slate-300">Lawyers, accountants, IT consultants, and financial advisors in Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {[{ key: 'all', label: 'All', icon: Briefcase }, { key: 'legal', label: 'Legal', icon: Scale }, { key: 'finance', label: 'Banking & Finance', icon: Calculator }, { key: 'tech', label: 'Technology & IT', icon: Monitor }].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${tab === t.key ? 'bg-slate-800 text-white' : 'bg-white border text-gray-600'}`}><t.icon className="w-4 h-4" />{t.label}</button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-4">{displayed.length} professionals found</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map(biz => (
            <Link key={biz.id} href={`/businesses/${biz.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2"><h3 className="font-semibold text-gray-900">{biz.name}</h3>{biz.verificationStatus === 'verified' && <CheckCircle className="w-4 h-4 text-green-600" />}</div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{biz.shortDescription}</p>
              <div className="flex items-center gap-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{biz.rating}</span><span className="text-xs text-gray-500"><MapPin className="w-3 h-3 inline" /> {biz.city}</span></div>
              <div className="mt-2 flex flex-wrap gap-1">{biz.servicesOffered.slice(0, 3).map(s => <span key={s.name} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{s.name}</span>)}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
