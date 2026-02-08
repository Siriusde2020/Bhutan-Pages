import { PlatformAnalytics, BusinessAnalytics } from '@/types';

export const platformAnalytics: PlatformAnalytics = {
  totalBusinesses: 8945,
  totalUsers: 45230,
  totalReviews: 23456,
  totalCategories: 16,
  totalDzongkhags: 20,
  newBusinessesThisMonth: 234,
  newUsersThisMonth: 1250,
  verifiedBusinesses: 3456,
  premiumBusinesses: 567,
  categoryGrowth: [
    { category: 'Tour & Travel', count: 658, growth: 18.5 },
    { category: 'Hotels & Accommodation', count: 535, growth: 15.2 },
    { category: 'Retail & Shopping', count: 669, growth: 12.8 },
    { category: 'Construction & Real Estate', count: 481, growth: 22.1 },
    { category: 'Restaurants & Food', count: 443, growth: 14.3 },
    { category: 'Education & Training', count: 409, growth: 8.9 },
    { category: 'Manufacturing & Industry', count: 391, growth: 6.5 },
    { category: 'Healthcare & Medical', count: 331, growth: 11.2 },
    { category: 'Agriculture & Farming', count: 202, growth: 9.8 },
    { category: 'Transport & Logistics', count: 191, growth: 7.3 },
    { category: 'Legal Services', count: 135, growth: 5.4 },
    { category: 'Banking & Finance', count: 103, growth: 4.2 },
    { category: 'Technology & IT', count: 98, growth: 35.7 },
    { category: 'Energy & Hydropower', count: 92, growth: 12.1 },
    { category: 'Media & Communications', count: 87, growth: 15.8 },
    { category: 'NGOs & Civil Society', count: 68, growth: 3.1 },
  ],
  regionDensity: [
    { dzongkhag: 'Thimphu', count: 2847, density: 158.2 },
    { dzongkhag: 'Chhukha', count: 1567, density: 83.4 },
    { dzongkhag: 'Paro', count: 1245, density: 96.3 },
    { dzongkhag: 'Sarpang', count: 567, density: 34.3 },
    { dzongkhag: 'Punakha', count: 456, density: 44.9 },
    { dzongkhag: 'Samtse', count: 456, density: 35.0 },
    { dzongkhag: 'Wangdue Phodrang', count: 389, density: 9.6 },
    { dzongkhag: 'Trashigang', count: 345, density: 15.7 },
    { dzongkhag: 'Samdrup Jongkhar', count: 345, density: 18.4 },
    { dzongkhag: 'Bumthang', count: 312, density: 11.6 },
  ],
  industryTrends: [
    { industry: 'Technology & IT', trend: 'rising', score: 92 },
    { industry: 'Tourism & Hospitality', trend: 'rising', score: 88 },
    { industry: 'Construction', trend: 'rising', score: 85 },
    { industry: 'Renewable Energy', trend: 'rising', score: 82 },
    { industry: 'Agriculture', trend: 'stable', score: 68 },
    { industry: 'Retail', trend: 'stable', score: 65 },
    { industry: 'Manufacturing', trend: 'stable', score: 58 },
    { industry: 'Media', trend: 'rising', score: 72 },
  ],
};

export const sampleBusinessAnalytics: BusinessAnalytics[] = [
  { businessId: 'biz-1', period: '2026-01', views: 4520, uniqueVisitors: 3210, phoneClicks: 234, emailClicks: 89, websiteClicks: 567, whatsappClicks: 123, directionRequests: 345, searchAppearances: 12500, reviewsReceived: 12, avgRating: 4.7, bookmarks: 456, shareCount: 89 },
  { businessId: 'biz-2', period: '2026-01', views: 3890, uniqueVisitors: 2780, phoneClicks: 198, emailClicks: 67, websiteClicks: 445, whatsappClicks: 98, directionRequests: 289, searchAppearances: 10800, reviewsReceived: 8, avgRating: 4.8, bookmarks: 389, shareCount: 67 },
  { businessId: 'biz-14', period: '2026-01', views: 5670, uniqueVisitors: 4230, phoneClicks: 567, emailClicks: 234, websiteClicks: 890, whatsappClicks: 345, directionRequests: 123, searchAppearances: 18900, reviewsReceived: 15, avgRating: 4.6, bookmarks: 678, shareCount: 123 },
];

export function getBusinessAnalytics(businessId: string): BusinessAnalytics | undefined {
  return sampleBusinessAnalytics.find(a => a.businessId === businessId);
}
