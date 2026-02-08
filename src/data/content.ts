import { ContentPage, Deal, Job, Event, PricingPlan, Review } from '@/types';

export const contentPages: ContentPage[] = [
  {
    id: 'cp-1', title: 'Best Lawyers in Thimphu - 2026 Guide', slug: 'best-lawyers-thimphu',
    type: 'ranking', category: 'Legal Services',
    content: 'A comprehensive guide to the top-rated legal professionals in Thimphu, Bhutan...',
    excerpt: 'Find the most trusted and experienced lawyers in Thimphu. Our curated list covers corporate law, family law, property disputes, and more.',
    author: 'BhutanBiz Editorial', publishedAt: '2026-01-15', updatedAt: '2026-01-20',
    readTime: 8, tags: ['lawyers', 'legal', 'thimphu', 'professional services'],
    relatedBusinessIds: ['biz-9'], metaTitle: 'Best Lawyers in Thimphu, Bhutan (2026) | BhutanBiz',
    metaDescription: 'Discover the top-rated lawyers and law firms in Thimphu. Compare ratings, read reviews, and find the right legal professional for your needs.',
  },
  {
    id: 'cp-2', title: 'Top Construction Companies in Bhutan', slug: 'top-construction-companies-bhutan',
    type: 'ranking', category: 'Construction',
    content: 'The definitive ranking of construction companies operating across Bhutan...',
    excerpt: 'Explore Bhutan\'s leading construction firms ranked by project portfolio, client reviews, and industry expertise.',
    author: 'BhutanBiz Editorial', publishedAt: '2026-01-10', updatedAt: '2026-01-18',
    readTime: 12, tags: ['construction', 'builders', 'infrastructure', 'real estate'],
    relatedBusinessIds: ['biz-10'], metaTitle: 'Top Construction Companies in Bhutan (2026) | BhutanBiz',
    metaDescription: 'Find the best construction companies in Bhutan. Comprehensive directory with reviews, project portfolios, and verified credentials.',
  },
  {
    id: 'cp-3', title: 'How to Start a Business in Bhutan - Complete Guide', slug: 'start-business-bhutan',
    type: 'guide', category: 'Business',
    content: 'Everything you need to know about starting a business in the Land of the Thunder Dragon...',
    excerpt: 'Step-by-step guide to business registration, licensing, and compliance in Bhutan. Covers sole proprietorship, partnerships, and corporations.',
    author: 'BhutanBiz Editorial', publishedAt: '2025-12-01', updatedAt: '2026-01-05',
    readTime: 15, tags: ['business registration', 'startup', 'entrepreneur', 'guide'],
    relatedBusinessIds: [], metaTitle: 'How to Start a Business in Bhutan (2026 Guide) | BhutanBiz',
    metaDescription: 'Complete guide to starting a business in Bhutan. Learn about registration, trade licenses, tax requirements, and more.',
  },
  {
    id: 'cp-4', title: 'FDI-Ready Businesses in Bhutan - Investment Opportunities', slug: 'fdi-ready-businesses-bhutan',
    type: 'report', category: 'Investment',
    content: 'An in-depth analysis of foreign direct investment opportunities in Bhutan...',
    excerpt: 'Discover Bhutan\'s most promising sectors for foreign investment, including tourism, technology, agriculture, and renewable energy.',
    author: 'BhutanBiz Research', publishedAt: '2026-01-01', updatedAt: '2026-01-25',
    readTime: 20, tags: ['FDI', 'investment', 'foreign business', 'opportunities'],
    relatedBusinessIds: ['biz-19'], metaTitle: 'FDI Opportunities in Bhutan (2026 Report) | BhutanBiz',
    metaDescription: 'Comprehensive report on foreign direct investment opportunities in Bhutan. Sector analysis, regulatory framework, and success stories.',
  },
  {
    id: 'cp-5', title: 'Bhutan Tourism Industry Report 2026', slug: 'bhutan-tourism-report-2026',
    type: 'report', category: 'Tourism',
    content: 'Annual analysis of Bhutan\'s tourism sector performance, trends, and forecasts...',
    excerpt: 'Comprehensive analysis of Bhutan\'s tourism industry with visitor statistics, revenue data, and growth projections for 2026 and beyond.',
    author: 'BhutanBiz Research', publishedAt: '2026-02-01', updatedAt: '2026-02-05',
    readTime: 18, tags: ['tourism', 'hospitality', 'travel', 'report', 'annual'],
    relatedBusinessIds: ['biz-1', 'biz-2', 'biz-14'], metaTitle: 'Bhutan Tourism Report 2026 | BhutanBiz',
    metaDescription: 'Annual Bhutan tourism industry report with visitor statistics, market trends, hotel occupancy rates, and growth forecasts.',
  },
  {
    id: 'cp-6', title: 'Best Hotels in Paro for Every Budget', slug: 'best-hotels-paro',
    type: 'ranking', category: 'Hotels',
    content: 'From luxury resorts to budget-friendly guesthouses, Paro has accommodation for every traveler...',
    excerpt: 'Curated list of the best hotels in Paro, Bhutan. From luxury 5-star properties to charming guesthouses near Tiger\'s Nest.',
    author: 'BhutanBiz Travel', publishedAt: '2025-11-20', updatedAt: '2026-01-10',
    readTime: 10, tags: ['hotels', 'paro', 'accommodation', 'travel', 'tourism'],
    relatedBusinessIds: ['biz-2', 'biz-21', 'biz-22'], metaTitle: 'Best Hotels in Paro, Bhutan (2026) | BhutanBiz',
    metaDescription: 'Find the best hotels in Paro for every budget. Luxury resorts, boutique hotels, and guesthouses near Tiger\'s Nest and Paro Dzong.',
  },
  {
    id: 'cp-7', title: 'Bhutan Startup Ecosystem - A Rising Tiger', slug: 'bhutan-startup-ecosystem',
    type: 'article', category: 'Startups',
    content: 'Bhutan\'s startup ecosystem is evolving rapidly with government support and digital infrastructure...',
    excerpt: 'Explore Bhutan\'s growing startup ecosystem, from Thimphu TechPark to emerging fintech and agritech ventures.',
    author: 'BhutanBiz Editorial', publishedAt: '2026-01-20', updatedAt: '2026-01-28',
    readTime: 10, tags: ['startups', 'entrepreneurship', 'tech', 'innovation', 'MSME'],
    relatedBusinessIds: ['biz-18'], metaTitle: 'Bhutan Startup Ecosystem Guide (2026) | BhutanBiz',
    metaDescription: 'Discover Bhutan\'s emerging startup ecosystem. Government initiatives, funding opportunities, and success stories from the Land of the Thunder Dragon.',
  },
  {
    id: 'cp-8', title: 'Gelephu Mindfulness City - Business Opportunities', slug: 'gelephu-mindfulness-city-business',
    type: 'guide', category: 'Investment',
    content: 'The Gelephu Mindfulness City project represents Bhutan\'s most ambitious economic initiative...',
    excerpt: 'Everything businesses and investors need to know about the Gelephu Mindfulness City Special Administrative Region.',
    author: 'BhutanBiz Research', publishedAt: '2026-02-01', updatedAt: '2026-02-05',
    readTime: 14, tags: ['GMC', 'Gelephu', 'investment', 'special economic zone', 'mindfulness city'],
    relatedBusinessIds: [], metaTitle: 'Gelephu Mindfulness City Business Guide | BhutanBiz',
    metaDescription: 'Complete guide to business and investment opportunities in the Gelephu Mindfulness City Special Administrative Region.',
  },
  {
    id: 'cp-9', title: 'Top Restaurants in Thimphu - Local Favorites', slug: 'top-restaurants-thimphu',
    type: 'ranking', category: 'Restaurants',
    content: 'Thimphu\'s culinary scene has evolved significantly with diverse dining options...',
    excerpt: 'Discover the best restaurants in Thimphu, from authentic Bhutanese ema datshi to international cuisine and trendy cafes.',
    author: 'BhutanBiz Food', publishedAt: '2025-12-15', updatedAt: '2026-01-15',
    readTime: 8, tags: ['restaurants', 'food', 'dining', 'thimphu', 'cafes'],
    relatedBusinessIds: ['biz-15', 'biz-16', 'biz-24'], metaTitle: 'Best Restaurants in Thimphu (2026) | BhutanBiz',
    metaDescription: 'Top-rated restaurants in Thimphu, Bhutan. Authentic Bhutanese food, international cuisine, cafes, and fine dining options.',
  },
  {
    id: 'cp-10', title: 'Understanding Bhutan\'s Business Regulations', slug: 'bhutan-business-regulations',
    type: 'explainer', category: 'Legal',
    content: 'A comprehensive overview of business regulations, licensing, and compliance in Bhutan...',
    excerpt: 'Navigate Bhutan\'s business regulatory landscape with this guide to trade licenses, tax obligations, labor laws, and environmental compliance.',
    author: 'BhutanBiz Legal', publishedAt: '2025-11-01', updatedAt: '2026-01-01',
    readTime: 16, tags: ['regulations', 'compliance', 'tax', 'licensing', 'legal'],
    relatedBusinessIds: ['biz-9'], metaTitle: 'Bhutan Business Regulations Guide | BhutanBiz',
    metaDescription: 'Complete guide to business regulations in Bhutan. Trade licenses, tax requirements, labor laws, and compliance standards.',
  },
];

