'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronLeft, Shield, User, Mail } from 'lucide-react';

const sampleUsers = [
  { id: 'u1', name: 'Karma Dorji', email: 'karma@email.com', role: 'business_owner', status: 'active', joined: '2025-06-15' },
  { id: 'u2', name: 'Tshering Yangdon', email: 'tshering@email.com', role: 'user', status: 'active', joined: '2025-08-20' },
  { id: 'u3', name: 'Pema Wangchuk', email: 'pema@email.com', role: 'admin', status: 'active', joined: '2024-01-10' },
  { id: 'u4', name: 'Dorji Tshering', email: 'dorji@email.com', role: 'business_owner', status: 'active', joined: '2025-11-05' },
  { id: 'u5', name: 'Kinley Wangmo', email: 'kinley@email.com', role: 'moderator', status: 'active', joined: '2025-03-22' },
  { id: 'u6', name: 'Sarah Mitchell', email: 'sarah@email.com', role: 'investor', status: 'active', joined: '2025-09-12' },
  { id: 'u7', name: 'James Cooper', email: 'james@email.com', role: 'user', status: 'active', joined: '2026-01-08' },
  { id: 'u8', name: 'Sonam Tenzin', email: 'sonam@email.com', role: 'analyst', status: 'active', joined: '2025-07-30' },
  { id: 'u9', name: 'Ugyen Choden', email: 'ugyen@email.com', role: 'government', status: 'active', joined: '2025-04-18' },
  { id: 'u10', name: 'Michael Chen', email: 'michael@email.com', role: 'user', status: 'suspended', joined: '2025-10-01' },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const filtered = sampleUsers.filter(u => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    return matchSearch && matchRole;
  });
  const roleColors: Record<string, string> = { admin: 'bg-red-100 text-red-700', moderator: 'bg-purple-100 text-purple-700', business_owner: 'bg-blue-100 text-blue-700', investor: 'bg-green-100 text-green-700', government: 'bg-amber-100 text-amber-700', analyst: 'bg-cyan-100 text-cyan-700', user: 'bg-gray-100 text-gray-700' };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Users</span></div>
          <h1 className="text-2xl font-bold">Manage Users</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" /></div>
          <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option value="all">All Roles</option><option value="user">User</option><option value="business_owner">Business Owner</option><option value="admin">Admin</option><option value="moderator">Moderator</option><option value="investor">Investor</option><option value="government">Government</option></select>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left px-4 py-3 font-medium text-gray-500">User</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Email</th><th className="text-left px-4 py-3 font-medium text-gray-500">Role</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Joined</th><th className="text-left px-4 py-3 font-medium text-gray-500">Status</th></tr></thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><User className="w-4 h-4 text-gray-500" /></div><span className="font-medium text-gray-900">{u.name}</span></div></td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-600">{u.email}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${roleColors[u.role] || 'bg-gray-100 text-gray-700'}`}>{u.role.replace(/_/g, ' ')}</span></td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-600">{u.joined}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{u.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
