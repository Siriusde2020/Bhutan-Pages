import Link from 'next/link';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import type { Dzongkhag } from '@/types';

interface LocationCardProps {
  location: Dzongkhag;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { name, nameDz, slug, description, capital, cities, businessCount, image } = location;

  return (
    <Link href={`/locations/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {/* Image / header */}
        <div className="relative h-36 overflow-hidden bg-gradient-to-br from-[#800020] to-[#FF6B00]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <MapPin className="h-12 w-12 text-white/20" />
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Location name on image */}
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            {nameDz && (
              <p className="mt-0.5 text-sm text-white/70">{nameDz}</p>
            )}
          </div>

          {/* Business count badge */}
          <div className="absolute right-3 top-3">
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
              <Building2 className="h-3 w-3" />
              {businessCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Capital */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#FF6B00]" />
            Capital: {capital}
          </div>

          {/* Key cities */}
          {cities && cities.length > 0 && (
            <div className="mt-3">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                Key Areas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cities.slice(0, 4).map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-[#FF6B00]"
                  >
                    {city}
                  </span>
                ))}
                {cities.length > 4 && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">
                    +{cities.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="mt-3 line-clamp-2 text-sm text-gray-500">{description}</p>
          )}

          {/* Explore link */}
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#FF6B00] transition-colors group-hover:text-[#e55f00]">
            Explore businesses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
