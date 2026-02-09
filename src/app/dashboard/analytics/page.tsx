'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Eye,
  MousePointerClick,
  Users,
  TrendingUp,
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

type DateRange = '7d' | '30d' | '90d' | '12m';

const dateRanges: { value: DateRange; label: string }[] = [
  { value: '7d', label: '7 Days' },
  { value: '30d', label: '30 Days' },
  { value: '90d', label: '90 Days' },
  { value: '12m', label: '12 Months' },
];

const viewsData = [
  { label: 'Mon', value: 120 },
  { label: 'Tue', value: 185 },
  { label: 'Wed', value: 156 },
  { label: 'Thu', value: 210 },
  { label: 'Fri', value: 245 },
  { label: 'Sat', value: 190 },
  { label: 'Sun', value: 130 },
];

const topSearchQueries = [
  { query: 'luxury hotel thimphu', impressions: 1250, clicks: 345, ctr: '27.6%' },
  { query: 'taj tashi bhutan', impressions: 980, clicks: 567, ctr: '57.9%' },
  { query: 'best hotel bhutan', impressions: 870, clicks: 198, ctr: '22.8%' },
  { query: '5 star hotel thimphu', impressions: 650, clicks: 234, ctr: '36.0%' },
  { query: 'thimphu accommodation', impressions: 540, clicks: 123, ctr: '22.8%' },
  { query: 'bhutan resort booking', impressions: 420, clicks: 89, ctr: '21.2%' },
];

const visitorDemographics = [
  { label: 'Thimphu', percent: 35, color: 'bg-orange-500' },
  { label: 'Paro', percent: 22, color: 'bg-blue-500' },
  { label: 'International', percent: 20, color: 'bg-green-500' },
  { label: 'Punakha', percent: 12, color: 'bg-purple-500' },
  { label: 'Others', percent: 11, color: 'bg-gray-400' },
];

const competitors = [
  { name: 'Taj Tashi', views: 4520, rating: 4.7, reviews: 12, rank: 1 },
  { name: 'Le Meridien Thimphu', views: 3890, rating: 4.5, reviews: 18, rank: 2 },
  { name: 'Amankora Thimphu', views: 3450, rating: 4.9, reviews: 9, rank: 3 },
  { name: 'Terma Linca Resort', views: 2870, rating: 4.3, reviews: 22, rank: 4 },
  { name: 'Zhiwaling Heritage', views: 2340, rating: 4.4, reviews: 15, rank: 5 },
];

const metrics = [
  { label: 'Total Views', value: '4,520', change: 12.5, icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Clicks', value: '890', change: 8.3, icon: MousePointerClick, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Total Leads', value: '89', change: 22.1, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Conversions', value: '34', change: -3.2, icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function DashboardAnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange>('30d');

  const maxBarValue = Math.max(...viewsData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            </div>
            <p className="text-gray-500 text-sm">Track how your business listing is performing</p>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
            {dateRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setDateRange(range.value)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${
                  dateRange === range.value
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${metric.bg} flex items-center justify-center`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <span
                  className={`text-sm font-medium flex items-center gap-0.5 ${
                    metric.change >= 0 ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {metric.change >= 0 ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {Math.abs(metric.change)}%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Views Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Views Over Time</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              Last 7 days
            </div>
          </div>
          <div className="flex items-end gap-3 h-48">
            {viewsData.map((item) => (
              <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-gray-600">{item.value}</span>
                <div className="w-full relative">
                  <div
                    className="w-full bg-orange-400 hover:bg-orange-500 rounded-t-md transition-colors"
                    style={{ height: `${(item.value / maxBarValue) * 160}px` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Top Search Queries */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Search Queries</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    <th className="pb-3 pr-4">Query</th>
                    <th className="pb-3 pr-4 text-right">Impressions</th>
                    <th className="pb-3 pr-4 text-right">Clicks</th>
                    <th className="pb-3 text-right">CTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {topSearchQueries.map((row, i) => (
                    <tr key={i} className="text-sm">
                      <td className="py-3 pr-4 text-gray-700 font-medium">{row.query}</td>
                      <td className="py-3 pr-4 text-right text-gray-600">{row.impressions.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-right text-gray-600">{row.clicks.toLocaleString()}</td>
                      <td className="py-3 text-right font-medium text-gray-900">{row.ctr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Visitor Demographics */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Visitor Demographics</h3>

            {/* Pie chart placeholder using stacked horizontal bar */}
            <div className="flex h-6 rounded-full overflow-hidden mb-6">
              {visitorDemographics.map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} transition-all`}
                  style={{ width: `${item.percent}%` }}
                  title={`${item.label}: ${item.percent}%`}
                />
              ))}
            </div>

            <div className="space-y-3">
              {visitorDemographics.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-10 text-right">{item.percent}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Competitor Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3 pr-4">Rank</th>
                  <th className="pb-3 pr-4">Business</th>
                  <th className="pb-3 pr-4 text-right">Views</th>
                  <th className="pb-3 pr-4 text-right">Rating</th>
                  <th className="pb-3 text-right">Reviews</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {competitors.map((comp) => (
                  <tr
                    key={comp.rank}
                    className={`text-sm ${comp.rank === 1 ? 'bg-orange-50' : ''}`}
                  >
                    <td className="py-3 pr-4">
                      <span
                        className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-xs font-bold ${
                          comp.rank === 1
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {comp.rank}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-medium text-gray-900">
                      {comp.name}
                      {comp.rank === 1 && (
                        <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-semibold">
                          You
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-right text-gray-600">{comp.views.toLocaleString()}</td>
                    <td className="py-3 pr-4 text-right">
                      <span className="inline-flex items-center gap-1 text-gray-900 font-medium">
                        <span className="text-amber-400">&#9733;</span>
                        {comp.rating}
                      </span>
                    </td>
                    <td className="py-3 text-right text-gray-600">{comp.reviews}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
