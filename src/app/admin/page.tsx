'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Building2,
  Users,
  BarChart3,
  Shield,
  FileText,
  Settings,
  CheckCircle2,
  AlertTriangle,
  Flag,
  Clock,
  TrendingUp,
  Activity,
  Server,
  Database,
  Cpu,
  HardDrive,
  ChevronRight,
} from 'lucide-react';

const adminSidebar = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin', active: true },
  { label: 'Businesses', icon: Building2, href: '/admin/businesses' },
  { label: 'Users', icon: Users, href: '/admin/users' },
  { label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
  { label: 'Moderation', icon: Shield, href: '/admin/moderation', badge: 28 },
  { label: 'Reports', icon: FileText, href: '/admin/reports' },
  { label: 'Settings', icon: Settings, href: '/admin/settings' },
];

const stats = [
  { label: 'Total Businesses', value: '8,945', change: '+234 this month', icon: Building2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Total Users', value: '45,230', change: '+1,250 this month', icon: Users, color: 'text-green-400', bg: 'bg-green-500/10' },
  { label: 'Pending Claims', value: '23', change: '5 urgent', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { label: 'Flagged Reviews', value: '5', change: '2 new today', icon: Flag, color: 'text-red-400', bg: 'bg-red-500/10' },
];

const recentActivity = [
  { id: 1, type: 'claim', message: 'New claim submitted for "Paro Valley Tours"', time: '5 min ago', user: 'Tshering Pem' },
  { id: 2, type: 'review', message: 'Review flagged as inappropriate on "Hotel Druk"', time: '22 min ago', user: 'System' },
  { id: 3, type: 'business', message: 'New business registered: "Bhutan Tech Solutions"', time: '1 hour ago', user: 'Dorji Wangmo' },
  { id: 4, type: 'user', message: 'User account verified: sonam.choden@gmail.com', time: '2 hours ago', user: 'Auto-verify' },
  { id: 5, type: 'claim', message: 'Claim approved for "Ambient Cafe Thimphu"', time: '3 hours ago', user: 'Admin Karma' },
  { id: 6, type: 'business', message: 'Business profile updated: "JNWL Construction"', time: '4 hours ago', user: 'Business Owner' },
  { id: 7, type: 'system', message: 'Scheduled backup completed successfully', time: '6 hours ago', user: 'System' },
  { id: 8, type: 'review', message: 'Duplicate review detected and merged', time: '8 hours ago', user: 'System' },
];

const systemHealth = [
  { label: 'API Server', status: 'healthy', uptime: '99.98%', icon: Server },
  { label: 'Database', status: 'healthy', uptime: '99.99%', icon: Database },
  { label: 'CPU Usage', status: 'warning', uptime: '78%', icon: Cpu },
  { label: 'Storage', status: 'healthy', uptime: '45% used', icon: HardDrive },
];

export default function AdminPage() {
  const [selectedSidebar, setSelectedSidebar] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Dark Sidebar */}
      <aside className="w-64 bg-gray-950 border-r border-gray-800 flex-shrink-0 hidden lg:flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">BhutanBiz</span>
              <span className="block text-xs text-gray-500">Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {adminSidebar.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                item.active
                  ? 'bg-orange-500/10 text-orange-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
              KD
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">Karma Dorji</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-gray-950 border-b border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Last updated: 2 min ago</span>
              <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                Live
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800 rounded-xl border border-gray-700 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                <button className="text-sm text-orange-400 hover:text-orange-300 font-medium">
                  View all
                </button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'claim' ? 'bg-amber-400' :
                        activity.type === 'review' ? 'bg-red-400' :
                        activity.type === 'business' ? 'bg-blue-400' :
                        activity.type === 'user' ? 'bg-green-400' :
                        'bg-gray-500'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-300">{activity.message}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <span className="text-xs text-gray-600">by {activity.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { label: 'Approve Claims', count: 23, href: '/admin/moderation', icon: CheckCircle2, color: 'text-amber-400' },
                  { label: 'Moderate Reviews', count: 5, href: '/admin/moderation', icon: Flag, color: 'text-red-400' },
                  { label: 'Manage Businesses', count: null, href: '/admin/businesses', icon: Building2, color: 'text-blue-400' },
                  { label: 'Generate Reports', count: null, href: '/admin/reports', icon: FileText, color: 'text-purple-400' },
                ].map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className={`w-5 h-5 ${action.color}`} />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {action.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {action.count !== null && (
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full font-medium">
                          {action.count}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">System Health</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {systemHealth.map((item) => (
                <div key={item.label} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.status === 'healthy' ? 'bg-green-400' :
                        item.status === 'warning' ? 'bg-amber-400' :
                        'bg-red-400'
                      }`}
                    />
                  </div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.uptime}</p>
                  <p className={`text-xs font-medium mt-1 capitalize ${
                    item.status === 'healthy' ? 'text-green-400' :
                    item.status === 'warning' ? 'text-amber-400' :
                    'text-red-400'
                  }`}>
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
