'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronLeft, CheckCircle, XCircle, Eye, Edit, Save, X, Camera } from 'lucide-react';
import { categories } from '@/data/categories';
import { Business } from '@/types';

export default function AdminBusinessesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingBiz, setEditingBiz] = useState<Business | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editStatus, setEditStatus] = useState('active');
  const [editLogo, setEditLogo] = useState('');
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [businessList, setBusinessList] = useState<Business[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // Fetch businesses from API (reads from in-memory store, not static data)
  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const res = await fetch('/api/businesses?limit=200&status=all');
        if (res.ok) {
          const data = await res.json();
          setBusinessList(data.businesses || []);
        }
      } catch { /* silent */ }
      finally { setLoadingData(false); }
    }
    fetchBusinesses();
  }, []);

  const filtered = businessList.filter(b => {
    const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchSearch && matchStatus;
  });
  const getCat = (id: string) => categories.find(c => c.id === id)?.name || '';

  const openEdit = (biz: Business) => {
    setEditingBiz(biz);
    setEditName(biz.name);
    setEditDescription(biz.description);
    setEditPhone(biz.phone);
    setEditEmail(biz.email);
    setEditStatus(biz.status);
    setEditLogo(biz.logo || '');
  };

  const handleSave = async () => {
    if (!editingBiz) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/businesses/${editingBiz.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName, description: editDescription, phone: editPhone, email: editEmail, status: editStatus, logo: editLogo }),
      });
      if (res.ok) {
        const data = await res.json();
        setBusinessList(prev => prev.map(b => b.id === editingBiz.id ? { ...b, ...data.business } : b));
        setEditingBiz(null);
        setSavedMsg('Business updated successfully!');
        setTimeout(() => setSavedMsg(''), 3000);
      }
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const handleLogoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) { const reader = new FileReader(); reader.onload = () => setEditLogo(reader.result as string); reader.readAsDataURL(file); }
    };
    input.click();
  };

  const handleToggleVerify = async (biz: Business) => {
    const newStatus = biz.verificationStatus === 'verified' ? 'unverified' : 'verified';
    try {
      const res = await fetch(`/api/businesses/${biz.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verificationStatus: newStatus }),
      });
      if (res.ok) {
        setBusinessList(prev => prev.map(b => b.id === biz.id ? { ...b, verificationStatus: newStatus as Business['verificationStatus'] } : b));
      }
    } catch { /* silent */ }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Businesses</span></div>
          <h1 className="text-2xl font-bold">Manage Businesses</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {savedMsg && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> {savedMsg}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search businesses..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" /></div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option value="all">All Status</option><option value="active">Active</option><option value="pending">Pending</option><option value="suspended">Suspended</option></select>
          <Link href="/business/add" className="ml-auto bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">+ Add Business</Link>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left px-4 py-3 font-medium text-gray-500">Business</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Category</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Location</th><th className="text-left px-4 py-3 font-medium text-gray-500">Status</th><th className="text-left px-4 py-3 font-medium text-gray-500">Verified</th><th className="text-left px-4 py-3 font-medium text-gray-500">Actions</th></tr></thead>
            <tbody>
              {filtered.map(biz => (
                <tr key={biz.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        {biz.logo ? <img src={biz.logo} alt="" className="w-full h-full object-cover" /> : <span className="text-xs font-bold text-gray-500">{biz.name.charAt(0)}</span>}
                      </div>
                      <div><div className="font-medium text-gray-900">{biz.name}</div><div className="text-xs text-gray-500">ID: {biz.id}</div></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-600">{getCat(biz.categoryId)}</td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-600">{biz.dzongkhag}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${biz.status === 'active' ? 'bg-green-100 text-green-700' : biz.status === 'suspended' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{biz.status}</span></td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleToggleVerify(biz)} title="Toggle verification">
                      {biz.verificationStatus === 'verified' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300 hover:text-green-400" />}
                    </button>
                  </td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><Link href={`/businesses/${biz.slug}`} className="p-1 hover:bg-gray-100 rounded" title="View"><Eye className="w-4 h-4 text-gray-500" /></Link><button onClick={() => openEdit(biz)} className="p-1 hover:bg-gray-100 rounded" title="Edit"><Edit className="w-4 h-4 text-gray-500" /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">{filtered.length} of {businessList.length} businesses</p>
      </div>

      {/* Edit Modal */}
      {editingBiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-bold text-gray-900">Edit Business</h3>
              <button onClick={() => setEditingBiz(null)} className="p-1 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-500" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300">
                    {editLogo ? <img src={editLogo} alt="" className="w-full h-full object-cover" /> : <Camera className="w-6 h-6 text-gray-400" />}
                  </div>
                  <button onClick={handleLogoUpload} className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100">Upload Logo</button>
                </div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label><input type="text" value={editName} onChange={e => setEditName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea value={editDescription} onChange={e => setEditDescription(e.target.value)} rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" value={editPhone} onChange={e => setEditPhone(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={editStatus} onChange={e => setEditStatus(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                  <option value="active">Active</option><option value="pending">Pending</option><option value="suspended">Suspended</option><option value="closed">Closed</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-6 border-t">
              <button onClick={() => setEditingBiz(null)} className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white text-sm font-semibold rounded-lg transition">
                <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
