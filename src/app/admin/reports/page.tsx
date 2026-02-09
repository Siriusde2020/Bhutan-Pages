'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, FileText, Download, Calendar, BarChart3, PieChart, TrendingUp, Building2 } from 'lucide-react';

const reportTypes = [
  { id: 'census', name: 'Business Census Report', icon: Building2, desc: 'Comprehensive overview of all registered businesses by category, location, and type' },
  { id: 'category', name: 'Category Analysis Report', icon: PieChart, desc: 'Detailed breakdown of business categories, growth trends, and market share' },
  { id: 'regional', name: 'Regional Business Report', icon: BarChart3, desc: 'Dzongkhag-level business distribution, density, and economic indicators' },
  { id: 'revenue', name: 'Revenue & Performance Report', icon: TrendingUp, desc: 'Platform revenue metrics, subscription stats, and monetization analysis' },
];

export default function AdminReportsPage() {
  const [selectedReport, setSelectedReport] = useState('census');
  const [dateRange, setDateRange] = useState('monthly');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Reports</span></div>
          <div className="flex items-center gap-3"><FileText className="w-6 h-6" /><h1 className="text-2xl font-bold">Generate Reports</h1></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {reportTypes.map(r => (
            <button key={r.id} onClick={() => setSelectedReport(r.id)} className={`text-left p-5 rounded-xl border transition-all ${selectedReport === r.id ? 'bg-orange-50 border-orange-300 ring-2 ring-orange-200' : 'bg-white hover:border-gray-300'}`}>
              <div className="flex items-center gap-3 mb-2"><r.icon className={`w-5 h-5 ${selectedReport === r.id ? 'text-orange-600' : 'text-gray-400'}`} /><h3 className="font-semibold text-gray-900">{r.name}</h3></div>
              <p className="text-sm text-gray-600">{r.desc}</p>
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Report Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select value={dateRange} onChange={e => setDateRange(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm"><option value="weekly">Last 7 Days</option><option value="monthly">Last 30 Days</option><option value="quarterly">Last Quarter</option><option value="yearly">Last Year</option><option value="all">All Time</option></select>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
              <div className="flex gap-2"><button className="px-4 py-2 border rounded-lg text-sm font-medium bg-gray-900 text-white">PDF</button><button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">CSV</button><button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Excel</button></div>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700"><Download className="w-4 h-4" /> Generate Report</button>
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Recent Reports</h3>
            <div className="space-y-2">
              {['Business Census - January 2026', 'Category Analysis - Q4 2025', 'Regional Report - December 2025'].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3"><FileText className="w-4 h-4 text-gray-400" /><span className="text-sm text-gray-700">{r}</span></div>
                  <button className="text-sm text-orange-600 hover:underline flex items-center gap-1"><Download className="w-3 h-3" />Download</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
