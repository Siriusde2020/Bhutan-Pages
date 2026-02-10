'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft, Tag, Plus, Calendar, Percent, CheckCircle, Clock } from 'lucide-react';

interface DealItem {
  id: string;
  title: string;
  businessName: string;
  description: string;
  discountPercent?: number;
  originalPrice?: string;
  dealPrice?: string;
  code?: string;
  startDate: string;
  endDate: string;
  category: string;
  isActive: boolean;
}

export default function DashboardDealsPage() {
  const { user, loading } = useAuth();
  const [deals, setDeals] = useState<DealItem[]>([]);
  const [loadingDeals, setLoadingDeals] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [dealPrice, setDealPrice] = useState('');
  const [code, setCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!loading && !user) window.location.href = '/auth/login';
  }, [user, loading]);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const res = await fetch('/api/deals');
        if (res.ok) {
          const data = await res.json();
          setDeals(data.deals || []);
        }
      } catch { /* silent */ } finally { setLoadingDeals(false); }
    }
    if (user) fetchDeals();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !endDate) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title, description, code,
          discountPercent: discountPercent ? parseInt(discountPercent) : undefined,
          originalPrice: originalPrice || undefined,
          dealPrice: dealPrice || undefined,
          startDate: startDate || new Date().toISOString().split('T')[0],
          endDate,
          businessId: 'biz-1', businessName: user?.name || 'My Business',
          category: 'General',
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setDeals(prev => [data.deal, ...prev]);
        setShowForm(false);
        setTitle(''); setDescription(''); setCode(''); setDiscountPercent('');
        setOriginalPrice(''); setDealPrice(''); setStartDate(''); setEndDate('');
        setSuccess('Deal created successfully!');
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch { /* silent */ } finally { setSubmitting(false); }
  };

  if (loading || !user) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-600"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Deals & Offers</h1>
              <p className="text-gray-500 text-sm">Create and manage special promotions</p>
            </div>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
            <Plus className="w-4 h-4" /> Create Deal
          </button>
        </div>

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> {success}
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 mb-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Create a New Deal</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deal Title *</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. 20% Off All Services" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="Describe your deal or offer..." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Discount %</label>
                <input type="number" value={discountPercent} onChange={e => setDiscountPercent(e.target.value)} placeholder="20" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                <input type="text" value={originalPrice} onChange={e => setOriginalPrice(e.target.value)} placeholder="Nu. 5,000" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deal Price</label>
                <input type="text" value={dealPrice} onChange={e => setDealPrice(e.target.value)} placeholder="Nu. 4,000" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
                <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="SAVE20" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" required />
              </div>
            </div>
            <div className="flex gap-2">
              <button type="submit" disabled={submitting} className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition">
                {submitting ? 'Creating...' : 'Create Deal'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 text-gray-600 hover:text-gray-900 text-sm font-medium">Cancel</button>
            </div>
          </form>
        )}

        {loadingDeals ? (
          <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>
        ) : deals.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Tag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No Deals Yet</h3>
            <p className="text-gray-500 text-sm mb-4">Create your first deal or offer to attract more customers.</p>
            <button onClick={() => setShowForm(true)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition">Create Your First Deal</button>
          </div>
        ) : (
          <div className="space-y-4">
            {deals.map(deal => (
              <div key={deal.id} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{deal.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{deal.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                      {deal.discountPercent && <span className="flex items-center gap-1 text-orange-600 font-medium"><Percent className="w-3 h-3" /> {deal.discountPercent}% off</span>}
                      {deal.code && <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">{deal.code}</span>}
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {deal.startDate} to {deal.endDate}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${deal.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {deal.isActive ? 'Active' : 'Expired'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
