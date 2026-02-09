'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  XCircle,
  FileText,
  AlertCircle,
  Upload,
  RefreshCw,
  Eye,
  Download,
  ShieldCheck,
} from 'lucide-react';

type ClaimStatus = 'pending' | 'approved' | 'rejected';

interface ClaimData {
  id: string;
  businessName: string;
  businessCategory: string;
  status: ClaimStatus;
  submittedDate: string;
  reviewedDate?: string;
  reviewedBy?: string;
  rejectionReason?: string;
  documents: {
    name: string;
    type: string;
    uploadDate: string;
    status: 'verified' | 'pending' | 'rejected';
  }[];
  timeline: {
    date: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'pending';
  }[];
}

const claimData: ClaimData = {
  id: 'CLM-2026-001',
  businessName: 'Taj Tashi',
  businessCategory: 'Hotels & Accommodation',
  status: 'pending',
  submittedDate: 'Jan 25, 2026',
  documents: [
    { name: 'Trade License 2026.pdf', type: 'Trade License', uploadDate: 'Jan 25, 2026', status: 'verified' },
    { name: 'CID_KarmaDorji.pdf', type: 'Bhutan CID', uploadDate: 'Jan 25, 2026', status: 'verified' },
    { name: 'MoEA_Registration.pdf', type: 'Registration Certificate', uploadDate: 'Jan 25, 2026', status: 'pending' },
  ],
  timeline: [
    { date: 'Jan 25, 2026', title: 'Claim Submitted', description: 'Your claim request has been submitted for review.', status: 'completed' },
    { date: 'Jan 26, 2026', title: 'Documents Received', description: 'All uploaded documents have been received and queued for verification.', status: 'completed' },
    { date: 'Jan 27, 2026', title: 'Under Review', description: 'Your claim is currently being reviewed by our verification team.', status: 'current' },
    { date: 'Est. Jan 30, 2026', title: 'Verification Complete', description: 'Final verification decision will be made.', status: 'pending' },
    { date: 'Est. Jan 30, 2026', title: 'Ownership Transferred', description: 'Business profile access will be granted upon approval.', status: 'pending' },
  ],
};

export default function DashboardClaimsPage() {
  const [claim] = useState<ClaimData>(claimData);
  const [showResubmit, setShowResubmit] = useState(false);

  const statusConfig = {
    pending: { label: 'Pending Review', color: 'bg-amber-100 text-amber-800', icon: Clock },
    approved: { label: 'Approved', color: 'bg-green-100 text-green-800', icon: CheckCircle2 },
    rejected: { label: 'Rejected', color: 'bg-red-100 text-red-800', icon: XCircle },
  };

  const docStatusConfig = {
    verified: { label: 'Verified', color: 'text-green-600', icon: CheckCircle2 },
    pending: { label: 'Pending', color: 'text-amber-600', icon: Clock },
    rejected: { label: 'Rejected', color: 'text-red-600', icon: XCircle },
  };

  const currentStatus = statusConfig[claim.status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Claim Status</h1>
            <p className="text-gray-500 text-sm">Track the progress of your business claim</p>
          </div>
        </div>

        {/* Status Banner */}
        <div className={`rounded-xl p-6 mb-6 ${
          claim.status === 'pending' ? 'bg-amber-50 border border-amber-200' :
          claim.status === 'approved' ? 'bg-green-50 border border-green-200' :
          'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <StatusIcon className={`w-8 h-8 ${
                claim.status === 'pending' ? 'text-amber-500' :
                claim.status === 'approved' ? 'text-green-500' :
                'text-red-500'
              }`} />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-900">{claim.businessName}</h2>
                  <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${currentStatus.color}`}>
                    {currentStatus.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-0.5">
                  Claim ID: {claim.id} | Submitted: {claim.submittedDate}
                </p>
              </div>
            </div>
          </div>

          {claim.status === 'rejected' && claim.rejectionReason && (
            <div className="mt-4 bg-white rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-1">
                <AlertCircle className="w-4 h-4" />
                Rejection Reason
              </div>
              <p className="text-sm text-red-600">{claim.rejectionReason}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Claim Progress</h3>

              <div className="space-y-0">
                {claim.timeline.map((event, index) => (
                  <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                    {/* Connector line */}
                    {index < claim.timeline.length - 1 && (
                      <div
                        className={`absolute left-[15px] top-8 w-0.5 h-full ${
                          event.status === 'completed' ? 'bg-green-300' : 'bg-gray-200'
                        }`}
                      />
                    )}

                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      {event.status === 'completed' ? (
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      ) : event.status === 'current' ? (
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-semibold text-sm ${
                          event.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                        }`}>
                          {event.title}
                        </h4>
                        {event.status === 'current' && (
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 ${
                        event.status === 'pending' ? 'text-gray-300' : 'text-gray-400'
                      }`}>
                        {event.date}
                      </p>
                      <p className={`text-sm mt-1 ${
                        event.status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Uploaded Documents</h3>
              <div className="space-y-3">
                {claim.documents.map((doc, index) => {
                  const docConfig = docStatusConfig[doc.status];
                  const DocIcon = docConfig.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.type}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <DocIcon className={`w-3.5 h-3.5 ${docConfig.color}`} />
                          <span className={`text-xs font-medium ${docConfig.color}`}>{docConfig.label}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-gray-200 rounded transition" title="View">
                          <Eye className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded transition" title="Download">
                          <Download className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Re-submit section */}
            {claim.status === 'rejected' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Re-submit Claim</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Address the rejection reason and upload updated documents to re-submit your claim.
                </p>

                {!showResubmit ? (
                  <button
                    onClick={() => setShowResubmit(true)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition text-sm"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Re-submit Claim
                  </button>
                ) : (
                  <div className="space-y-3">
                    <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-400 hover:bg-orange-50 transition">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <span className="text-sm text-gray-600">Upload new documents</span>
                    </button>
                    <textarea
                      placeholder="Add a note explaining updates..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                    />
                    <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition text-sm">
                      Submit Updated Claim
                    </button>
                  </div>
                )}
              </div>
            )}

            {claim.status === 'pending' && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-sm text-blue-900">Verification in Progress</span>
                </div>
                <p className="text-sm text-blue-700">
                  Our team typically processes claims within 2-3 business days. You will be notified via email once a decision is made.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
