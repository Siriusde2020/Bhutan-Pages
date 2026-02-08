// ============================================================
// BHUTAN BUSINESS DIRECTORY - CORE TYPE DEFINITIONS
// ============================================================

export interface Business {
  id: string;
  name: string;
  nameDz?: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  subcategoryIds: string[];
  serviceIds: string[];
  type: BusinessType;
  status: BusinessStatus;
  verificationStatus: VerificationStatus;
  verificationBadge?: VerificationBadge;
  trustScore: number;

  // Contact
  phone: string;
  altPhone?: string;
  email: string;
  website?: string;
  whatsapp?: string;
  socialLinks: SocialLinks;

  // Location
  dzongkhag: string;
  gewog?: string;
  city: string;
  address: string;
  postalCode?: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl?: string;

  // Media
  logo?: string;
  coverImage?: string;
  photos: string[];
  videos: string[];
  brochureUrl?: string;

  // Business Details
  foundedYear?: number;
  registrationNumber?: string;
  tradeLicenseNumber?: string;
  employees?: string;
  annualRevenue?: string;
  ownershipType: OwnershipType;
  isFdiRegistered: boolean;
  isExporter: boolean;
  isStartup: boolean;

  // Operations
  openingHours: OpeningHours;
  acceptedPayments: string[];
  languages: string[];
  servicesOffered: ServiceItem[];
  products: ProductItem[];
  pricingTier: PricingTier;
  branchLocations: BranchLocation[];

  // Documents
  documents: BusinessDocument[];
  certificates: string[];
  licenses: string[];

  // Metrics
  rating: number;
  reviewCount: number;
  viewCount: number;
  contactCount: number;
  claimDate?: string;
  listedDate: string;
  lastUpdated: string;

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];

  // AI
  aiSummary?: string;
  aiTags: string[];
  industryBenchmarks?: IndustryBenchmark;

  // Premium
  isPremium: boolean;
  isFeatured: boolean;
  isSponsored: boolean;
  planId?: string;

  // Owner
  ownerId?: string;
  adminIds: string[];
}

export type BusinessType =
  | 'private_company'
  | 'sole_proprietorship'
  | 'partnership'
  | 'corporation'
  | 'cooperative'
  | 'ngo'
  | 'cso'
  | 'government'
  | 'public_utility'
  | 'freelancer'
  | 'startup';

export type BusinessStatus = 'active' | 'inactive' | 'pending' | 'suspended' | 'closed';

export type VerificationStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

export type VerificationBadge = 'government' | 'trusted' | 'premium' | 'gold' | 'platinum';

export type OwnershipType = 'local' | 'foreign' | 'joint_venture' | 'government';

export type PricingTier = 'budget' | 'moderate' | 'premium' | 'luxury';

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}

export interface OpeningHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  isOpen: boolean;
  open?: string;
  close?: string;
}

export interface ServiceItem {
  name: string;
  description?: string;
  price?: string;
  duration?: string;
}

export interface ProductItem {
  name: string;
  description?: string;
  price?: string;
  image?: string;
}

export interface BranchLocation {
  name: string;
  address: string;
  dzongkhag: string;
  city: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
}

export interface BusinessDocument {
  name: string;
  type: 'license' | 'certificate' | 'registration' | 'other';
  url: string;
  uploadDate: string;
  verified: boolean;
}

export interface IndustryBenchmark {
  avgRating: number;
  avgReviews: number;
  marketPosition: string;
  growthTrend: 'rising' | 'stable' | 'declining';
}

// ============================================================
// CATEGORY TYPES
// ============================================================

export interface Category {
  id: string;
  name: string;
  nameDz?: string;
  slug: string;
  description: string;
  icon: string;
  parentId?: string;
  subcategories: Subcategory[];
  businessCount: number;
  featured: boolean;
  order: number;
  color: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  nameDz?: string;
  slug: string;
  description?: string;
  businessCount: number;
  parentCategoryId: string;
}

// ============================================================
// LOCATION TYPES
// ============================================================

export interface Dzongkhag {
  id: string;
  name: string;
  nameDz?: string;
  slug: string;
  description: string;
  capital: string;
  population?: number;
  area?: number;
  gewogs: Gewog[];
  cities: string[];
  businessCount: number;
  latitude: number;
  longitude: number;
  image?: string;
}

export interface Gewog {
  id: string;
  name: string;
  nameDz?: string;
  dzongkhagId: string;
  businessCount: number;
}

// ============================================================
// USER TYPES
// ============================================================

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  cidNumber?: string;
  role: UserRole;
  avatar?: string;
  savedBusinesses: string[];
  reviewIds: string[];
  createdAt: string;
  lastActive: string;
  isVerified: boolean;
  preferences: UserPreferences;
}

export type UserRole =
  | 'visitor'
  | 'user'
  | 'business_owner'
  | 'premium_business'
  | 'editor'
  | 'moderator'
  | 'admin'
  | 'analyst'
  | 'government'
  | 'investor';