export const sampleReviews: Review[] = [
  {
    id: 'rev-1', businessId: 'biz-1', userId: 'user-1', userName: 'Karma Dorji', rating: 5,
    title: 'Exceptional luxury experience', content: 'The Taj Tashi is hands down the best hotel in Thimphu. The rooms are spacious, the staff is incredibly attentive, and the location is perfect. The Chig Ja Gye restaurant serves amazing Bhutanese and Indian cuisine. Highly recommend for both business travelers and tourists.',
    pros: ['Excellent service', 'Prime location', 'Beautiful architecture', 'Great dining'],
    cons: ['Premium pricing'], photos: [], helpful: 24, notHelpful: 1,
    sentiment: 'positive', verified: true, createdAt: '2026-01-15', status: 'active',
    ownerResponse: { content: 'Thank you for your wonderful review, Karma la! We are delighted you enjoyed your stay with us. We look forward to welcoming you again.', createdAt: '2026-01-16' },
  },
  {
    id: 'rev-2', businessId: 'biz-1', userId: 'user-2', userName: 'Sarah Mitchell', rating: 4,
    title: 'Beautiful hotel with great food', content: 'Stayed for 3 nights during my Bhutan trip. The hotel blends Bhutanese architecture beautifully with modern comfort. The spa is excellent. Only downside was slow Wi-Fi on some days. The view of Tashichho Dzong from the upper floors is breathtaking.',
    pros: ['Stunning architecture', 'Excellent spa', 'Great views', 'Delicious breakfast'],
    cons: ['Wi-Fi inconsistent', 'Expensive minibar'], photos: [], helpful: 18, notHelpful: 2,
    sentiment: 'positive', verified: true, createdAt: '2026-01-10', status: 'active',
  },
  {
    id: 'rev-3', businessId: 'biz-2', userId: 'user-3', userName: 'Tshering Yangdon', rating: 5,
    title: 'Paradise in Paro Valley', content: 'Uma by COMO is pure magic. The setting in Paro Valley is unmatched. The wellness programs are world-class, and the food at Bukhari is an experience in itself. Perfect for a luxury retreat in Bhutan.',
    pros: ['Stunning location', 'World-class spa', 'Exceptional dining', 'Attentive staff'],
    cons: [], photos: [], helpful: 31, notHelpful: 0,
    sentiment: 'positive', verified: true, createdAt: '2026-01-08', status: 'active',
  },
  {
    id: 'rev-4', businessId: 'biz-15', userId: 'user-4', userName: 'Pema Wangchuk', rating: 4,
    title: 'Best coffee in Thimphu', content: 'Ambient Cafe has become my go-to spot in Thimphu. The coffee is excellent, the atmosphere is cozy, and the pastries are freshly baked. Great place for remote work too. Gets crowded on weekends though.',
    pros: ['Excellent coffee', 'Cozy ambiance', 'Good Wi-Fi', 'Fresh pastries'],
    cons: ['Crowded on weekends', 'Limited parking'], photos: [], helpful: 15, notHelpful: 1,
    sentiment: 'positive', verified: true, createdAt: '2026-01-20', status: 'active',
  },
  {
    id: 'rev-5', businessId: 'biz-9', userId: 'user-5', userName: 'Dorji Tshering', rating: 5,
    title: 'Professional and reliable legal team', content: 'Yeedzin Associates handled our company registration and ongoing compliance matters efficiently. The team is knowledgeable about Bhutanese corporate law and very responsive. Highly recommended for business legal needs.',
    pros: ['Expert knowledge', 'Responsive team', 'Fair pricing', 'Professional service'],
    cons: [], photos: [], helpful: 12, notHelpful: 0,
    sentiment: 'positive', verified: true, createdAt: '2025-12-15', status: 'active',
  },
  {
    id: 'rev-6', businessId: 'biz-5', userId: 'user-6', userName: 'Michael Chen', rating: 4,
    title: 'Unique Bhutanese brewery experience', content: 'Red Panda is a surprisingly good beer, brewed right here in Bumthang. The brewery tour is informative and the tasting room is a great experience. A must-visit when in central Bhutan.',
    pros: ['Quality beer', 'Interesting tour', 'Nice tasting room', 'Unique experience'],
    cons: ['Remote location', 'Limited merchandise'], photos: [], helpful: 20, notHelpful: 2,
    sentiment: 'positive', verified: true, createdAt: '2026-01-05', status: 'active',
  },
  {
    id: 'rev-7', businessId: 'biz-14', userId: 'user-7', userName: 'James Cooper', rating: 5,
    title: 'Flawless tour organization', content: 'BTC organized our entire 10-day Bhutan trip and every detail was perfect. From airport pickup in Paro to the final farewell dinner in Thimphu, everything was seamless. Our guide Sonam was incredibly knowledgeable. Best tour company in Bhutan.',
    pros: ['Excellent planning', 'Knowledgeable guides', 'Great value', 'Flexible itinerary'],
    cons: [], photos: [], helpful: 28, notHelpful: 0,
    sentiment: 'positive', verified: true, createdAt: '2026-01-22', status: 'active',
  },
  {
    id: 'rev-8', businessId: 'biz-10', userId: 'user-8', userName: 'Kinley Wangmo', rating: 4,
    title: 'Reliable construction partner', content: 'Lhomon Construction built our family home in Thimphu. The work quality was good and they adhered to traditional Bhutanese architectural standards while incorporating modern amenities. Completed within the agreed timeline.',
    pros: ['Quality workmanship', 'On-time delivery', 'Good communication', 'Fair pricing'],
    cons: ['Minor finishing issues', 'Subcontractors could improve'], photos: [], helpful: 9, notHelpful: 1,
    sentiment: 'positive', verified: true, createdAt: '2025-11-30', status: 'active',
  },
];

