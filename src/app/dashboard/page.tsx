'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  Eye,
  Phone,
  Users,
  Star,
  TrendingUp,
  Edit,
  BarChart3,
  MessageSquare,
  Briefcase,
  Tag,
  Settings,
  ShieldCheck,
  LayoutDashboard,
  ChevronRight,
  Clock,
  Bell,
  PlusCircle,
  Building2,
} from 'lucide-react';
import { Business } from '@/types';

const sidebarItems = [
  { label: 'Overview', icon: LayoutDashboard, href: '/dashboard', active: true },
  { label: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { label: 'Reviews', icon: MessageSquare, href: '/dashboard/reviews' },
  { label: 'Jobs', icon: Briefcase, href: '/dashboard/jobs' },
  { label: 'Deals', icon: Tag, href: '/dashboard/deals' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
  { label: 'Claims', icon: ShieldCheck, href: '/dashboard/claims' },
];

const quickActions = [
  { label: 'Edit Profile', icon: Edit, href: '/dashboard/settings', color: 'bg-blue-500' },
  { label: 'View Analytics', icon: BarChart3, href: '/dashboard/analytics', color: 'bg-purple-500' },
  { label: 'Respond to Reviews', icon: MessageSquare, href: '/dashboard/reviews', color: 'bg-green-500' },
  { label: 'Post Job', icon: Briefcase, href: '/dashboard/jobs', color: 'bg-amber-500' },
  { label: 'Create Deal', icon: Tag, href: '/dashboard/deals', color: 'bg-pink-500' },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = '/auth/login';
    }
  }, [user, loading]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/businesses?limit=100');
        if (res.ok) {
          const data = await res.json();
          setBusinesses(data.businesses || []);
        }
      } catch {
        // silently fail
      } finally {
        setLoadingData(false);
      }
    }
    if (user) fetchData();
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Find user's businesses (where they are owner)
  const myBusinesses = businesses.filter(b => b.ownerId === user.id || b.adminIds?.includes(user.id));
  const primaryBusiness = myBusinesses[0];

  const totalViews = myBusinesses.reduce((s, b) => s + (b.viewCount || 0), 0);
  const totalContacts = myBusinesses.reduce((s, b) => s + (b.contactCount || 0), 0);
  const totalReviews = myBusinesses.reduce((s, b) => s + (b.reviewCount || 0), 0);
  const avgRating = myBusinesses.length > 0
    ? Math.round((myBusinesses.reduce((s, b) => s + b.rating, 0) / myBusinesses.length) * 10) / 10
    : 0;

  const stats = [
    { label: 'Profile Views', value: totalViews.toLocaleString(), change: '+12.5%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Phone Clicks', value: totalContacts.toLocaleString(), change: '+8.3%', icon: Phone, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Total Reviews', value: totalReviews.toLocaleString(), change: `${totalReviews}`, icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Avg Rating', value: avgRating > 0 ? avgRating.toString() : 'N/A', change: avgRating >= 4 ? 'Great!' : 'Keep going', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 hidden lg:block">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">{primaryBusiness?.name || user.name}</p>
        </div>
        <nav className="px-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                item.active
                  ? 'bg-orange-50 text-orange-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-8 md:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-orange-100 mt-1">
                  {primaryBusiness ? (
                    <>Here&apos;s how <strong>{primaryBusiness.name}</strong> is performing.</>
                  ) : (
                    <>Manage your BhutanBiz account and explore the directory.</>
                  )}
                </p>
              </div>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition hidden md:block">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 max-w-5xl">
          {myBusinesses.length === 0 && !loadingData ? (
            /* No business yet */
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center mb-8">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Business Listed Yet</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                List your business on BhutanBiz to reach thousands of customers, or claim an existing listing.
              </p>
              <div className="flex gap-3 justify-center">
                <Link href="/claim" className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
                  <ShieldCheck className="w-5 h-5" /> Claim a Business
                </Link>
                <Link href="/pricing" className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                  <PlusCircle className="w-5 h-5" /> List New Business
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <span className="text-sm font-medium text-green-600 flex items-center gap-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* My Businesses */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">My Businesses</h3>
                    <Link href="/claim" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                      + Add Business
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {myBusinesses.map((biz) => (
                      <div key={biz.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={`/businesses/${biz.slug}`} className="font-semibold text-gray-900 hover:text-orange-600">{biz.name}</Link>
                          <p className="text-sm text-gray-500">{biz.city}, {biz.dzongkhag}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" /> {biz.rating} ({biz.reviewCount} reviews)</span>
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {biz.viewCount} views</span>
                          </div>
                        </div>
                        <Link href={`/businesses/${biz.slug}`} className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
                          View <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Info */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Account</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Name</span>
                      <p className="font-medium text-gray-900">{user.name}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Email</span>
                      <p className="font-medium text-gray-900">{user.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Phone</span>
                      <p className="font-medium text-gray-900">{user.phone}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Role</span>
                      <p className="font-medium text-gray-900 capitalize">{user.role.replace(/_/g, ' ')}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Member Since</span>
                      <p className="font-medium text-gray-900">{user.createdAt?.split('T')[0]}</p>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/settings"
                    className="mt-4 w-full flex items-center justify-center gap-1 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition"
                  >
                    Edit Settings
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Quick Actions */}
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-center group"
                >
                  <div
                    className={`w-11 h-11 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition`}
                  >
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
