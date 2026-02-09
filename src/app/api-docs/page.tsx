import Link from 'next/link';
import { Code, Key, Zap, Shield } from 'lucide-react';

export const metadata = { title: 'API Documentation' };

const endpoints = [
  { method: 'GET', path: '/api/businesses', desc: 'List all businesses with pagination and filtering', params: 'page, limit, category, dzongkhag, rating, verified, sort', response: '{ "businesses": [...], "total": 8945, "page": 1, "totalPages": 745 }' },
  { method: 'GET', path: '/api/businesses/:id', desc: 'Get detailed business profile by ID or slug', params: 'id (path)', response: '{ "business": { "id": "biz-1", "name": "Taj Tashi", "rating": 4.7, ... } }' },
  { method: 'GET', path: '/api/categories', desc: 'List all business categories with subcategories', params: 'featured (boolean)', response: '{ "categories": [{ "id": "cat-1", "name": "Hotels", "businessCount": 535, ... }] }' },
  { method: 'GET', path: '/api/locations', desc: 'List all dzongkhags with gewogs and business counts', params: 'sort (businesses|name)', response: '{ "dzongkhags": [{ "id": "dz-1", "name": "Thimphu", "businessCount": 2847, ... }] }' },
  { method: 'GET', path: '/api/search', desc: 'Search businesses by query with fuzzy matching', params: 'q (required), category, dzongkhag, rating, limit', response: '{ "results": [...], "total": 42, "suggestions": ["hotels", "hotel booking"] }' },
  { method: 'GET', path: '/api/reviews/:businessId', desc: 'Get reviews for a specific business', params: 'businessId (path), page, limit, sort', response: '{ "reviews": [...], "avgRating": 4.5, "total": 23 }' },
  { method: 'GET', path: '/api/analytics/overview', desc: 'Platform-level analytics (requires API key)', params: 'period (monthly|yearly)', response: '{ "totalBusinesses": 8945, "categoryGrowth": [...], "regionDensity": [...] }' },
  { method: 'POST', path: '/api/businesses', desc: 'Submit a new business listing (requires auth)', params: 'name, description, category, dzongkhag, phone, email, ...', response: '{ "business": { "id": "biz-new", "status": "pending" } }' },
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">API</span></div>
          <div className="flex items-center gap-3"><Code className="w-8 h-8 text-green-400" /><h1 className="text-3xl font-bold">BhutanBiz API</h1></div>
          <p className="mt-2 text-gray-400">Programmatic access to Bhutan&apos;s most comprehensive business directory</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl border p-6"><Key className="w-8 h-8 text-orange-600 mb-3" /><h3 className="font-bold text-gray-900 mb-2">Authentication</h3><p className="text-sm text-gray-600">All API requests require an API key passed via the <code className="bg-gray-100 px-1 rounded text-xs">X-API-Key</code> header.</p></div>
          <div className="bg-white rounded-xl border p-6"><Zap className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-bold text-gray-900 mb-2">Rate Limits</h3><p className="text-sm text-gray-600">Free: 100 req/day. Premium: 10,000 req/day. Enterprise: Unlimited. Rate limit headers included in responses.</p></div>
          <div className="bg-white rounded-xl border p-6"><Shield className="w-8 h-8 text-green-600 mb-3" /><h3 className="font-bold text-gray-900 mb-2">Data Format</h3><p className="text-sm text-gray-600">All responses are in JSON format. UTF-8 encoding. Dzongkha text supported. ISO 8601 dates.</p></div>
        </div>

        {/* Base URL */}
        <div className="bg-gray-900 rounded-xl p-5 mb-10">
          <p className="text-sm text-gray-400 mb-1">Base URL</p>
          <code className="text-green-400 text-lg font-mono">https://api.bhutanbiz.com/v1</code>
        </div>

        {/* Endpoints */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Endpoints</h2>
        <div className="space-y-6">
          {endpoints.map((ep, i) => (
            <div key={i} className="bg-white rounded-xl border overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b">
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${ep.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{ep.method}</span>
                <code className="font-mono text-sm text-gray-900">{ep.path}</code>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{ep.desc}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Parameters</p>
                  <p className="text-sm text-gray-600">{ep.params}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Sample Response</p>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">{ep.response}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Need API Access?</h2>
          <p className="text-orange-100 mb-6">Get started with our free tier or upgrade for higher limits and premium data</p>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50">View Pricing</Link>
            <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10">Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
