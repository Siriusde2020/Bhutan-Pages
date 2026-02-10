'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Globe, Clock, Share2, ChevronRight, CheckCircle, Building2, Calendar, DollarSign, Award, ThumbsUp, MessageSquare, Briefcase, Heart } from 'lucide-react';
import { getCategoryById } from '@/data/categories';
import { Business, Review, Job } from '@/types';

export default function BusinessProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const [business, setBusiness] = useState<Business | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [related, setRelated] = useState<Business[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState('');
  const [reviewError, setReviewError] = useState('');

  // Fetch business from API (reads in-memory store, reflects edits)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/businesses/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBusiness(data.business);

          // Fetch reviews
          try {
            const revRes = await fetch(`/api/businesses/${data.business.id}/reviews`);
            if (revRes.ok) {
              const revData = await revRes.json();
              setReviews(revData.reviews || []);
            }
          } catch { /* silent */ }

          // Fetch related businesses (same category)
          try {
            const relRes = await fetch(`/api/businesses?category=${data.business.categoryId}&limit=5`);
            if (relRes.ok) {
              const relData = await relRes.json();
              setRelated((relData.businesses || []).filter((b: Business) => b.id !== data.business.id).slice(0, 4));
            }
          } catch { /* silent */ }

          // Fetch jobs for this business
          try {
            const jobRes = await fetch('/api/jobs');
            if (jobRes.ok) {
              const jobData = await jobRes.json();
              setJobs((jobData.jobs || []).filter((j: Job) => j.businessId === data.business.id));
            }
          } catch { /* silent */ }
        }
      } catch { /* silent */ }
      finally { setLoadingData(false); }
    }
    fetchData();
  }, [id]);

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError('');
    setReviewSuccess('');
    setReviewSubmitting(true);
    try {
      const res = await fetch(`/api/businesses/${business.id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: newRating, title: newTitle, content: newContent }),
      });
      if (res.ok) {
        setReviewSuccess('Review submitted successfully!');
        setNewRating(5);
        setNewTitle('');
        setNewContent('');
        const revRes = await fetch(`/api/businesses/${business.id}/reviews`);
        if (revRes.ok) {
          const revData = await revRes.json();
          setReviews(revData.reviews || []);
        }
      } else {
        const data = await res.json().catch(() => ({}));
        setReviewError(data.error || 'Failed to submit review.');
      }
    } catch {
      setReviewError('An unexpected error occurred.');
    } finally {
      setReviewSubmitting(false);
    }
  };

  const handleMarkHelpful = async (reviewId: string) => {
    try {
      await fetch(`/api/reviews/${reviewId}/helpful`, { method: 'POST', headers: { 'Content-Type': 'application/json' } });
    } catch { /* silent */ }
  };

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
                {business.logo && (
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                    <img src={business.logo} alt={business.name} className="w-full h-full object-cover" />
                  </div>
                )}
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
                {business.photos && business.photos.length > 0 && business.photos.some(p => p.startsWith('data:') || p.startsWith('http')) && (
                  <div className="bg-white rounded-xl border p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Photos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {business.photos.filter(p => p.startsWith('data:') || p.startsWith('http')).map((photo, i) => (
                        <div key={i} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <img src={photo} alt={`${business.name} photo ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                        <div className="flex items-center gap-2"><span className="font-semibold text-gray-900">{review.userName}</span>{review.verified && <CheckCircle className="w-3.5 h-3.5 text-green-600" />}</div>
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
                      <button onClick={() => handleMarkHelpful(review.id)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"><ThumbsUp className="w-3 h-3" /> Helpful ({review.helpful})</button>
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
                <div className="bg-white rounded-xl border p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Write a Review</h3>
                  {reviewSuccess && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">{reviewSuccess}</div>}
                  {reviewError && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{reviewError}</div>}
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Rating</label><div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((star) => (<button key={star} type="button" onClick={() => setNewRating(star)} className="focus:outline-none"><Star className={`w-6 h-6 ${star <= newRating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} /></button>))}</div></div>
                    <div><label htmlFor="reviewTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label><input id="reviewTitle" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Summarize your experience" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400" /></div>
                    <div><label htmlFor="reviewContent" className="block text-sm font-medium text-gray-700 mb-1">Review</label><textarea id="reviewContent" value={newContent} onChange={(e) => setNewContent(e.target.value)} placeholder="Share your experience with this business..." required rows={4} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400 resize-none" /></div>
                    <button type="submit" disabled={reviewSubmitting} className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-semibold rounded-lg transition">{reviewSubmitting ? 'Submitting...' : 'Submit Review'}</button>
                  </form>
                </div>
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
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center overflow-hidden">
                        {r.logo ? <img src={r.logo} alt="" className="w-full h-full object-cover" /> : <Building2 className="w-5 h-5 text-orange-600" />}
                      </div>
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
