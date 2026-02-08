'use client';

import { useState } from 'react';
import { Search, MapPin, ChevronDown, TrendingUp } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string, category: string, location: string) => void;
  placeholder?: string;
  size?: 'sm' | 'lg';
}

const categories = [
  'All Categories',
  'Hotels & Lodging',
  'Restaurants & Cafes',
  'Construction',
  'IT & Technology',
  'Health & Wellness',
  'Education',
  'Legal Services',
  'Financial Services',
  'Transportation',
  'Retail & Shopping',
  'Agriculture',
  'Tourism',
  'Real Estate',
  'Manufacturing',
];

const locations = [
  'All Locations',
  'Thimphu',
  'Paro',
  'Punakha',
  'Bumthang',
  'Wangdue Phodrang',
  'Trongsa',
  'Mongar',
  'Trashigang',
  'Samtse',
  'Chhukha',
  'Dagana',
  'Gasa',
  'Haa',
  'Lhuentse',
  'Pemagatshel',
  'Samdrup Jongkhar',
  'Sarpang',
  'Trashi Yangtse',
  'Tsirang',
  'Zhemgang',
];

const popularSearches = ['Hotels', 'Restaurants', 'Lawyers', 'Construction', 'Schools', 'Hospitals'];

export default function SearchBar({
  onSearch,
  placeholder = 'Search businesses, services, or products...',
  size = 'lg',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('All Locations');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query, category, location);
  };

  const handlePopularClick = (term: string) => {
    setQuery(term);
    onSearch?.(term, category, location);
  };

  const isLarge = size === 'lg';

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div
          className={`flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg md:flex-row ${
            isLarge ? 'md:rounded-2xl' : ''
          }`}
        >
          {/* Search input */}
          <div className="relative flex-1">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 ${
                isLarge ? 'h-5 w-5' : 'h-4 w-4'
              }`}
            />
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`w-full border-b border-gray-100 bg-transparent pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none md:border-b-0 md:border-r ${
                isLarge ? 'py-4 text-base' : 'py-3 text-sm'
              }`}
            />
          </div>

          {/* Category dropdown */}
          <div className="relative border-b border-gray-100 md:border-b-0 md:border-r">
            <button
              type="button"
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setLocationOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-2 bg-transparent text-gray-600 hover:text-gray-900 md:w-48 ${
                isLarge ? 'px-4 py-4 text-sm' : 'px-3 py-3 text-xs'
              }`}
            >
              <span className="truncate">{category}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 transition-transform ${categoryOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {categoryOpen && (
              <div className="absolute left-0 top-full z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-100 bg-white py-1 shadow-xl">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setCategory(cat);
                      setCategoryOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-orange-50 hover:text-[#FF6B00] ${
                      category === cat ? 'bg-orange-50 font-medium text-[#FF6B00]' : 'text-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location dropdown */}
          <div className="relative border-b border-gray-100 md:border-b-0 md:border-r">
            <button
              type="button"
              onClick={() => {
                setLocationOpen(!locationOpen);
                setCategoryOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-2 bg-transparent text-gray-600 hover:text-gray-900 md:w-48 ${
                isLarge ? 'px-4 py-4 text-sm' : 'px-3 py-3 text-xs'
              }`}
            >
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400" />
                {location}
              </span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 transition-transform ${locationOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {locationOpen && (
              <div className="absolute left-0 top-full z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-100 bg-white py-1 shadow-xl">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setLocation(loc);
                      setLocationOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-orange-50 hover:text-[#FF6B00] ${
                      location === loc ? 'bg-orange-50 font-medium text-[#FF6B00]' : 'text-gray-700'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search button */}
          <button
            type="submit"
            className={`flex items-center justify-center gap-2 bg-[#FF6B00] font-semibold text-white transition-colors hover:bg-[#e55f00] ${
              isLarge ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
            }`}
          >
            <Search className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
            Search
          </button>
        </div>
      </form>

      {/* Popular searches */}
      {isLarge && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <TrendingUp className="h-3.5 w-3.5" />
            Popular:
          </span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => handlePopularClick(term)}
              className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-600 backdrop-blur-sm transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
