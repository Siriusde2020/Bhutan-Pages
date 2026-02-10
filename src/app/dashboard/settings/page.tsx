'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  ArrowLeft,
  Building2,
  Phone,
  Clock,
  User,
  CreditCard,
  Upload,
  Globe,
  Mail,
  MessageCircle,
  Save,
  CheckCircle2,
  Crown,
  X,
  Camera,
  Image as ImageIcon,
} from 'lucide-react';
import { Business } from '@/types';

type SettingsTab = 'profile' | 'contact' | 'hours' | 'account' | 'billing';

const tabs: { id: SettingsTab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: 'Business Profile', icon: Building2 },
  { id: 'contact', label: 'Contact Info', icon: Phone },
  { id: 'hours', label: 'Opening Hours', icon: Clock },
  { id: 'account', label: 'Account', icon: User },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const paymentHistory = [
  { id: 1, date: 'Jan 15, 2026', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 2, date: 'Dec 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 3, date: 'Nov 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 4, date: 'Oct 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
];

export default function DashboardSettingsPage() {
  const { user, loading, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [myBusiness, setMyBusiness] = useState<Business | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  // Profile State
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [businessLogo, setBusinessLogo] = useState('');
  const [businessPhotos, setBusinessPhotos] = useState<string[]>([]);

  // Contact State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [website, setWebsite] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');

  // Hours State
  const [hours, setHours] = useState(
    daysOfWeek.map((day) => ({
      day,
      isOpen: day !== 'Sunday',
      open: '09:00',
      close: '17:00',
    }))
  );

  // Account State
  const [accountName, setAccountName] = useState('');
  const [accountEmail, setAccountEmail] = useState('');
  const [accountPhone, setAccountPhone] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [reviewAlerts, setReviewAlerts] = useState(true);
  const [leadAlerts, setLeadAlerts] = useState(true);

  useEffect(() => {
    if (!loading && !user) window.location.href = '/auth/login';
  }, [user, loading]);

  useEffect(() => {
    if (user) {
      setAccountName(user.name || '');
      setAccountEmail(user.email || '');
      setAccountPhone(user.phone || '');
      setEmailNotifications(user.preferences?.notifications ?? true);
    }
  }, [user]);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const res = await fetch('/api/businesses?limit=100');
        if (res.ok) {
          const data = await res.json();
          const biz = (data.businesses || []).find(
            (b: Business) => b.ownerId === user?.id || b.adminIds?.includes(user?.id || '')
          );
          if (biz) {
            setMyBusiness(biz);
            setBusinessName(biz.name || '');
            setDescription(biz.description || '');
            setCategory(biz.categoryId || '');
            setBusinessLogo(biz.logo || '');
            setBusinessPhotos(biz.photos || []);
            setPhoneNumber(biz.phone || '');
            setEmailAddr(biz.email || '');
            setWebsite(biz.website || '');
            setWhatsapp(biz.whatsapp || '');
            setFacebook(biz.socialLinks?.facebook || '');
            setInstagram(biz.socialLinks?.instagram || '');
            if (biz.openingHours) {
              const dayMap: Record<string, string> = { Monday: 'monday', Tuesday: 'tuesday', Wednesday: 'wednesday', Thursday: 'thursday', Friday: 'friday', Saturday: 'saturday', Sunday: 'sunday' };
              setHours(daysOfWeek.map(day => {
                const key = dayMap[day] as keyof typeof biz.openingHours;
                const dh = biz.openingHours[key];
                return { day, isOpen: dh?.isOpen ?? true, open: dh?.open || '09:00', close: dh?.close || '17:00' };
              }));
            }
          }
        }
      } catch { /* silent */ }
    }
    if (user) fetchBusiness();
  }, [user]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBusinessLogo(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBusinessPhotos(prev => [...prev, reader.result as string]);
    reader.readAsDataURL(file);
  };

  const showSaved = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const handleSaveProfile = async () => {
    if (!myBusiness) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/businesses/${myBusiness.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: businessName, description, logo: businessLogo, photos: businessPhotos }),
      });
      if (res.ok) { const data = await res.json(); setMyBusiness(data.business); showSaved(); }
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const handleSaveContact = async () => {
    if (!myBusiness) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/businesses/${myBusiness.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber, email: emailAddr, website, whatsapp, socialLinks: { facebook, instagram } }),
      });
      if (res.ok) showSaved();
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const handleSaveHours = async () => {
    if (!myBusiness) return;
    setSaving(true);
    const dayMap: Record<string, string> = { Monday: 'monday', Tuesday: 'tuesday', Wednesday: 'wednesday', Thursday: 'thursday', Friday: 'friday', Saturday: 'saturday', Sunday: 'sunday' };
    const openingHours: Record<string, { isOpen: boolean; open?: string; close?: string }> = {};
    hours.forEach(h => { openingHours[dayMap[h.day]] = h.isOpen ? { isOpen: true, open: h.open, close: h.close } : { isOpen: false }; });
    try {
      const res = await fetch(`/api/businesses/${myBusiness.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ openingHours }),
      });
      if (res.ok) showSaved();
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const handleSaveAccount = async () => {
    setSaving(true);
    try {
      await updateUser({ name: accountName, phone: accountPhone, preferences: { language: 'en', notifications: emailNotifications, newsletter: true, darkMode: false } });
      showSaved();
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const toggleDayOpen = (index: number) => setHours(prev => prev.map((h, i) => (i === index ? { ...h, isOpen: !h.isOpen } : h)));
  const updateHoursField = (index: number, field: 'open' | 'close', value: string) => setHours(prev => prev.map((h, i) => (i === index ? { ...h, [field]: value } : h)));

  if (loading || !user) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-500 text-sm">Manage your business profile and account settings</p>
            </div>
          </div>
          {saved && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" /> Changes saved!
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-56 flex-shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible bg-white rounded-xl border border-gray-200 p-2">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap ${activeTab === tab.id ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                  <tab.icon className="w-4 h-4 flex-shrink-0" />{tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Business Profile</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Logo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300">
                        {businessLogo ? <img src={businessLogo} alt="Logo" className="w-full h-full object-cover" /> : <Camera className="w-8 h-8 text-gray-400" />}
                      </div>
                      <div>
                        <input type="file" ref={logoInputRef} accept="image/*" className="hidden" onChange={handleLogoUpload} />
                        <button onClick={() => logoInputRef.current?.click()} className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition">Upload Logo</button>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name</label>
                    <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 resize-none" />
                    <p className="text-xs text-gray-400 mt-1">{description.length}/500 characters</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 bg-white">
                      <option value="cat-1">Hotels & Accommodation</option><option value="cat-2">Restaurants & Food</option><option value="cat-3">Tour & Travel</option><option value="cat-4">Construction & Real Estate</option><option value="cat-5">Technology & IT</option><option value="cat-6">Education & Training</option><option value="cat-7">Healthcare & Wellness</option><option value="cat-8">Financial Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Photos</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {businessPhotos.map((photo, i) => (
                        <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden group">
                          {(photo.startsWith('data:') || photo.startsWith('http')) ? <img src={photo} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" /> : <ImageIcon className="w-6 h-6 text-gray-400" />}
                          <button onClick={() => setBusinessPhotos(prev => prev.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><X className="w-3 h-3" /></button>
                        </div>
                      ))}
                      <input type="file" ref={photoInputRef} accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                      <button onClick={() => photoInputRef.current?.click()} className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 transition">
                        <Upload className="w-6 h-6 mb-1" /><span className="text-xs">Upload</span>
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={handleSaveProfile} disabled={saving} className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition">
                  <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5"><span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> Phone Number</span></label><input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5"><span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> Email</span></label><input type="email" value={emailAddr} onChange={e => setEmailAddr(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5"><span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Website</span></label><input type="url" value={website} onChange={e => setWebsite(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5"><span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> WhatsApp</span></label><input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div className="border-t border-gray-100 pt-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Social Media Links</h3>
                    <div className="space-y-4">
                      <div><label className="block text-sm text-gray-600 mb-1">Facebook</label><input type="url" value={facebook} onChange={e => setFacebook(e.target.value)} placeholder="https://facebook.com/..." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400" /></div>
                      <div><label className="block text-sm text-gray-600 mb-1">Instagram</label><input type="url" value={instagram} onChange={e => setInstagram(e.target.value)} placeholder="https://instagram.com/..." className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400" /></div>
                    </div>
                  </div>
                </div>
                <button onClick={handleSaveContact} disabled={saving} className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition">
                  <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}

            {activeTab === 'hours' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Opening Hours</h2>
                <div className="space-y-3">
                  {hours.map((h, index) => (
                    <div key={h.day} className={`flex items-center gap-4 p-3 rounded-lg border ${h.isOpen ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'}`}>
                      <span className="text-sm font-medium text-gray-900 w-24">{h.day}</span>
                      <button onClick={() => toggleDayOpen(index)} className={`relative w-11 h-6 rounded-full transition-colors ${h.isOpen ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${h.isOpen ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </button>
                      {h.isOpen ? (
                        <div className="flex items-center gap-2 flex-1">
                          <input type="time" value={h.open} onChange={e => updateHoursField(index, 'open', e.target.value)} className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
                          <span className="text-gray-400 text-sm">to</span>
                          <input type="time" value={h.close} onChange={e => updateHoursField(index, 'close', e.target.value)} className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
                        </div>
                      ) : <span className="text-sm text-gray-400 italic">Closed</span>}
                    </div>
                  ))}
                </div>
                <button onClick={handleSaveHours} disabled={saving} className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition">
                  <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}

            {activeTab === 'account' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xl font-bold overflow-hidden">
                        {user?.avatar ? <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" /> : user?.name?.charAt(0).toUpperCase()}
                      </div>
                      <button onClick={() => {
                        const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
                        input.onchange = (e) => { const file = (e.target as HTMLInputElement).files?.[0]; if (file) { const reader = new FileReader(); reader.onload = () => updateUser({ avatar: reader.result as string }); reader.readAsDataURL(file); } };
                        input.click();
                      }} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">Change Photo</button>
                    </div>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label><input type="text" value={accountName} onChange={e => setAccountName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email (read-only)</label><input type="email" value={accountEmail} disabled className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-500 bg-gray-50" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label><input type="tel" value={accountPhone} onChange={e => setAccountPhone(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900" /></div>
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Email notifications', value: emailNotifications, setter: setEmailNotifications },
                        { label: 'SMS notifications', value: smsNotifications, setter: setSmsNotifications },
                        { label: 'New review alerts', value: reviewAlerts, setter: setReviewAlerts },
                        { label: 'Lead & inquiry alerts', value: leadAlerts, setter: setLeadAlerts },
                      ].map(pref => (
                        <div key={pref.label} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{pref.label}</span>
                          <button onClick={() => pref.setter(!pref.value)} className={`relative w-11 h-6 rounded-full transition-colors ${pref.value ? 'bg-orange-500' : 'bg-gray-300'}`}>
                            <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${pref.value ? 'translate-x-5' : 'translate-x-0.5'}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button onClick={handleSaveAccount} disabled={saving} className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition">
                  <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Billing & Subscription</h2>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1"><Crown className="w-5 h-5" /><span className="font-bold text-lg">Premium Plan</span></div>
                      <p className="text-orange-100 text-sm">Nu. 2,500/month - Billed monthly</p>
                      <p className="text-orange-200 text-xs mt-2">Next billing date: Feb 15, 2026</p>
                    </div>
                    <Link href="/pricing" className="px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition text-sm">Upgrade Plan</Link>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Your Plan Includes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Priority listing placement', 'Advanced analytics dashboard', 'Respond to reviews', 'Post job listings (5/month)', 'Create deals & offers', 'Remove competitor ads', 'Verified badge', 'Phone & email support'].map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Payment History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead><tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100"><th className="pb-3 pr-4">Date</th><th className="pb-3 pr-4">Plan</th><th className="pb-3 pr-4">Amount</th><th className="pb-3">Status</th></tr></thead>
                      <tbody className="divide-y divide-gray-50">
                        {paymentHistory.map(p => (
                          <tr key={p.id} className="text-sm"><td className="py-3 pr-4 text-gray-600">{p.date}</td><td className="py-3 pr-4 text-gray-700">{p.plan}</td><td className="py-3 pr-4 font-medium text-gray-900">{p.amount}</td><td className="py-3"><span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">{p.status}</span></td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
