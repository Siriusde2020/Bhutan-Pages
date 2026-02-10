'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Phone,
  CheckCircle2,
  Upload,
  FileText,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Building2,
  Mail,
  Smartphone,
  File,
  X,
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Search Business', icon: Search },
  { id: 2, title: 'Verify Identity', icon: ShieldCheck },
  { id: 3, title: 'Upload Documents', icon: Upload },
  { id: 4, title: 'Review & Submit', icon: CheckCircle2 },
];

const sampleResults = [
  { id: 'biz-1', name: 'Taj Tashi', category: 'Hotels & Accommodation', dzongkhag: 'Thimphu', phone: '+975-2-336699' },
  { id: 'biz-2', name: 'Ambient Cafe', category: 'Restaurants & Food', dzongkhag: 'Thimphu', phone: '+975-2-334455' },
  { id: 'biz-3', name: 'Bhutan Construction Co.', category: 'Construction & Real Estate', dzongkhag: 'Paro', phone: '+975-8-271234' },
  { id: 'biz-4', name: 'Dragon Tours', category: 'Tour & Travel', dzongkhag: 'Thimphu', phone: '+975-2-323456' },
  { id: 'biz-5', name: 'Paro General Hospital', category: 'Healthcare & Medical', dzongkhag: 'Paro', phone: '+975-8-272111' },
];

type VerificationMethod = 'otp' | 'email' | 'document';

interface UploadedFile {
  name: string;
  type: string;
  size: string;
}

