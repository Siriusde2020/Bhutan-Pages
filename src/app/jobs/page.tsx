'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, DollarSign, Calendar, Clock } from 'lucide-react';
import { sampleJobs } from '@/data/content';

export default function JobsPage() {
  const [typeFilter, setTypeFilter] = useState('all');
  const filtered = typeFilter === 'all' ? sampleJobs : sampleJobs.filter(j => j.type === typeFilter);
  const types = ['all', 'full_time', 'part_time', 'contract', 'internship'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Jobs</span></div>
          <div className="flex items-center gap-3"><Briefcase className="w-8 h-8" /><h1 className="text-3xl font-bold">Jobs & Career Opportunities</h1></div>
          <p className="mt-2 text-blue-100">Find your next career opportunity in Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {types.map(t => (
            <button key={t} onClick={() => setTypeFilter(t)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${typeFilter === t ? 'bg-blue-600 text-white' : 'bg-white border text-gray-600'}`}>{t === 'all' ? 'All Jobs' : t.replace(/_/g, ' ')}</button>
          ))}
        </div>
        <div className="space-y-4">
          {filtered.map(job => (
            <div key={job.id} className="bg-white rounded-xl border p-6 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full capitalize">{job.type.replace(/_/g, ' ')}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{job.businessName}</p>
                  <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    {job.salary && <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>}
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Deadline: {job.deadline}</span>
                  </div>
                  {job.requirements.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5">{job.requirements.map(r => <span key={r} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{r}</span>)}</div>}
                </div>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 flex-shrink-0">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
