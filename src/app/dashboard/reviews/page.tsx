'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, ArrowLeft, Filter, Send, MessageSquare, ThumbsUp } from 'lucide-react';

type ReviewFilter = 'all' | 'responded' | 'unresponded';

interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  helpful: number;
  responded: boolean;
  response?: string;
  responseDate?: string;
}

const reviews: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Karma Wangchuk',
    avatar: 'KW',
    date: 'Jan 28, 2026',
    rating: 5,
    title: 'Exceptional luxury experience',
    content: 'The Taj Tashi exceeded all our expectations. The rooms are spacious with stunning views of the Thimphu valley. The staff were incredibly attentive and the food at both restaurants was outstanding. Highly recommend the spa treatments.',
    helpful: 12,
    responded: true,
    response: 'Thank you so much for your wonderful review, Karma! We are delighted to hear you enjoyed your stay with us. We look forward to welcoming you back soon.',
    responseDate: 'Jan 29, 2026',
  },
  {
    id: 'r2',
    name: 'Pema Dorji',
    avatar: 'PD',
    date: 'Jan 22, 2026',
    rating: 4,
    title: 'Great location, excellent service',
    content: 'Wonderful hotel in the heart of Thimphu. The architecture beautifully blends traditional Bhutanese style with modern luxury. Only minor issue was the slow WiFi in the room. Everything else was perfect.',
    helpful: 8,
    responded: false,
  },
  {
    id: 'r3',
    name: 'Tshering Yangzom',
    avatar: 'TY',
    date: 'Jan 15, 2026',
    rating: 5,
    title: 'Best hotel in Bhutan!',
    content: 'We stayed for 3 nights and every moment was magical. The traditional Bhutanese decor, the warm hospitality, and the incredible mountain views make this a must-visit destination. The breakfast buffet has an amazing selection.',
    helpful: 15,
    responded: true,
    response: 'Kadrinchey, Tshering! Your kind words mean the world to our team. We are thrilled that you had such a memorable experience with us.',
    responseDate: 'Jan 16, 2026',
  },
  {
    id: 'r4',
    name: 'Dorji Thinley',
    avatar: 'DT',
    date: 'Jan 10, 2026',
    rating: 3,
    title: 'Good but overpriced',
    content: 'The hotel is beautiful and service is good, but I feel it is quite expensive for what you get compared to international standards. The room was nice but the bathroom could use an upgrade. Restaurant portions are small for the price.',
    helpful: 6,
    responded: false,
  },
  {
    id: 'r5',
    name: 'Sonam Choden',
    avatar: 'SC',
    date: 'Jan 5, 2026',
    rating: 5,
    title: 'Perfect for a special occasion',
    content: 'Celebrated our anniversary here and it was absolutely perfect. The staff arranged a beautiful room setup with flowers and cake. The rooftop bar has the best views in town. Could not have asked for a better experience.',
    helpful: 20,
    responded: true,
    response: 'Happy Anniversary, Sonam and family! It was our pleasure to make your celebration special. Thank you for choosing Taj Tashi for such an important occasion.',
    responseDate: 'Jan 6, 2026',
  },
];

const ratingBreakdown = [
  { stars: 5, count: 8, percent: 67 },
  { stars: 4, count: 2, percent: 17 },
  { stars: 3, count: 1, percent: 8 },
  { stars: 2, count: 1, percent: 8 },
  { stars: 1, count: 0, percent: 0 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function DashboardReviewsPage() {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  const [respondingTo, setRespondingTo] = useState<string | null>(null);
  const [responseText, setResponseText] = useState('');

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'responded') return review.responded;
    if (filter === 'unresponded') return !review.responded;
    return true;
  });

  const avgRating = 4.7;
  const totalReviews = 12;

  const handleSendResponse = (reviewId: string) => {
    if (!responseText.trim()) return;
    // In a real app, this would send to API
    setRespondingTo(null);
    setResponseText('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
            <p className="text-gray-500 text-sm">Manage and respond to customer reviews</p>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Average Rating */}
            <div className="text-center md:text-left md:pr-8 md:border-r md:border-gray-200">
              <div className="text-5xl font-bold text-gray-900">{avgRating}</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(avgRating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">{totalReviews} reviews</p>
            </div>

            {/* Breakdown */}
            <div className="flex-1 space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-12">{item.stars} star</span>
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-4 h-4 text-gray-400" />
          {(['all', 'responded', 'unresponded'] as ReviewFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition ${
                filter === f
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {f === 'all' ? 'All' : f === 'responded' ? 'Responded' : 'Unresponded'}
              {f === 'unresponded' && (
                <span className="ml-1.5 bg-red-100 text-red-600 text-xs px-1.5 py-0.5 rounded-full font-bold">
                  {reviews.filter((r) => !r.responded).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Review Content */}
              <h4 className="font-semibold text-gray-900 mb-1">{review.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{review.content}</p>

              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  {review.helpful} found helpful
                </span>
              </div>

              {/* Owner Response */}
              {review.responded && review.response && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-gray-900">Owner Response</span>
                    <span className="text-xs text-gray-400">{review.responseDate}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.response}</p>
                </div>
              )}

              {/* Response Input */}
              {!review.responded && respondingTo !== review.id && (
                <button
                  onClick={() => setRespondingTo(review.id)}
                  className="mt-4 text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  Respond to this review
                </button>
              )}

              {respondingTo === review.id && (
                <div className="mt-4 space-y-3">
                  <textarea
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                    placeholder="Write your response..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSendResponse(review.id)}
                      disabled={!responseText.trim()}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white text-sm font-semibold rounded-lg transition"
                    >
                      <Send className="w-4 h-4" />
                      Send Response
                    </button>
                    <button
                      onClick={() => {
                        setRespondingTo(null);
                        setResponseText('');
                      }}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 text-gray-300" />
              <p className="font-medium">No reviews found</p>
              <p className="text-sm mt-1">
                {filter === 'unresponded'
                  ? 'All reviews have been responded to!'
                  : 'No reviews match the current filter.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
