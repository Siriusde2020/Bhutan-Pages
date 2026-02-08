'use client';

import { useState } from 'react';
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  BadgeCheck,
  User,
  MoreHorizontal,
  Flag,
} from 'lucide-react';
import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const {
    userName,
    userAvatar,
    rating,
    title,
    content,
    pros,
    cons,
    photos,
    helpful,
    notHelpful,
    ownerResponse,
    verified,
    createdAt,
  } = review;

  const [helpfulCount, setHelpfulCount] = useState(helpful);
  const [notHelpfulCount, setNotHelpfulCount] = useState(notHelpful);
  const [userVote, setUserVote] = useState<'helpful' | 'not_helpful' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHelpful = () => {
    if (userVote === 'helpful') {
      setHelpfulCount(helpful);
      setUserVote(null);
    } else {
      setHelpfulCount(helpful + 1);
      if (userVote === 'not_helpful') {
        setNotHelpfulCount(notHelpful);
      }
      setUserVote('helpful');
    }
  };

  const handleNotHelpful = () => {
    if (userVote === 'not_helpful') {
      setNotHelpfulCount(notHelpful);
      setUserVote(null);
    } else {
      setNotHelpfulCount(notHelpful + 1);
      if (userVote === 'helpful') {
        setHelpfulCount(helpful);
      }
      setUserVote('not_helpful');
    }
  };

  const renderStars = (value: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= value ? 'fill-[#F4A900] text-[#F4A900]' : 'text-gray-200'
          }`}
        />
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const ratingLabel = (value: number): string => {
    if (value >= 5) return 'Excellent';
    if (value >= 4) return 'Very Good';
    if (value >= 3) return 'Average';
    if (value >= 2) return 'Below Average';
    return 'Poor';
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header: user info + rating */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-orange-100">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="h-full w-full object-cover" />
            ) : (
              <User className="h-5 w-5 text-[#FF6B00]" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{userName}</span>
              {verified && (
                <span className="flex items-center gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400">{formatDate(createdAt)}</p>
          </div>
        </div>

        {/* Menu button */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-full mt-1 w-36 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
              <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                <Flag className="h-3.5 w-3.5" />
                Report Review
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Star rating + label */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
        <span className="text-sm font-medium text-gray-700">{ratingLabel(rating)}</span>
      </div>

      {/* Title */}
      {title && <h4 className="mt-2 font-semibold text-gray-900">{title}</h4>}

      {/* Content */}
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{content}</p>

      {/* Pros / Cons */}
      {((pros && pros.length > 0) || (cons && cons.length > 0)) && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {pros && pros.length > 0 && (
            <div className="rounded-lg bg-green-50 p-3">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-green-700">
                Pros
              </p>
              <ul className="space-y-1">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-1.5 text-sm text-green-800">
                    <span className="mt-1 text-green-500">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cons && cons.length > 0 && (
            <div className="rounded-lg bg-red-50 p-3">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-red-700">
                Cons
              </p>
              <ul className="space-y-1">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-1.5 text-sm text-red-800">
                    <span className="mt-1 text-red-500">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Review photos */}
      {photos && photos.length > 0 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg"
            >
              <img
                src={photo}
                alt={`Review photo ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Helpful / Not helpful */}
      <div className="mt-4 flex items-center gap-4 border-t border-gray-50 pt-3">
        <span className="text-xs text-gray-400">Was this review helpful?</span>
        <button
          onClick={handleHelpful}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            userVote === 'helpful'
              ? 'bg-green-100 text-green-700'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          Yes ({helpfulCount})
        </button>
        <button
          onClick={handleNotHelpful}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            userVote === 'not_helpful'
              ? 'bg-red-100 text-red-700'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ThumbsDown className="h-3.5 w-3.5" />
          No ({notHelpfulCount})
        </button>
      </div>

      {/* Owner response */}
      {ownerResponse && (
        <div className="mt-4 rounded-lg border border-orange-100 bg-orange-50/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#FF6B00]" />
            <span className="text-sm font-semibold text-gray-900">Owner Response</span>
            <span className="text-xs text-gray-400">
              {formatDate(ownerResponse.createdAt)}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{ownerResponse.content}</p>
        </div>
      )}
    </div>
  );
}