export default function ClaimPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState<typeof sampleResults[0] | null>(null);
  const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('otp');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile | null>>({
    tradeLicense: null,
    cid: null,
    registration: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const filteredResults = searchQuery.length >= 2
    ? sampleResults.filter(
        (b) =>
          b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleFileUpload = (docType: string) => {
    // Simulate file upload
    setUploadedFiles((prev) => ({
      ...prev,
      [docType]: {
        name: `${docType}_document.pdf`,
        type: 'application/pdf',
        size: '2.4 MB',
      },
    }));
  };

  const removeFile = (docType: string) => {
    setUploadedFiles((prev) => ({ ...prev, [docType]: null }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedBusiness !== null;
      case 2:
        return verificationMethod !== null;
      case 3:
        return uploadedFiles.tradeLicense !== null || uploadedFiles.cid !== null;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId: selectedBusiness?.id,
          verificationMethod,
          notes: `Documents: ${Object.entries(uploadedFiles).filter(([, f]) => f).map(([k]) => k).join(', ')}`,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || 'Failed to submit claim. Please try again.');
      }
    } catch {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Claim Submitted Successfully!</h1>
          <p className="text-gray-600 mb-2">
            Your claim for <strong>{selectedBusiness?.name}</strong> has been submitted for review.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Our team will verify your documents and respond within 2-3 business days. You will receive an email notification once your claim is processed.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/dashboard/claims"
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Track Claim Status
            </Link>
            <Link
              href="/"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Claim Your Business Listing</h1>
          <p className="text-gray-500 mt-2">Verify ownership and take control of your business profile on BhutanBiz</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${
                      currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : currentStep === step.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1.5 font-medium text-center ${
                      currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 mb-5 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          {/* Step 1: Search Business */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Find Your Business</h2>
              <p className="text-gray-500 text-sm mb-6">Search for the business you want to claim ownership of.</p>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by business name, category, or location..."
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {filteredResults.length > 0 && (
                <div className="space-y-3">
                  {filteredResults.map((biz) => (
                    <button
                      key={biz.id}
                      onClick={() => setSelectedBusiness(biz)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition ${
                        selectedBusiness?.id === biz.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-gray-600" />
                            <span className="font-semibold text-gray-900">{biz.name}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-1.5 text-sm text-gray-500">
                            <span>{biz.category}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {biz.dzongkhag}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-3.5 h-3.5" />
                              {biz.phone}
                            </span>
                          </div>
                        </div>
                        {selectedBusiness?.id === biz.id && (
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery.length >= 2 && filteredResults.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Search className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                  <p className="font-medium">No businesses found</p>
                  <p className="text-sm mt-1">Try a different search term or check the spelling</p>
                </div>
              )}

              {searchQuery.length < 2 && !selectedBusiness && (
                <div className="text-center py-8 text-gray-400">
                  <Building2 className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">Type at least 2 characters to search for businesses</p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Verify Identity */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Verify Your Identity</h2>
              <p className="text-gray-500 text-sm mb-6">
                Choose a verification method to prove you are the owner of{' '}
                <strong>{selectedBusiness?.name}</strong>.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { method: 'otp' as VerificationMethod, icon: Smartphone, title: 'Phone OTP', description: 'Receive a one-time code on the registered phone number' },
                  { method: 'email' as VerificationMethod, icon: Mail, title: 'Email Verification', description: 'Receive a verification link on the registered email' },
                  { method: 'document' as VerificationMethod, icon: File, title: 'Document Upload', description: 'Upload business documents for manual verification' },
                ].map((opt) => (
                  <button
                    key={opt.method}
                    onClick={() => {
                      setVerificationMethod(opt.method);
                      setOtpSent(false);
                      setOtp('');
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition flex items-center gap-4 ${
                      verificationMethod === opt.method
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        verificationMethod === opt.method ? 'bg-orange-100' : 'bg-gray-100'
                      }`}
                    >
                      <opt.icon
                        className={`w-6 h-6 ${
                          verificationMethod === opt.method ? 'text-orange-600' : 'text-gray-500'
                        }`}
                      />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 block">{opt.title}</span>
                      <span className="text-sm text-gray-500">{opt.description}</span>
                    </div>
                  </button>
                ))}
              </div>

              {verificationMethod === 'otp' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  {!otpSent ? (
                    <button
                      onClick={() => setOtpSent(true)}
                      className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                    >
                      Send OTP to {selectedBusiness?.phone}
                    </button>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-600 mb-3">
                        Enter the 6-digit code sent to {selectedBusiness?.phone}
                      </p>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        placeholder="000000"
                        className="w-full text-center text-2xl tracking-[0.5em] py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition font-mono"
                      />
                    </div>
                  )}
                </div>
              )}

              {verificationMethod === 'email' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <button
                    onClick={() => setOtpSent(true)}
                    className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                  >
                    Send Verification Email
                  </button>
                  {otpSent && (
                    <p className="text-sm text-green-600 mt-3 text-center">
                      Verification email sent! Check your inbox.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Step 3: Upload Documents */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Documents</h2>
              <p className="text-gray-500 text-sm mb-6">
                Upload the required documents to verify your business ownership. At least one document is required.
              </p>

              <div className="space-y-4">
                {[
                  { key: 'tradeLicense', label: 'Trade License', description: 'Valid trade license issued by the Dzongkhag', required: true },
                  { key: 'cid', label: 'Bhutan CID', description: 'Citizenship Identity Card of the business owner', required: true },
                  { key: 'registration', label: 'Registration Certificate', description: 'Business registration certificate from MoEA', required: false },
                ].map((doc) => (
                  <div key={doc.key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-gray-900">{doc.label}</span>
                        {doc.required && <span className="text-red-500 text-sm ml-1">*</span>}
                        <p className="text-sm text-gray-500">{doc.description}</p>
                      </div>
                    </div>

                    {uploadedFiles[doc.key] ? (
                      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-sm font-medium text-green-800">{uploadedFiles[doc.key]!.name}</p>
                            <p className="text-xs text-green-600">{uploadedFiles[doc.key]!.size}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(doc.key)}
                          className="p-1 hover:bg-green-100 rounded transition"
                        >
                          <X className="w-4 h-4 text-green-600" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleFileUpload(doc.key)}
                        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 hover:bg-orange-50 transition cursor-pointer"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG up to 10MB</p>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Review & Submit</h2>
              <p className="text-gray-500 text-sm mb-6">
                Please review your claim details before submitting.
              </p>

              <div className="space-y-4">
                {/* Business Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Business Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Business Name</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBusiness?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Category</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBusiness?.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Dzongkhag</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBusiness?.dzongkhag}</span>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Verification Method</h3>
                  <p className="text-sm font-medium text-gray-900 capitalize">
                    {verificationMethod === 'otp' ? 'Phone OTP' : verificationMethod === 'email' ? 'Email Verification' : 'Document Upload'}
                  </p>
                </div>

                {/* Documents */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Uploaded Documents</h3>
                  <div className="space-y-2">
                    {Object.entries(uploadedFiles).map(([key, file]) =>
                      file ? (
                        <div key={key} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-gray-400">-</span>
                          <span className="text-gray-900 font-medium">{file.name}</span>
                        </div>
                      ) : null
                    )}
                    {Object.values(uploadedFiles).every((f) => f === null) && (
                      <p className="text-sm text-gray-500">No documents uploaded</p>
                    )}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    By submitting this claim, you confirm that you are the authorized owner or representative of this business. False claims may result in account suspension.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-900 font-medium disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-lg transition"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Submit Claim
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
