'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  User,
  LogIn,
  LogOut,
  Briefcase,
  FileText,
  HelpCircle,
  Phone,
  Info,
  Shield,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Businesses', href: '/businesses' },
  { name: 'Services', href: '/services' },
  { name: 'Categories', href: '/categories' },
  { name: 'Locations', href: '/locations' },
];

const moreLinks = [
  { name: 'Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Events', href: '/events', icon: FileText },
  { name: 'Deals & Offers', href: '/deals', icon: Shield },
  { name: 'Resources', href: '/resources', icon: HelpCircle },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'DZ'>('EN');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'DZ' : 'EN'));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Bhutan flag-colored top bar: saffron - orange - maroon */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[#F4A900]" />
        <div className="flex-1 bg-[#FF6B00]" />
        <div className="flex-1 bg-[#800020]" />
      </div>

      {/* Main header */}
      <div className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex flex-shrink-0 items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6B00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Thunder Dragon simplified icon */}
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                <span className="text-[#FF6B00]">Bhutan</span>
                <span className="text-[#800020]">Biz</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  {item.name}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  More
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                      >
                        <item.icon className="h-4 w-4 text-gray-400" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Header search (desktop) */}
            <div className="hidden flex-1 justify-center px-4 md:flex lg:max-w-md">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 transition-colors focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
                />
              </form>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2">
              {/* Mobile search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                aria-label="Toggle language"
              >
                <Globe className="h-3.5 w-3.5" />
                {language}
              </button>

              {/* Auth section (desktop) */}
              <div className="hidden items-center gap-2 sm:flex">
                {user ? (
                  <div className="relative" ref={userMenuRef}>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 rounded-full border border-gray-200 pl-3 pr-2 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                    >
                      <span className="max-w-[120px] truncate">{user.name}</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <Link href="/dashboard" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">
                          <User className="h-4 w-4 text-gray-400" /> Dashboard
                        </Link>
                        {user.role === 'admin' && (
                          <Link href="/admin" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">
                            <Shield className="h-4 w-4 text-gray-400" /> Admin Panel
                          </Link>
                        )}
                        <button
                          onClick={() => { logout(); setUserMenuOpen(false); }}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4" /> Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B00]"
                    >
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      className="rounded-md bg-[#FF6B00] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#e55f00]"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 px-4 py-3 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
              />
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-100 lg:hidden">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-100 pt-2">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  More
                </p>
                {moreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                  >
                    <item.icon className="h-4 w-4 text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile auth buttons */}
              <div className="border-t border-gray-100 pt-3 sm:hidden">
                {user ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-semibold text-gray-900">{user.name}</div>
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Dashboard</Link>
                    {user.role === 'admin' && <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#FF6B00]">Admin Panel</Link>}
                    <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full text-left rounded-md px-3 py-2.5 text-base font-medium text-red-600 hover:bg-red-50">Sign Out</button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      href="/auth/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-1 items-center justify-center rounded-md bg-[#FF6B00] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e55f00]"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
