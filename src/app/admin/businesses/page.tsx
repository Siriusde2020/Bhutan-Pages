'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronLeft, CheckCircle, XCircle, Eye, Edit, MoreHorizontal } from 'lucide-react';
import { businesses } from '@/data/businesses';
import { categories } from '@/data/categories';

export default function AdminBusinessesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const filtered = businesses.filter(b => {
    const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchSearch && matchStatus;
  });
  const getCat = (id: string) => categories.find(c => c.id === id)?.name || '';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Businesses</span></div>
          <h1 className="text-2xl font-bold">Manage Businesses</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search businesses..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" /></div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option value="all">All Status</option><option value="active">Active</option><option value="pending">Pending</option><option value="suspended">Suspended</option></select>
          <button className="ml-auto bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">+ Add Business</button>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left px-4 py-3 font-medium text-gray-500">Business</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Category</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Location</th><th className="text-left px-4 py-3 font-medium text-gray-500">Status</th><th className="text-left px-4 py-3 font-medium text-gray-500">Verified</th><th className="text-left px-4 py-3 font-medium text-gray-500">Actions</th></tr></thead>
            <tbody>
              {filtered.map(biz => (
                <tr key={biz.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3"><div className="font-medium text-gray-900">{biz.name}</div><div className="text-xs text-gray-500">ID: {biz.id}</div></td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-600">{getCat(biz.categoryId)}</td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-600">{biz.dzongkhag}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${biz.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{biz.status}</span></td>
                  <td className="px-4 py-3">{biz.verificationStatus === 'verified' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><Link href={`/businesses/${biz.slug}`} className="p-1 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-gray-500" /></Link><button className="p-1 hover:bg-gray-100 rounded"><Edit className="w-4 h-4 text-gray-500" /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">{filtered.length} of {businesses.length} businesses</p>
      </div>
    </div>
  );
}