export const sampleJobs: Job[] = [
  { id: 'job-1', businessId: 'biz-1', businessName: 'Taj Tashi, Thimphu', title: 'Front Desk Manager', description: 'We are looking for an experienced Front Desk Manager to oversee daily operations and guest services at Taj Tashi Thimphu.', type: 'full_time', location: 'Thimphu', salary: 'Nu. 35,000 - 50,000/month', requirements: ['3+ years hotel experience', 'Fluent in English and Dzongkha', 'Hospitality degree preferred', 'Leadership skills'], deadline: '2026-03-15', postedAt: '2026-02-01', isActive: true },
  { id: 'job-2', businessId: 'biz-7', businessName: 'Bhutan Telecom', title: 'Network Engineer', description: 'Join Bhutan Telecom as a Network Engineer to help expand and maintain Bhutan\'s telecommunications infrastructure.', type: 'full_time', location: 'Thimphu', salary: 'Nu. 40,000 - 60,000/month', requirements: ['BE/BTech in IT/Telecom', '2+ years experience', 'CCNA certification preferred', 'Knowledge of 4G/5G networks'], deadline: '2026-03-01', postedAt: '2026-01-25', isActive: true },
  { id: 'job-3', businessId: 'biz-18', businessName: 'Thimphu TechPark', title: 'Software Developer', description: 'Thimphu TechPark is looking for talented software developers to work on e-government and digital transformation projects.', type: 'full_time', location: 'Thimphu', salary: 'Nu. 35,000 - 55,000/month', requirements: ['BSc/BE in Computer Science', 'Proficiency in JavaScript, Python, or Java', '1+ years experience', 'Problem-solving skills'], deadline: '2026-03-10', postedAt: '2026-01-28', isActive: true },
  { id: 'job-4', businessId: 'biz-14', businessName: 'Bhutan Tourism Corp.', title: 'Tour Guide', description: 'We need passionate and knowledgeable tour guides to lead cultural and trekking tours across Bhutan.', type: 'full_time', location: 'Paro / Thimphu', salary: 'Nu. 25,000 - 40,000/month + tips', requirements: ['Tourism/Hospitality degree', 'Fluent English (other languages a plus)', 'Knowledge of Bhutanese culture and history', 'Licensed tour guide preferred'], deadline: '2026-02-28', postedAt: '2026-01-20', isActive: true },
  { id: 'job-5', businessId: 'biz-19', businessName: 'Mountain Hazelnut Venture', title: 'Agricultural Field Officer', description: 'Work with local farming communities in eastern Bhutan to support hazelnut orchard development and sustainable agriculture.', type: 'full_time', location: 'Mongar', salary: 'Nu. 30,000 - 45,000/month', requirements: ['Degree in Agriculture or related field', 'Experience in field operations', 'Willingness to travel to rural areas', 'Basic computer skills'], deadline: '2026-03-05', postedAt: '2026-01-22', isActive: true },
  { id: 'job-6', businessId: 'biz-3', businessName: 'Bhutan National Bank', title: 'Branch Manager', description: 'BNB seeks a dynamic Branch Manager for our new branch opening in Gelephu.', type: 'full_time', location: 'Gelephu', salary: 'Nu. 50,000 - 70,000/month', requirements: ['MBA in Finance/Banking', '5+ years banking experience', 'Strong leadership skills', 'Knowledge of Bhutanese banking regulations'], deadline: '2026-03-20', postedAt: '2026-02-01', isActive: true },
];