export interface UserPreferences {
  language: 'en' | 'dz';
  notifications: boolean;
  newsletter: boolean;
  darkMode: boolean;
}

// ============================================================
// REVIEW TYPES
// ============================================================

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  pros?: string[];
  cons?: string[];
  photos: string[];
  helpful: number;
  notHelpful: number;
  ownerResponse?: OwnerResponse;
  sentiment?: 'positive' | 'neutral' | 'negative';
  verified: boolean;
  createdAt: string;
  updatedAt?: string;
  status: 'active' | 'flagged' | 'removed';
}

export interface OwnerResponse {
  content: string;
  createdAt: string;
}

// ============================================================
// CLAIM TYPES
// ============================================================

export interface Claim {
  id: string;
  businessId: string;
  userId: string;
  status: ClaimStatus;
  documents: ClaimDocument[];
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
  verificationMethod: 'otp' | 'email' | 'document' | 'in_person';
}

export type ClaimStatus = 'pending' | 'approved' | 'rejected' | 'more_info_needed';

export interface ClaimDocument {
  type: 'trade_license' | 'cid' | 'registration' | 'utility_bill' | 'other';
  name: string;
  url: string;
  uploadedAt: string;
}

// ============================================================
// JOB TYPES
// ============================================================

export interface Job {
  id: string;
  businessId: string;
  businessName: string;
  title: string;
  description: string;
  type: 'full_time' | 'part_time' | 'contract' | 'internship';
  location: string;
  salary?: string;
  requirements: string[];
  deadline: string;
  postedAt: string;
  isActive: boolean;
}

// ============================================================
// EVENT TYPES
// ============================================================

export interface Event {
  id: string;
  title: string;
  description: string;
  organizer: string;
  businessId?: string;
  type: 'business' | 'government' | 'community' | 'trade_fair' | 'seminar';
  location: string;
  date: string;
  endDate?: string;
  time: string;
  image?: string;
  registrationUrl?: string;
  isFree: boolean;
  price?: string;
}

// ============================================================
// DEAL TYPES
// ============================================================

export interface Deal {
  id: string;
  businessId: string;
  businessName: string;
  title: string;
  description: string;
  discountPercent?: number;
  originalPrice?: string;
  dealPrice?: string;
  code?: string;
  startDate: string;
  endDate: string;
  image?: string;
  category: string;
  isActive: boolean;
}

// ============================================================
// CONTENT TYPES
// ============================================================

export interface ContentPage {
  id: string;
  title: string;
  slug: string;
  type: 'guide' | 'article' | 'report' | 'ranking' | 'case_study' | 'explainer';
  category: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
  readTime: number;
  tags: string[];
  relatedBusinessIds: string[];
  metaTitle?: string;
  metaDescription?: string;
}

// ============================================================
// ANALYTICS TYPES
// ============================================================

export interface BusinessAnalytics {
  businessId: string;
  period: string;
  views: number;
  uniqueVisitors: number;
  phoneClicks: number;
  emailClicks: number;
  websiteClicks: number;
  whatsappClicks: number;
  directionRequests: number;
  searchAppearances: number;
  reviewsReceived: number;
  avgRating: number;
  bookmarks: number;
  shareCount: number;
}

export interface PlatformAnalytics {
  totalBusinesses: number;
  totalUsers: number;
  totalReviews: number;
  totalCategories: number;
  totalDzongkhags: number;
  newBusinessesThisMonth: number;
  newUsersThisMonth: number;
  verifiedBusinesses: number;
  premiumBusinesses: number;
  categoryGrowth: CategoryGrowthData[];
  regionDensity: RegionDensityData[];
  industryTrends: IndustryTrendData[];
}

export interface CategoryGrowthData {
  category: string;
  count: number;
  growth: number;
}

export interface RegionDensityData {
  dzongkhag: string;
  count: number;
  density: number;
}

export interface IndustryTrendData {
  industry: string;
  trend: 'rising' | 'stable' | 'declining';
  score: number;
}

// ============================================================
// PRICING TYPES
// ============================================================

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly';
  features: string[];
  highlighted: boolean;
  cta: string;
  description: string;
}

// ============================================================
// SEARCH & FILTER TYPES
// ============================================================

export interface SearchFilters {
  query: string;
  category?: string;
  subcategory?: string;
  dzongkhag?: string;
  city?: string;
  rating?: number;
  verified?: boolean;
  openNow?: boolean;
  pricingTier?: PricingTier;
  sortBy: 'relevance' | 'rating' | 'reviews' | 'newest' | 'name';
  page: number;
  limit: number;
}

export interface SearchResult {
  businesses: Business[];
  total: number;
  page: number;
  totalPages: number;
  filters: SearchFilters;
  suggestions: string[];
}

// ============================================================
// NOTIFICATION TYPES
// ============================================================

export interface Notification {
  id: string;
  userId: string;
  type: 'review' | 'claim' | 'message' | 'system' | 'promotion';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}
