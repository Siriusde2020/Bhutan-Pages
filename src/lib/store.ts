// ============================================================
// IN-MEMORY DATA STORE - Runtime persistence layer
// All data persists during server lifetime, resets on restart
// ============================================================

import { Business, Review, Claim, Job, Deal, Event, User, Notification } from '@/types';
import { businesses as seedBusinesses } from '@/data/businesses';
import { sampleReviews, sampleJobs, sampleEvents, sampleDeals } from '@/data/content';

interface DataStore {
  businesses: Business[];
  reviews: Review[];
  claims: Claim[];
  jobs: Job[];
  deals: Deal[];
  events: Event[];
  users: User[];
  notifications: Notification[];
  sessions: Map<string, { userId: string; expiresAt: number }>;
  analyticsLog: { businessId: string; action: string; timestamp: string; ip?: string }[];
  contactMessages: { id: string; name: string; email: string; subject: string; message: string; createdAt: string }[];
}

function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
}

function generateToken(): string {
  return `tok_${Date.now()}_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
}

// Seed users
const seedUsers: User[] = [
  {
    id: 'user-admin', email: 'admin@bhutanbiz.com', name: 'BhutanBiz Admin', phone: '+975-2-333333',
    role: 'admin', savedBusinesses: [], reviewIds: [], createdAt: '2024-01-01', lastActive: new Date().toISOString(),
    isVerified: true, preferences: { language: 'en', notifications: true, newsletter: true, darkMode: false },
  },
  {
    id: 'user-1', email: 'karma@email.com', name: 'Karma Dorji', phone: '+975-17-111111',
    role: 'business_owner', savedBusinesses: ['biz-1'], reviewIds: ['rev-1'], createdAt: '2025-06-15', lastActive: '2026-02-01',
    isVerified: true, preferences: { language: 'en', notifications: true, newsletter: true, darkMode: false },
  },
  {
    id: 'user-2', email: 'tshering@email.com', name: 'Tshering Yangdon', phone: '+975-17-222222',
    role: 'user', savedBusinesses: [], reviewIds: ['rev-3'], createdAt: '2025-08-20', lastActive: '2026-01-25',
    isVerified: true, preferences: { language: 'en', notifications: true, newsletter: false, darkMode: false },
  },
  {
    id: 'user-3', email: 'pema@email.com', name: 'Pema Wangchuk', phone: '+975-17-333333',
    role: 'user', savedBusinesses: ['biz-15'], reviewIds: ['rev-4'], createdAt: '2025-11-01', lastActive: '2026-02-05',
    isVerified: true, preferences: { language: 'en', notifications: true, newsletter: true, darkMode: false },
  },
  {
    id: 'user-demo', email: 'demo@bhutanbiz.com', name: 'Demo User', phone: '+975-17-000000',
    role: 'business_owner', savedBusinesses: [], reviewIds: [], createdAt: '2026-01-01', lastActive: new Date().toISOString(),
    isVerified: true, preferences: { language: 'en', notifications: true, newsletter: true, darkMode: false },
  },
];

// Password store (in production, use bcrypt)
const passwords: Map<string, string> = new Map([
  ['admin@bhutanbiz.com', 'admin123'],
  ['karma@email.com', 'password123'],
  ['tshering@email.com', 'password123'],
  ['pema@email.com', 'password123'],
  ['demo@bhutanbiz.com', 'demo123'],
]);

// Initialize store
const store: DataStore = {
  businesses: [...seedBusinesses],
  reviews: [...sampleReviews],
  claims: [],
  jobs: [...sampleJobs],
  deals: [...sampleDeals],
  events: [...sampleEvents],
  users: [...seedUsers],
  notifications: [],
  sessions: new Map(),
  analyticsLog: [],
  contactMessages: [],
};

// ============================================================
// AUTH OPERATIONS
// ============================================================

export function authenticateUser(email: string, password: string): { user: User; token: string } | null {
  const storedPassword = passwords.get(email);
  if (!storedPassword || storedPassword !== password) return null;

  const user = store.users.find(u => u.email === email);
  if (!user) return null;

  const token = generateToken();
  store.sessions.set(token, { userId: user.id, expiresAt: Date.now() + 24 * 60 * 60 * 1000 });

  user.lastActive = new Date().toISOString();
  return { user, token };
}

export function registerUser(name: string, email: string, phone: string, password: string, role: string = 'user'): { user: User; token: string } | { error: string } {
  if (store.users.find(u => u.email === email)) {
    return { error: 'Email already registered' };
  }

  const user: User = {
    id: generateId('user'),
    email, name, phone,
    role: role as User['role'],
    savedBusinesses: [], reviewIds: [],
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    isVerified: false,
    preferences: { language: 'en', notifications: true, newsletter: true, darkMode: false },
  };

  store.users.push(user);
  passwords.set(email, password);

  const token = generateToken();
  store.sessions.set(token, { userId: user.id, expiresAt: Date.now() + 24 * 60 * 60 * 1000 });

  return { user, token };
}

export function getUserFromToken(token: string): User | null {
  const session = store.sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) store.sessions.delete(token);
    return null;
  }
  return store.users.find(u => u.id === session.userId) || null;
}

export function logoutUser(token: string): void {
  store.sessions.delete(token);
}

// ============================================================
// BUSINESS OPERATIONS
// ============================================================

export function getAllBusinesses(): Business[] {
  return store.businesses;
}

export function getBusinessById(id: string): Business | undefined {
  return store.businesses.find(b => b.id === id || b.slug === id);
}

export function addBusiness(data: Partial<Business>, userId: string): Business {
  const biz: Business = {
    ...data as Business,
    id: generateId('biz'),
    slug: (data.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    status: 'pending',
    verificationStatus: 'unverified',
    trustScore: 50,
    rating: 0,
    reviewCount: 0,
    viewCount: 0,
    contactCount: 0,
    listedDate: new Date().toISOString().split('T')[0],
    lastUpdated: new Date().toISOString().split('T')[0],
    ownerId: userId,
    adminIds: [userId],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    photos: [],
    videos: [],
    documents: [],
    certificates: [],
    licenses: [],
    branchLocations: [],
    products: data.products || [],
    servicesOffered: data.servicesOffered || [],
    keywords: data.keywords || [],
    aiTags: [],
    socialLinks: data.socialLinks || {},
    openingHours: data.openingHours || {
      monday: { isOpen: true, open: '09:00', close: '17:00' },
      tuesday: { isOpen: true, open: '09:00', close: '17:00' },
      wednesday: { isOpen: true, open: '09:00', close: '17:00' },
      thursday: { isOpen: true, open: '09:00', close: '17:00' },
      friday: { isOpen: true, open: '09:00', close: '17:00' },
      saturday: { isOpen: true, open: '09:00', close: '13:00' },
      sunday: { isOpen: false },
    },
    acceptedPayments: data.acceptedPayments || ['Cash'],
    languages: data.languages || ['English', 'Dzongkha'],
    subcategoryIds: data.subcategoryIds || [],
    serviceIds: data.serviceIds || [],
    isFdiRegistered: data.isFdiRegistered || false,
    isExporter: data.isExporter || false,
    isStartup: data.isStartup || false,
  };
  store.businesses.push(biz);
  return biz;
}

export function updateBusiness(id: string, data: Partial<Business>): Business | null {
  const idx = store.businesses.findIndex(b => b.id === id);
  if (idx === -1) return null;
  store.businesses[idx] = { ...store.businesses[idx], ...data, lastUpdated: new Date().toISOString().split('T')[0] };
  return store.businesses[idx];
}

export function trackBusinessAction(businessId: string, action: string): void {
  store.analyticsLog.push({ businessId, action, timestamp: new Date().toISOString() });
  const biz = store.businesses.find(b => b.id === businessId);
  if (biz) {
    if (action === 'view') biz.viewCount++;
    if (action === 'contact') biz.contactCount++;
  }
}

// ============================================================
// REVIEW OPERATIONS
// ============================================================

export function getReviewsForBusiness(businessId: string): Review[] {
  return store.reviews.filter(r => r.businessId === businessId && r.status === 'active');
}

export function addReview(businessId: string, userId: string, data: { rating: number; title: string; content: string; pros?: string[]; cons?: string[] }): Review {
  const user = store.users.find(u => u.id === userId);
  const review: Review = {
    id: generateId('rev'),
    businessId,
    userId,
    userName: user?.name || 'Anonymous',
    rating: data.rating,
    title: data.title,
    content: data.content,
    pros: data.pros || [],
    cons: data.cons || [],
    photos: [],
    helpful: 0,
    notHelpful: 0,
    verified: user?.isVerified || false,
    createdAt: new Date().toISOString().split('T')[0],
    status: 'active',
  };
  store.reviews.push(review);

  // Update business rating
  const bizReviews = store.reviews.filter(r => r.businessId === businessId && r.status === 'active');
  const biz = store.businesses.find(b => b.id === businessId);
  if (biz) {
    biz.reviewCount = bizReviews.length;
    biz.rating = Math.round((bizReviews.reduce((s, r) => s + r.rating, 0) / bizReviews.length) * 10) / 10;
  }

  return review;
}

export function markReviewHelpful(reviewId: string, helpful: boolean): Review | null {
  const review = store.reviews.find(r => r.id === reviewId);
  if (!review) return null;
  if (helpful) review.helpful++;
  else review.notHelpful++;
  return review;
}

export function addOwnerResponse(reviewId: string, content: string): Review | null {
  const review = store.reviews.find(r => r.id === reviewId);
  if (!review) return null;
  review.ownerResponse = { content, createdAt: new Date().toISOString().split('T')[0] };
  return review;
}

// ============================================================
// CLAIM OPERATIONS
// ============================================================

export function submitClaim(businessId: string, userId: string, verificationMethod: string, notes?: string): Claim {
  const claim: Claim = {
    id: generateId('claim'),
    businessId,
    userId,
    status: 'pending',
    documents: [],
    submittedAt: new Date().toISOString(),
    verificationMethod: verificationMethod as Claim['verificationMethod'],
    notes,
  };
  store.claims.push(claim);
  return claim;
}

export function getClaims(status?: string): Claim[] {
  if (status) return store.claims.filter(c => c.status === status);
  return store.claims;
}

export function updateClaimStatus(claimId: string, status: string, reviewedBy: string): Claim | null {
  const claim = store.claims.find(c => c.id === claimId);
  if (!claim) return null;
  claim.status = status as Claim['status'];
  claim.reviewedAt = new Date().toISOString();
  claim.reviewedBy = reviewedBy;

  if (status === 'approved') {
    const biz = store.businesses.find(b => b.id === claim.businessId);
    if (biz) {
      biz.verificationStatus = 'verified';
      biz.claimDate = new Date().toISOString().split('T')[0];
      biz.ownerId = claim.userId;
      if (!biz.adminIds.includes(claim.userId)) biz.adminIds.push(claim.userId);
    }
  }
  return claim;
}

// ============================================================
// JOB OPERATIONS
// ============================================================

export function getAllJobs(): Job[] {
  return store.jobs;
}

export function addJob(data: Omit<Job, 'id' | 'postedAt' | 'isActive'>): Job {
  const job: Job = {
    ...data,
    id: generateId('job'),
    postedAt: new Date().toISOString().split('T')[0],
    isActive: true,
  };
  store.jobs.push(job);
  return job;
}

// ============================================================
// DEAL OPERATIONS
// ============================================================

export function getAllDeals(): Deal[] {
  return store.deals;
}

export function addDeal(data: Omit<Deal, 'id' | 'isActive'>): Deal {
  const deal: Deal = {
    ...data,
    id: generateId('deal'),
    isActive: true,
  };
  store.deals.push(deal);
  return deal;
}

// ============================================================
// EVENT OPERATIONS
// ============================================================

export function getAllEvents(): Event[] {
  return store.events;
}

// ============================================================
// ANALYTICS OPERATIONS
// ============================================================

export function getAnalyticsForBusiness(businessId: string) {
  const logs = store.analyticsLog.filter(l => l.businessId === businessId);
  const biz = store.businesses.find(b => b.id === businessId);
  const reviews = store.reviews.filter(r => r.businessId === businessId);

  return {
    businessId,
    totalViews: biz?.viewCount || 0,
    totalContacts: biz?.contactCount || 0,
    totalReviews: reviews.length,
    avgRating: biz?.rating || 0,
    recentActions: logs.slice(-20),
    reviewBreakdown: [5, 4, 3, 2, 1].map(star => ({
      star,
      count: reviews.filter(r => Math.round(r.rating) === star).length,
    })),
  };
}

export function getPlatformAnalytics() {
  const totalBusinesses = store.businesses.length;
  const verified = store.businesses.filter(b => b.verificationStatus === 'verified').length;
  const premium = store.businesses.filter(b => b.isPremium).length;
  const totalReviews = store.reviews.length;
  const totalUsers = store.users.length;
  const pendingClaims = store.claims.filter(c => c.status === 'pending').length;
  const activeJobs = store.jobs.filter(j => j.isActive).length;
  const activeDeals = store.deals.filter(d => d.isActive).length;

  return {
    totalBusinesses, verified, premium, totalReviews, totalUsers,
    pendingClaims, activeJobs, activeDeals,
    totalContacts: store.analyticsLog.filter(l => l.action === 'contact').length,
    totalViews: store.analyticsLog.filter(l => l.action === 'view').length,
  };
}

// ============================================================
// SEARCH OPERATIONS
// ============================================================

export function searchBusinesses(query: string, filters?: { category?: string; dzongkhag?: string; rating?: number; verified?: boolean; sort?: string }) {
  let results = [...store.businesses].filter(b => b.status === 'active');

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.shortDescription.toLowerCase().includes(q) ||
      b.keywords.some(k => k.toLowerCase().includes(q)) ||
      b.aiTags.some(t => t.toLowerCase().includes(q)) ||
      b.city.toLowerCase().includes(q) ||
      b.dzongkhag.toLowerCase().includes(q) ||
      b.servicesOffered.some(s => s.name.toLowerCase().includes(q))
    );
  }

  if (filters?.category) results = results.filter(b => b.categoryId === filters.category);
  if (filters?.dzongkhag) results = results.filter(b => b.dzongkhag.toLowerCase() === filters.dzongkhag!.toLowerCase());
  if (filters?.rating) results = results.filter(b => b.rating >= filters.rating!);
  if (filters?.verified) results = results.filter(b => b.verificationStatus === 'verified');

  switch (filters?.sort) {
    case 'rating': results.sort((a, b) => b.rating - a.rating); break;
    case 'reviews': results.sort((a, b) => b.reviewCount - a.reviewCount); break;
    case 'newest': results.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()); break;
    case 'name': results.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: results.sort((a, b) => b.trustScore - a.trustScore);
  }

  return results;
}

// ============================================================
// USER OPERATIONS
// ============================================================

export function getUserById(id: string): User | undefined {
  return store.users.find(u => u.id === id);
}

export function updateUser(id: string, data: Partial<User>): User | null {
  const idx = store.users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  store.users[idx] = { ...store.users[idx], ...data };
  return store.users[idx];
}

export function toggleSavedBusiness(userId: string, businessId: string): string[] {
  const user = store.users.find(u => u.id === userId);
  if (!user) return [];
  const idx = user.savedBusinesses.indexOf(businessId);
  if (idx > -1) user.savedBusinesses.splice(idx, 1);
  else user.savedBusinesses.push(businessId);
  return user.savedBusinesses;
}

export function getAllUsers(): User[] {
  return store.users;
}

// ============================================================
// CONTACT OPERATIONS
// ============================================================

export function submitContactMessage(name: string, email: string, subject: string, message: string) {
  const msg = { id: generateId('msg'), name, email, subject, message, createdAt: new Date().toISOString() };
  store.contactMessages.push(msg);
  return msg;
}

export function getContactMessages() {
  return store.contactMessages;
}

// ============================================================
// NOTIFICATION OPERATIONS
// ============================================================

export function addNotification(userId: string, type: Notification['type'], title: string, message: string, actionUrl?: string) {
  const notif: Notification = {
    id: generateId('notif'),
    userId, type, title, message, read: false, actionUrl,
    createdAt: new Date().toISOString(),
  };
  store.notifications.push(notif);
  return notif;
}

export function getNotifications(userId: string): Notification[] {
  return store.notifications.filter(n => n.userId === userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function markNotificationRead(notifId: string): void {
  const notif = store.notifications.find(n => n.id === notifId);
  if (notif) notif.read = true;
}