export const sampleEvents: Event[] = [
  { id: 'evt-1', title: 'Bhutan Business Summit 2026', description: 'Annual gathering of business leaders, entrepreneurs, and policymakers to discuss Bhutan\'s economic future.', organizer: 'Bhutan Chamber of Commerce & Industry', type: 'seminar', location: 'Thimphu, BCDI Hall', date: '2026-04-15', endDate: '2026-04-17', time: '9:00 AM', isFree: false, price: 'Nu. 2,000' },
  { id: 'evt-2', title: 'Paro Tshechu 2026', description: 'The famous annual religious festival at Paro Dzong featuring masked dances and cultural performances.', organizer: 'Paro Dzongkhag Administration', type: 'community', location: 'Paro Dzong, Paro', date: '2026-03-20', endDate: '2026-03-24', time: '8:00 AM', isFree: true },
  { id: 'evt-3', title: 'Startup Weekend Thimphu', description: 'A 54-hour startup event bringing together developers, designers, and business minds.', organizer: 'Loden Foundation', type: 'business', location: 'Thimphu TechPark', date: '2026-05-10', endDate: '2026-05-12', time: '6:00 PM', isFree: false, price: 'Nu. 500' },
  { id: 'evt-4', title: 'Bhutan International Trade Fair', description: 'Annual trade fair showcasing Bhutanese products and connecting businesses with international buyers.', organizer: 'Ministry of Economic Affairs', type: 'trade_fair', location: 'Changlingmithang, Thimphu', date: '2026-06-01', endDate: '2026-06-07', time: '10:00 AM', isFree: true },
  { id: 'evt-5', title: 'Digital Bhutan Conference', description: 'Conference on digital transformation, AI, and technology adoption in Bhutan.', organizer: 'GovTech Agency', type: 'seminar', location: 'Royal Textile Academy, Thimphu', date: '2026-04-25', time: '9:30 AM', isFree: false, price: 'Nu. 1,500' },
];

