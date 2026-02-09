'use client';

import { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';

type SettingsTab = 'profile' | 'contact' | 'hours' | 'account' | 'billing';

const tabs: { id: SettingsTab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: 'Business Profile', icon: Building2 },
  { id: 'contact', label: 'Contact Info', icon: Phone },
  { id: 'hours', label: 'Opening Hours', icon: Clock },
  { id: 'account', label: 'Account', icon: User },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const paymentHistory = [
  { id: 1, date: 'Jan 15, 2026', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 2, date: 'Dec 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 3, date: 'Nov 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
  { id: 4, date: 'Oct 15, 2025', amount: 'Nu. 2,500', plan: 'Premium Monthly', status: 'Paid' },
];

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [saved, setSaved] = useState(false);

  // Profile State
  const [businessName, setBusinessName] = useState('Taj Tashi');
  const [description, setDescription] = useState(
    'Taj Tashi is a five-star luxury hotel located in the heart of Thimphu, blending traditional Bhutanese architecture with world-class hospitality.'
  );
  const [category, setCategory] = useState('Hotels & Accommodation');
  const [subcategories, setSubcategories] = useState(['Luxury Hotels', 'Resorts']);

  // Contact State
  const [phoneNumber, setPhoneNumber] = useState('+975-2-336699');
  const [email, setEmail] = useState('reservations@tajtashi.com');
  const [website, setWebsite] = useState('https://www.tajhotels.com');
  const [whatsapp, setWhatsapp] = useState('+975-17-336699');
  const [facebook, setFacebook] = useState('https://facebook.com/tajtashi');
  const [instagram, setInstagram] = useState('https://instagram.com/tajtashi');

  // Hours State
  const [hours, setHours] = useState(
    days.map((day) => ({
      day,
      isOpen: day !== 'Sunday',
      open: '00:00',
      close: '23:59',
    }))
  );

  // Account State
  const [accountEmail, setAccountEmail] = useState('karma@tajtashi.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [reviewAlerts, setReviewAlerts] = useState(true);
  const [leadAlerts, setLeadAlerts] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleDayOpen = (index: number) => {
    setHours((prev) =>
      prev.map((h, i) => (i === index ? { ...h, isOpen: !h.isOpen } : h))
    );
  };

  const updateHours = (index: number, field: 'open' | 'close', value: string) => {
    setHours((prev) =>
      prev.map((h, i) => (i === index ? { ...h, [field]: value } : h))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-500 text-sm">Manage your business profile and account settings</p>
            </div>
          </div>

          {saved && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Changes saved!
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible bg-white rounded-xl border border-gray-200 p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-orange-50 text-orange-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            {/* Business Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Business Profile</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name</label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">{description.length}/500 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 bg-white"
                    >
                      <option>Hotels & Accommodation</option>
                      <option>Restaurants & Food</option>
                      <option>Tour & Travel</option>
                      <option>Construction & Real Estate</option>
                      <option>Technology & IT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subcategories</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full"
                        >
                          {sub}
                          <button
                            onClick={() => setSubcategories((prev) => prev.filter((s) => s !== sub))}
                            className="hover:text-orange-900"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <select
                      onChange={(e) => {
                        if (e.target.value && !subcategories.includes(e.target.value)) {
                          setSubcategories((prev) => [...prev, e.target.value]);
                        }
                        e.target.value = '';
                      }}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>Add subcategory...</option>
                      <option>Budget Hotels</option>
                      <option>Guesthouses</option>
                      <option>Homestays</option>
                      <option>Lodges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Photos</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs"
                        >
                          Photo {i}
                        </div>
                      ))}
                      <button className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 transition">
                        <Upload className="w-6 h-6 mb-1" />
                        <span className="text-xs">Upload</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Contact Info Tab */}
            {activeTab === 'contact' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> Email Address</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Website</span>
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> WhatsApp</span>
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Social Media Links</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Facebook</label>
                        <input
                          type="url"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
                          placeholder="https://facebook.com/..."
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Instagram</label>
                        <input
                          type="url"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          placeholder="https://instagram.com/..."
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Opening Hours Tab */}
            {activeTab === 'hours' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Opening Hours</h2>
                <div className="space-y-3">
                  {hours.map((h, index) => (
                    <div
                      key={h.day}
                      className={`flex items-center gap-4 p-3 rounded-lg border ${
                        h.isOpen ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-900 w-24">{h.day}</span>

                      {/* Toggle */}
                      <button
                        onClick={() => toggleDayOpen(index)}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          h.isOpen ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                            h.isOpen ? 'translate-x-5' : 'translate-x-0.5'
                          }`}
                        />
                      </button>

                      {h.isOpen ? (
                        <div className="flex items-center gap-2 flex-1">
                          <input
                            type="time"
                            value={h.open}
                            onChange={(e) => updateHours(index, 'open', e.target.value)}
                            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                          />
                          <span className="text-gray-400 text-sm">to</span>
                          <input
                            type="time"
                            value={h.close}
                            onChange={(e) => updateHours(index, 'close', e.target.value)}
                            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                          />
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400 italic">Closed</span>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSave}
                  className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Account Tab */}
            {activeTab === 'account' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Account Email</label>
                    <input
                      type="email"
                      value={accountEmail}
                      onChange={(e) => setAccountEmail(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Current Password</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">New Password</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Email notifications', value: emailNotifications, setter: setEmailNotifications },
                        { label: 'SMS notifications', value: smsNotifications, setter: setSmsNotifications },
                        { label: 'New review alerts', value: reviewAlerts, setter: setReviewAlerts },
                        { label: 'Lead & inquiry alerts', value: leadAlerts, setter: setLeadAlerts },
                      ].map((pref) => (
                        <div key={pref.label} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{pref.label}</span>
                          <button
                            onClick={() => pref.setter(!pref.value)}
                            className={`relative w-11 h-6 rounded-full transition-colors ${
                              pref.value ? 'bg-orange-500' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                                pref.value ? 'translate-x-5' : 'translate-x-0.5'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">Billing & Subscription</h2>

                {/* Current Plan */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Crown className="w-5 h-5" />
                        <span className="font-bold text-lg">Premium Plan</span>
                      </div>
                      <p className="text-orange-100 text-sm">Nu. 2,500/month - Billed monthly</p>
                      <p className="text-orange-200 text-xs mt-2">Next billing date: Feb 15, 2026</p>
                    </div>
                    <button className="px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition text-sm">
                      Upgrade Plan
                    </button>
                  </div>
                </div>

                {/* Plan Features */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Your Plan Includes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Priority listing placement',
                      'Advanced analytics dashboard',
                      'Respond to reviews',
                      'Post job listings (5/month)',
                      'Create deals & offers',
                      'Remove competitor ads',
                      'Verified badge',
                      'Phone & email support',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment History */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Payment History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                          <th className="pb-3 pr-4">Date</th>
                          <th className="pb-3 pr-4">Plan</th>
                          <th className="pb-3 pr-4">Amount</th>
                          <th className="pb-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {paymentHistory.map((payment) => (
                          <tr key={payment.id} className="text-sm">
                            <td className="py-3 pr-4 text-gray-600">{payment.date}</td>
                            <td className="py-3 pr-4 text-gray-700">{payment.plan}</td>
                            <td className="py-3 pr-4 font-medium text-gray-900">{payment.amount}</td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                                {payment.status}
                              </span>
                            </td>
                          </tr>
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
