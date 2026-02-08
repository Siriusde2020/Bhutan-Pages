import Link from 'next/link';
import {
  MapPin,
  Phone,
  Globe,
  Navigation,
  Star,
  BadgeCheck,
  Crown,
  Sparkles,
} from 'lucide-react';
import type { Business } from '@/types';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const {
    id,
    name,
    slug,
    shortDescription,
    categoryId,
    city,
    dzongkhag,
    rating,
    reviewCount,
    logo,
    coverImage,
    phone,
    website,
    verificationStatus,
    isPremium,
    isFeatured,
    pricingTier,
  } = business;

  const renderStars = (value: number) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalf = value - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-[#F4A900] text-[#F4A900]" />
        );
      } else if (i === fullStars && hasHalf) {
        stars.push(
          <span key={i} className="relative inline-block h-4 w-4">
            <Star className="absolute h-4 w-4 text-gray-200" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star className="h-4 w-4 fill-[#F4A900] text-[#F4A900]" />
            </span>
          </span>
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-200" />);
      }
    }
    return stars;
  };

  const pricingLabel: Record<string, string> = {
    budget: '$',
    moderate: '$$',
    premium: '$$$',
    luxury: '$$$$',
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {/* Featured / Premium badges */}
      {(isFeatured || isPremium) && (
        <div className="absolute right-3 top-3 z-10 flex gap-1.5">
          {isFeatured && (
            <span className="flex items-center gap-1 rounded-full bg-[#D4A017] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
          {isPremium && !isFeatured && (
            <span className="flex items-center gap-1 rounded-full bg-[#800020] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              <Crown className="h-3 w-3" />
              Premium
            </span>
          )}
        </div>
      )}

      <Link href={`/businesses/${slug || id}`} className="block">
        {/* Cover image / thumbnail */}
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
          {coverImage ? (
            <img
              src={coverImage}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-4xl font-bold text-[#FF6B00]/20">
                {name.charAt(0)}
              </span>
            </div>
          )}

          {/* Logo overlay */}
          {logo && (
            <div className="absolute -bottom-5 left-4">
              <div className="h-12 w-12 overflow-hidden rounded-lg border-2 border-white bg-white shadow-md">
                <img src={logo} alt={`${name} logo`} className="h-full w-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-4 ${logo ? 'pt-7' : 'pt-4'}`}>
          {/* Name and verification */}
          <div className="flex items-start gap-2">
            <h3 className="flex-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#FF6B00]">
              {name}
            </h3>
            {verificationStatus === 'verified' && (
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
            )}
          </div>

          {/* Category */}
          <p className="mt-0.5 text-sm text-[#FF6B00]">{categoryId}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
            <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-400">({reviewCount})</span>
            {pricingTier && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-sm font-medium text-gray-500">
                  {pricingLabel[pricingTier]}
                </span>
              </>
            )}
          </div>

          {/* Location */}
          <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">
              {city}, {dzongkhag}
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{shortDescription}</p>
        </div>
      </Link>

      {/* Quick contact buttons */}
      <div className="flex border-t border-gray-100">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex flex-1 items-center justify-center gap-1.5 py-3 text-sm text-gray-600 transition-colors hover:bg-green-50 hover:text-green-600"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        )}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 border-l border-gray-100 py-3 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
          onClick={(e) => e.stopPropagation()}
        >
          <Navigation className="h-4 w-4" />
          Directions
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 border-l border-gray-100 py-3 text-sm text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-600"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="h-4 w-4" />
            Website
          </a>
        )}
      </div>
    </div>
  );
}
