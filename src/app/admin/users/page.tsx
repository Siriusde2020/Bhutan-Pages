'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronLeft, Shield, User, Edit, CheckCircle, X, Save } from 'lucide-react';

interface UserItem {
  id: string; name: string; email: string; role: string; status: string; joined: string;
}

const initialUsers: UserItem[] = [
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
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);
  const [editRole, setEditRole] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [actionMsg, setActionMsg] = useState('');

  const filtered = users.filter(u => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  const roleColors: Record<string, string> = { admin: 'bg-red-100 text-red-700', moderator: 'bg-purple-100 text-purple-700', business_owner: 'bg-blue-100 text-blue-700', investor: 'bg-green-100 text-green-700', government: 'bg-amber-100 text-amber-700', analyst: 'bg-cyan-100 text-cyan-700', user: 'bg-gray-100 text-gray-700' };

  const openEdit = (u: UserItem) => { setEditingUser(u); setEditRole(u.role); setEditStatus(u.status); };

  const handleSave = () => {
    if (!editingUser) return;
    setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, role: editRole, status: editStatus } : u));
    setEditingUser(null);
    setActionMsg('User updated successfully!');
    setTimeout(() => setActionMsg(''), 3000);
  };

  const toggleStatus = (u: UserItem) => {
    const newStatus = u.status === 'active' ? 'suspended' : 'active';
    setUsers(prev => prev.map(usr => usr.id === u.id ? { ...usr, status: newStatus } : usr));
    setActionMsg(`User ${newStatus === 'active' ? 'activated' : 'suspended'} successfully.`);
    setTimeout(() => setActionMsg(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Users</span></div>
          <h1 className="text-2xl font-bold">Manage Users</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {actionMsg && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> {actionMsg}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" /></div>
          <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option value="all">All Roles</option><option value="user">User</option><option value="business_owner">Business Owner</option><option value="admin">Admin</option><option value="moderator">Moderator</option><option value="investor">Investor</option><option value="government">Government</option></select>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left px-4 py-3 font-medium text-gray-500">User</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Email</th><th className="text-left px-4 py-3 font-medium text-gray-500">Role</th><th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Joined</th><th className="text-left px-4 py-3 font-medium text-gray-500">Status</th><th className="text-left px-4 py-3 font-medium text-gray-500">Actions</th></tr></thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><User className="w-4 h-4 text-gray-500" /></div><span className="font-medium text-gray-900">{u.name}</span></div></td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-600">{u.email}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${roleColors[u.role] || 'bg-gray-100 text-gray-700'}`}>{u.role.replace(/_/g, ' ')}</span></td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-600">{u.joined}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleStatus(u)} className={`px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer ${u.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}>
                      {u.status}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => openEdit(u)} className="p-1 hover:bg-gray-100 rounded" title="Edit user"><Edit className="w-4 h-4 text-gray-500" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-bold text-gray-900">Edit User</h3>
              <button onClick={() => setEditingUser(null)} className="p-1 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-500" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Name</p>
                <p className="text-gray-900">{editingUser.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-gray-900">{editingUser.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select value={editRole} onChange={e => setEditRole(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                  <option value="user">User</option><option value="business_owner">Business Owner</option><option value="moderator">Moderator</option><option value="admin">Admin</option><option value="investor">Investor</option><option value="analyst">Analyst</option><option value="government">Government</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={editStatus} onChange={e => setEditStatus(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                  <option value="active">Active</option><option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-6 border-t">
              <button onClick={() => setEditingUser(null)} className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">Cancel</button>
              <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
