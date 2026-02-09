import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, Tag } from 'lucide-react';
import { sampleEvents } from '@/data/content';

export const metadata = { title: 'Business Events & Announcements' };

export default function EventsPage() {
  const typeColors: Record<string, string> = { business: 'bg-blue-100 text-blue-700', government: 'bg-purple-100 text-purple-700', community: 'bg-green-100 text-green-700', trade_fair: 'bg-orange-100 text-orange-700', seminar: 'bg-indigo-100 text-indigo-700' };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-purple-100 mb-4"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Events</span></div>
          <div className="flex items-center gap-3"><Calendar className="w-8 h-8" /><h1 className="text-3xl font-bold">Business Events & Announcements</h1></div>
          <p className="mt-2 text-purple-100">Upcoming conferences, trade fairs, festivals, and business events in Bhutan</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleEvents.map(evt => {
            const d = new Date(evt.date);
            const month = d.toLocaleString('en', { month: 'short' }).toUpperCase();
            const day = d.getDate();
            return (
              <div key={evt.id} className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all">
                <div className="flex">
                  <div className="w-20 flex-shrink-0 bg-gradient-to-b from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center py-4">
                    <span className="text-xs font-semibold">{month}</span>
                    <span className="text-3xl font-bold">{day}</span>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${typeColors[evt.type] || 'bg-gray-100 text-gray-700'}`}>{evt.type.replace(/_/g, ' ')}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${evt.isFree ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{evt.isFree ? 'Free' : evt.price}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{evt.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{evt.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{evt.organizer}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{evt.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{evt.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
