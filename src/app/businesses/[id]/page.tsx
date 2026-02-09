'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Globe, Shield, Clock, Share2, ChevronRight, CheckCircle, Building2, Calendar, DollarSign, Users, Award, ThumbsUp, MessageSquare, Briefcase, FileText, ExternalLink, Heart } from 'lucide-react';
import { getBusinessBySlug, getBusinessById, getRelatedBusinesses } from '@/data/businesses';
import { getReviewsByBusiness, getJobsByBusiness } from '@/data/content';
import { getCategoryById } from '@/data/categories';

export default function BusinessProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const business = getBusinessBySlug(id) || getBusinessById(id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Business Not Found</h1>
          <p className="text-gray-500 mb-6">The business you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/businesses" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700">Browse Businesses</Link>
        </div>
      </div>
    );
  }

  const category = getCategoryById(business.categoryId);
  const reviews = getReviewsByBusiness(business.id);
  const jobs = getJobsByBusiness(business.id);
  const related = getRelatedBusinesses(business.id, 4);
  const tabs = ['overview', 'services', 'reviews', 'jobs'];

  const trustColor = business.trustScore >= 80 ? 'text-green-600' : business.trustScore >= 60 ? 'text-yellow-600' : 'text-red-600';
  const trustBg = business.trustScore >= 80 ? 'bg-green-50 border-green-200' : business.trustScore >= 60 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200';

  const badgeColors: Record<string, string> = {
    government: 'bg-purple-100 text-purple-800',
    trusted: 'bg-green-100 text-green-800',
    premium: 'bg-amber-100 text-amber-800',
    gold: 'bg-yellow-100 text-yellow-800',
  };

  const ratingBreakdown = [5, 4, 3, 2, 1].map(star => {
    const count = reviews.filter(r => Math.round(r.rating) === star).length;
    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { star, count, pct };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Banner */}
      <div className="bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-3 h-3" />
            <Link href="/businesses" className="hover:text-white">Businesses</Link><ChevronRight className="w-3 h-3" />
            <span className="text-white">{business.name}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl lg:text-4xl font-bold">{business.name}</h1>
                {business.verificationStatus === 'verified' && <CheckCircle className="w-6 h-6 text-green-400" />}
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {business.verificationBadge && (
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeColors[business.verificationBadge] || 'bg-blue-100 text-blue-800'}`}>
                    {business.verificationBadge === 'government' ? 'Government Verified' : business.verificationBadge === 'trusted' ? 'Trusted Business' : business.verificationBadge === 'premium' ? 'Premium Verified' : 'Gold Member'}
                  </span>
                )}
                {business.isPremium && <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">Premium</span>}
                {category && <span className="text-sm text-gray-300">{category.name}</span>}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-white font-semibold">{business.rating}</span> ({business.reviewCount} reviews)</div>
                <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{business.city}, {business.dzongkhag}</div>
              </div>
            </div>
            <div className={`${trustBg} border rounded-xl px-5 py-3 text-center`}>
              <div className={`text-3xl font-bold ${trustColor}`}>{business.trustScore}</div>
              <div className="text-xs text-gray-600 font-medium">Trust Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3">
            {business.phone && <a href={`tel:${business.phone}`} className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"><Phone className="w-4 h-4" /> Call</a>}
            {business.email && <a href={`mailto:${business.email}`} className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"><Mail className="w-4 h-4" /> Email</a>}
            {business.whatsapp && <a href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"><MessageSquare className="w-4 h-4" /> WhatsApp</a>}
            {business.website && <a href={business.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Globe className="w-4 h-4" /> Website</a>}
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><MapPin className="w-4 h-4" /> Directions</button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Heart className="w-4 h-4" /> Save</button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Share2 className="w-4 h-4" /> Share</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-3 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab} {tab === 'reviews' ? `(${reviews.length})` : tab === 'jobs' ? `(${jobs.length})` : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {business.aiSummary && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2"><Award className="w-4 h-4 text-blue-600" /><span className="text-sm font-semibold text-blue-800">AI Summary</span></div>
                    <p className="text-sm text-blue-900">{business.aiSummary}</p>
                  </div>
                )}
                <div className="bg-white rounded-xl border p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">About {business.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{business.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {business.keywords.map(k => <span key={k} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{k}</span>)}
                  </div>
                </div>
                <div className="bg-white rounded-xl border p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Clock className="w-5 h-5" /> Opening Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(business.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <span className="text-sm font-medium text-gray-700 capitalize">{day}</span>
                        <span className={`text-sm ${hours.isOpen ? 'text-gray-900' : 'text-red-500'}`}>{hours.isOpen ? `${hours.open} - ${hours.close}` : 'Closed'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {business.foundedYear && (
                  <div className="bg-white rounded-xl border p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Business Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-500">Founded</span><p className="font-medium text-gray-900">{business.foundedYear}</p></div>
                      <div><span className="text-gray-500">Employees</span><p className="font-medium text-gray-900">{business.employees || 'N/A'}</p></div>
                      <div><span className="text-gray-500">Type</span><p className="font-medium text-gray-900 capitalize">{business.type.replace(/_/g, ' ')}</p></div>
                      <div><span className="text-gray-500">Ownership</span><p className="font-medium text-gray-900 capitalize">{business.ownershipType}</p></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                  <div className="space-y-4">
                    {business.servicesOffered.map((s, i) => (
                      <div key={i} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                        <div><h4 className="font-medium text-gray-900">{s.name}</h4>{s.description && <p className="text-sm text-gray-600 mt-1">{s.description}</p>}</div>
                        <div className="text-right">{s.price && <span className="font-semibold text-orange-600">{s.price}</span>}{s.duration && <p className="text-xs text-gray-500">{s.duration}</p>}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {business.products.length > 0 && (
                  <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {business.products.map((p, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900">{p.name}</h4>
                          {p.description && <p className="text-sm text-gray-600 mt-1">{p.description}</p>}
                          {p.price && <p className="text-sm font-semibold text-orange-600 mt-2">{p.price}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border p-6">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900">{business.rating}</div>
                      <div className="flex items-center justify-center gap-1 mt-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.round(business.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />)}</div>
                      <p className="text-sm text-gray-500 mt-1">{business.reviewCount} reviews</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {ratingBreakdown.map(({ star, count, pct }) => (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-sm text-gray-600 w-6">{star}★</span>
                          <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} /></div>
                          <span className="text-xs text-gray-500 w-6">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {reviews.map(review => (
                  <div key={review.id} className="bg-white rounded-xl border p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{review.userName}</span>
                          {review.verified && <CheckCircle className="w-3.5 h-3.5 text-green-600" />}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />)}</div>
                          <span className="text-xs text-gray-500">{review.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                    <p className="text-sm text-gray-700">{review.content}</p>
                    {review.pros && review.pros.length > 0 && <div className="mt-3"><p className="text-xs font-medium text-green-700">Pros:</p><div className="flex flex-wrap gap-1 mt-1">{review.pros.map(p => <span key={p} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded">{p}</span>)}</div></div>}
                    {review.cons && review.cons.length > 0 && <div className="mt-2"><p className="text-xs font-medium text-red-700">Cons:</p><div className="flex flex-wrap gap-1 mt-1">{review.cons.map(c => <span key={c} className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded">{c}</span>)}</div></div>}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                      <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"><ThumbsUp className="w-3 h-3" /> Helpful ({review.helpful})</button>
                    </div>
                    {review.ownerResponse && (
                      <div className="mt-3 ml-4 pl-4 border-l-2 border-orange-200 bg-orange-50 rounded-r-lg p-3">
                        <p className="text-xs font-semibold text-orange-800">Owner Response</p>
                        <p className="text-sm text-gray-700 mt-1">{review.ownerResponse.content}</p>
                      </div>
                    )}
                  </div>
                ))}
                {reviews.length === 0 && <div className="text-center py-12 bg-white rounded-xl border"><MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No reviews yet. Be the first to review!</p></div>}
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-4">
                {jobs.map(job => (
                  <div key={job.id} className="bg-white rounded-xl border p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Deadline: {job.deadline}</span>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full capitalize">{job.type.replace(/_/g, ' ')}</span>
                        </div>
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 flex-shrink-0">Apply</button>
                    </div>
                  </div>
                ))}
                {jobs.length === 0 && <div className="text-center py-12 bg-white rounded-xl border"><Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No open positions at this time.</p></div>}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gray-400" /><span className="text-gray-700">{business.phone}</span></div>
                <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gray-400" /><span className="text-gray-700">{business.email}</span></div>
                {business.website && <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-gray-400" /><a href={business.website} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline truncate">{business.website.replace('https://', '')}</a></div>}
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gray-400 mt-0.5" /><span className="text-gray-700">{business.address}, {business.city}, {business.dzongkhag}</span></div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500 text-sm">
              <MapPin className="w-5 h-5 mr-2" /> Map View
            </div>

            {related.length > 0 && (
              <div className="bg-white rounded-xl border p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Similar Businesses</h3>
                <div className="space-y-3">
                  {related.map(r => (
                    <Link key={r.id} href={`/businesses/${r.slug}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center"><Building2 className="w-5 h-5 text-orange-600" /></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{r.name}</p>
                        <div className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /><span className="text-xs text-gray-500">{r.rating}</span></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
