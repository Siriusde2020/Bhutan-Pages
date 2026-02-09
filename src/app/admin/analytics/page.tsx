import Link from 'next/link';
import { ChevronLeft, TrendingUp, TrendingDown, Minus, BarChart3 } from 'lucide-react';
import { platformAnalytics } from '@/data/analytics';

export const metadata = { title: 'Platform Analytics - Admin' };

export default function AdminAnalyticsPage() {
  const { categoryGrowth, regionDensity, industryTrends } = platformAnalytics;
  const maxCatCount = Math.max(...categoryGrowth.map(c => c.count));
  const maxRegCount = Math.max(...regionDensity.map(r => r.count));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Analytics</span></div>
          <div className="flex items-center gap-3"><BarChart3 className="w-6 h-6" /><h1 className="text-2xl font-bold">Platform Analytics</h1></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ label: 'Total Businesses', value: platformAnalytics.totalBusinesses.toLocaleString(), color: 'text-blue-600' }, { label: 'Total Users', value: platformAnalytics.totalUsers.toLocaleString(), color: 'text-green-600' }, { label: 'Verified', value: platformAnalytics.verifiedBusinesses.toLocaleString(), color: 'text-purple-600' }, { label: 'Premium', value: platformAnalytics.premiumBusinesses.toLocaleString(), color: 'text-amber-600' }].map(m => (
            <div key={m.label} className="bg-white rounded-xl border p-5"><p className="text-sm text-gray-500">{m.label}</p><p className={`text-2xl font-bold ${m.color}`}>{m.value}</p></div>
          ))}
        </div>
        {/* Category Growth */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Category Growth</h2>
          <div className="space-y-3">
            {categoryGrowth.slice(0, 10).map(c => (
              <div key={c.category} className="flex items-center gap-4">
                <span className="text-sm text-gray-700 w-48 truncate">{c.category}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-orange-500 rounded-full" style={{ width: `${(c.count / maxCatCount) * 100}%` }} /></div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">{c.count}</span>
                <span className={`text-xs font-medium w-14 text-right ${c.growth > 10 ? 'text-green-600' : 'text-gray-500'}`}>+{c.growth}%</span>
              </div>
            ))}
          </div>
        </div>
        {/* Regional Density */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Regional Business Density</h2>
          <div className="space-y-3">
            {regionDensity.map(r => (
              <div key={r.dzongkhag} className="flex items-center gap-4">
                <span className="text-sm text-gray-700 w-48">{r.dzongkhag}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${(r.count / maxRegCount) * 100}%` }} /></div>
                <span className="text-sm font-medium text-gray-900 w-16 text-right">{r.count} biz</span>
              </div>
            ))}
          </div>
        </div>
        {/* Industry Trends */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Industry Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryTrends.map(t => (
              <div key={t.industry} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">{t.industry}</h4>
                  {t.trend === 'rising' ? <TrendingUp className="w-4 h-4 text-green-600" /> : t.trend === 'declining' ? <TrendingDown className="w-4 h-4 text-red-600" /> : <Minus className="w-4 h-4 text-gray-400" />}
                </div>
                <div className="flex items-center gap-2"><span className="text-2xl font-bold text-gray-900">{t.score}</span><span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${t.trend === 'rising' ? 'bg-green-100 text-green-700' : t.trend === 'stable' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'}`}>{t.trend}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
