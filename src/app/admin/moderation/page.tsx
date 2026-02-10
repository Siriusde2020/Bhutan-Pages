'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Flag, CheckCircle, XCircle, AlertTriangle, Star, Info } from 'lucide-react';
import { sampleReviews } from '@/data/content';

export default function AdminModerationPage() {
  const [tab, setTab] = useState('reviews');
  const [reviewList, setReviewList] = useState(sampleReviews.slice(0, 5));
  const [pendingClaims, setPendingClaims] = useState([
    { id: 'cl-1', business: 'Ambient Cafe', claimant: 'Karma Dorji', date: '2026-02-05', method: 'document' },
    { id: 'cl-2', business: 'Thimphu TechPark', claimant: 'Tshering Pem', date: '2026-02-03', method: 'email' },
    { id: 'cl-3', business: 'DrukAir Travels', claimant: 'Sonam Wangchuk', date: '2026-01-28', method: 'document' },
  ]);
  const [actionMsg, setActionMsg] = useState('');

  const showMsg = (msg: string) => { setActionMsg(msg); setTimeout(() => setActionMsg(''), 3000); };

  const approveReview = (id: string) => {
    setReviewList(prev => prev.filter(r => r.id !== id));
    showMsg('Review approved and published.');
  };

  const removeReview = (id: string) => {
    setReviewList(prev => prev.filter(r => r.id !== id));
    showMsg('Review removed successfully.');
  };

  const approveClaim = (id: string) => {
    setPendingClaims(prev => prev.filter(c => c.id !== id));
    showMsg('Claim approved. Business ownership transferred.');
  };

  const rejectClaim = (id: string) => {
    setPendingClaims(prev => prev.filter(c => c.id !== id));
    showMsg('Claim rejected.');
  };

  const requestInfo = (id: string) => {
    showMsg('Additional information requested from claimant.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><Link href="/admin" className="hover:text-white flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Admin</Link><span>/</span><span>Moderation</span></div>
          <div className="flex items-center gap-3"><Flag className="w-6 h-6 text-red-400" /><h1 className="text-2xl font-bold">Content Moderation</h1></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {actionMsg && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> {actionMsg}
          </div>
        )}

        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('reviews')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === 'reviews' ? 'bg-red-600 text-white' : 'bg-white border text-gray-600'}`}>
            Flagged Reviews ({reviewList.length})
          </button>
          <button onClick={() => setTab('claims')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === 'claims' ? 'bg-amber-600 text-white' : 'bg-white border text-gray-600'}`}>
            Pending Claims ({pendingClaims.length})
          </button>
        </div>

        {tab === 'reviews' && (
          <div className="space-y-4">
            {reviewList.length === 0 ? (
              <div className="bg-white rounded-xl border p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">All Clear!</h3>
                <p className="text-gray-500 text-sm">No flagged reviews to moderate.</p>
              </div>
            ) : reviewList.map(r => (
              <div key={r.id} className="bg-white rounded-xl border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span className="font-medium text-gray-900">{r.userName}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < r.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-800">{r.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{r.content}</p>
                    <p className="text-xs text-gray-400 mt-2">Business ID: {r.businessId} | Date: {r.createdAt}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button onClick={() => approveReview(r.id)} className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">
                      <CheckCircle className="w-4 h-4" /> Approve
                    </button>
                    <button onClick={() => removeReview(r.id)} className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition">
                      <XCircle className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'claims' && (
          <div className="space-y-4">
            {pendingClaims.length === 0 ? (
              <div className="bg-white rounded-xl border p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">All Clear!</h3>
                <p className="text-gray-500 text-sm">No pending claims to review.</p>
              </div>
            ) : pendingClaims.map(c => (
              <div key={c.id} className="bg-white rounded-xl border p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{c.business}</h3>
                  <p className="text-sm text-gray-600">Claimed by: {c.claimant} | Method: {c.method} | Date: {c.date}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => approveClaim(c.id)} className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">Approve</button>
                  <button onClick={() => rejectClaim(c.id)} className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition">Reject</button>
                  <button onClick={() => requestInfo(c.id)} className="px-3 py-2 border text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> Request Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
