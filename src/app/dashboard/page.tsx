'use client';

import { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';

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
  { label: 'Post Job', icon: Briefcase, href: '/dashboard/jobs/new', color: 'bg-amber-500' },
  { label: 'Create Deal', icon: Tag, href: '/dashboard/deals/new', color: 'bg-pink-500' },
];

const recentActivity = [
  { id: 1, type: 'review', message: 'New 5-star review from Karma Wangchuk', time: '2 hours ago' },
  { id: 2, type: 'view', message: 'Your profile was viewed 45 times today', time: '5 hours ago' },
  { id: 3, type: 'lead', message: 'New phone inquiry from Pema Dorji', time: '1 day ago' },
  { id: 4, type: 'review', message: 'Tshering Yangzom left a 4-star review', time: '2 days ago' },
  { id: 5, type: 'system', message: 'Your profile completeness increased to 75%', time: '3 days ago' },
  { id: 6, type: 'lead', message: 'New WhatsApp message inquiry', time: '3 days ago' },
];

const stats = [
  { label: 'Profile Views', value: '4,520', change: '+12.5%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Phone Clicks', value: '234', change: '+8.3%', icon: Phone, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Leads This Month', value: '89', change: '+22.1%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Reviews', value: '12', change: '+2', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const profileCompleteness = 75;
  const incompleteItems = ['Add business logo', 'Add opening hours for Sunday', 'Add WhatsApp number'];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
        } bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300 hidden lg:block`}
      >
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">Taj Tashi</p>
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
                <h1 className="text-2xl font-bold">Welcome back, Karma!</h1>
                <p className="text-orange-100 mt-1">
                  Here&apos;s how <strong>Taj Tashi</strong> is performing this month.
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
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                <Link href="/dashboard/analytics" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'review'
                          ? 'bg-amber-400'
                          : activity.type === 'view'
                          ? 'bg-blue-400'
                          : activity.type === 'lead'
                          ? 'bg-green-400'
                          : 'bg-gray-400'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700">{activity.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Completeness */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Completeness</h3>

              {/* Circular Progress */}
              <div className="flex items-center justify-center mb-5">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="12"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${(profileCompleteness / 100) * 352} 352`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{profileCompleteness}%</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mb-4">Complete your profile to attract more customers</p>

              <div className="space-y-2">
                {incompleteItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/dashboard/settings"
                className="mt-4 w-full flex items-center justify-center gap-1 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition"
              >
                Complete Profile
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

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