export const sampleDeals: Deal[] = [
  { id: 'deal-1', businessId: 'biz-1', businessName: 'Taj Tashi, Thimphu', title: 'Spring Special - 30% Off Rooms', description: 'Book your spring getaway at Taj Tashi and enjoy 30% off on all room categories. Includes complimentary breakfast.', discountPercent: 30, startDate: '2026-03-01', endDate: '2026-04-30', category: 'Hotels', isActive: true },
  { id: 'deal-2', businessId: 'biz-15', businessName: 'Ambient Cafe', title: 'Buy 2 Get 1 Free on Coffee', description: 'Enjoy our signature coffee blend. Buy any 2 coffees and get the 3rd one free!', startDate: '2026-02-01', endDate: '2026-02-28', category: 'Food & Beverage', isActive: true },
  { id: 'deal-3', businessId: 'biz-14', businessName: 'Bhutan Tourism Corp.', title: 'Early Bird 2026 - 15% Off Tours', description: 'Book your 2026 Bhutan tour now and save 15% on all cultural and trekking packages.', discountPercent: 15, startDate: '2026-01-01', endDate: '2026-03-31', category: 'Travel', isActive: true },
  { id: 'deal-4', businessId: 'biz-22', businessName: 'Naksel Boutique Hotel & Spa', title: 'Spa & Stay Package', description: 'Enjoy a 2-night stay with daily spa treatments at a special bundled price. Perfect for couples.', originalPrice: 'Nu. 25,000', dealPrice: 'Nu. 18,000', startDate: '2026-02-01', endDate: '2026-05-31', category: 'Hotels', isActive: true },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-free', name: 'Free', price: 0, currency: 'Nu.', period: 'monthly',
    description: 'Get listed and discovered by customers across Bhutan.',
    features: ['Basic business listing', 'Contact information', 'Category listing', 'Up to 3 photos', 'Customer reviews', 'Basic analytics'],
    highlighted: false, cta: 'Get Started Free',
  },
  {
    id: 'plan-premium', name: 'Premium', price: 1500, currency: 'Nu.', period: 'monthly',
    description: 'Stand out with enhanced features and priority visibility.',
    features: ['Everything in Free', 'Verified badge', 'Priority in search results', 'Up to 20 photos & 5 videos', 'Detailed analytics dashboard', 'Customer messaging', 'Deals & promotions', 'Job posting (2/month)', 'Remove competitor ads', 'SEO-optimized profile'],
    highlighted: true, cta: 'Go Premium',
  },
  {
    id: 'plan-gold', name: 'Gold', price: 5000, currency: 'Nu.', period: 'monthly',
    description: 'Maximum visibility and full business intelligence tools.',
    features: ['Everything in Premium', 'Gold verification badge', 'Featured listing homepage', 'Unlimited photos & videos', 'Advanced analytics & reports', 'Competitor benchmarking', 'Lead tracking & CRM', 'Unlimited job postings', 'Dedicated account manager', 'API access', 'Custom branded profile', 'Priority support 24/7'],
    highlighted: false, cta: 'Go Gold',
  },
  {
    id: 'plan-enterprise', name: 'Enterprise', price: 0, currency: 'Nu.', period: 'monthly',
    description: 'Custom solutions for large businesses, chains, and government.',
    features: ['Everything in Gold', 'Multiple branch management', 'White-label solutions', 'Government dashboard access', 'Custom API integrations', 'Data export & reporting', 'Investor-grade analytics', 'SLA guaranteed uptime', 'Dedicated support team', 'Custom development'],
    highlighted: false, cta: 'Contact Sales',
  },
];

export function getContentBySlug(slug: string): ContentPage | undefined {
  return contentPages.find(c => c.slug === slug);
}

export function getContentByType(type: ContentPage['type']): ContentPage[] {
  return contentPages.filter(c => c.type === type);
}

export function getReviewsByBusiness(businessId: string): Review[] {
  return sampleReviews.filter(r => r.businessId === businessId);
}

export function getJobsByBusiness(businessId: string): Job[] {
  return sampleJobs.filter(j => j.businessId === businessId);
}

export function getActiveJobs(): Job[] {
  return sampleJobs.filter(j => j.isActive);
}

export function getActiveDeals(): Deal[] {
  return sampleDeals.filter(d => d.isActive);
}

export function getActiveEvents(): Event[] {
  return sampleEvents;
}
