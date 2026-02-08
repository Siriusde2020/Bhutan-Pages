import Link from 'next/link';
import {
  Hotel,
  UtensilsCrossed,
  HardHat,
  Monitor,
  Heart,
  GraduationCap,
  Scale,
  Landmark,
  Car,
  ShoppingBag,
  Wheat,
  Mountain,
  Building2,
  Factory,
  ArrowRight,
} from 'lucide-react';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hotel: Hotel,
  restaurant: UtensilsCrossed,
  construction: HardHat,
  technology: Monitor,
  health: Heart,
  education: GraduationCap,
  legal: Scale,
  finance: Landmark,
  transportation: Car,
  retail: ShoppingBag,
  agriculture: Wheat,
  tourism: Mountain,
  'real-estate': Building2,
  manufacturing: Factory,
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const { name, slug, description, icon, businessCount, color } = category;

  const IconComponent = iconMap[icon] || Building2;

  return (
    <Link href={`/categories/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {/* Accent color bar at top */}
        <div
          className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: color || '#FF6B00' }}
        />

        {/* Icon */}
        <div
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color || '#FF6B00'}15` }}
        >
          <IconComponent
            className="h-7 w-7"
            style={{ color: color || '#FF6B00' }}
          />
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#FF6B00]">
          {name}
        </h3>

        {/* Business count */}
        <p className="mt-1 text-sm text-gray-500">
          {businessCount.toLocaleString()} {businessCount === 1 ? 'business' : 'businesses'}
        </p>

        {/* Description (truncated) */}
        {description && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-400">{description}</p>
        )}

        {/* Arrow link */}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#FF6B00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
