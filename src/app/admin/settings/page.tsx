'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Settings, Save, CheckCircle2, Globe, Shield, Database, Mail, Bell, Palette } from 'lucide-react';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [siteName, setSiteName] = useState('BhutanBiz');
  const [siteDescription, setSiteDescription] = useState("Bhutan's #1 Business & Services Directory");
  const [supportEmail, setSupportEmail] = useState('support@bhutanbiz.com');
  const [maxPhotos, setMaxPhotos] = useState('20');
  const [autoApprove, setAutoApprove] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#FF6B00');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link>
            <span>/</span><span>Settings</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Platform Settings</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {saved && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Settings saved successfully!
          </div>
        )}

        <div className="space-y-6">
          {/* General */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-gray-400" /> General</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                <input type="text" value={siteName} onChange={e => setSiteName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
                <input type="text" value={siteDescription} onChange={e => setSiteDescription(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                <input type="email" value={supportEmail} onChange={e => setSupportEmail(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Palette className="w-4 h-4" /> Primary Color</label>
                <div className="flex items-center gap-2">
                  <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="w-10 h-10 rounded border border-gray-300 cursor-pointer" />
                  <input type="text" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm w-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Business Settings */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Database className="w-5 h-5 text-gray-400" /> Business Listings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Photos Per Business</label>
                <input type="number" value={maxPhotos} onChange={e => setMaxPhotos(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none max-w-xs" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Auto-approve new listings</span>
                  <p className="text-xs text-gray-500">New business listings will be automatically published without review</p>
                </div>
                <button onClick={() => setAutoApprove(!autoApprove)} className={`relative w-11 h-6 rounded-full transition-colors ${autoApprove ? 'bg-orange-500' : 'bg-gray-300'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${autoApprove ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-gray-400" /> Security & Access</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Maintenance Mode</span>
                  <p className="text-xs text-gray-500">Temporarily disable public access to the platform</p>
                </div>
                <button onClick={() => setMaintenanceMode(!maintenanceMode)} className={`relative w-11 h-6 rounded-full transition-colors ${maintenanceMode ? 'bg-red-500' : 'bg-gray-300'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${maintenanceMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Bell className="w-5 h-5 text-gray-400" /> Notifications</h2>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <p className="text-xs text-gray-500">Send email alerts for new claims, reviews, and sign-ups</p>
              </div>
              <button onClick={() => setEmailNotifs(!emailNotifs)} className={`relative w-11 h-6 rounded-full transition-colors ${emailNotifs ? 'bg-orange-500' : 'bg-gray-300'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${emailNotifs ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>
          </div>

          <button onClick={handleSave} className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            <Save className="w-4 h-4" /> Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
}
