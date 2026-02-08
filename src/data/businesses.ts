// ============================================================
// BHUTAN BUSINESS DIRECTORY - SAMPLE BUSINESS DATA
// ============================================================

import type { Business } from '@/types';

const weekdayHours = {
  monday: { isOpen: true, open: '09:00', close: '17:00' },
  tuesday: { isOpen: true, open: '09:00', close: '17:00' },
  wednesday: { isOpen: true, open: '09:00', close: '17:00' },
  thursday: { isOpen: true, open: '09:00', close: '17:00' },
  friday: { isOpen: true, open: '09:00', close: '17:00' },
  saturday: { isOpen: true, open: '09:00', close: '13:00' },
  sunday: { isOpen: false },
};

const hotelHours = {
  monday: { isOpen: true, open: '00:00', close: '23:59' },
  tuesday: { isOpen: true, open: '00:00', close: '23:59' },
  wednesday: { isOpen: true, open: '00:00', close: '23:59' },
  thursday: { isOpen: true, open: '00:00', close: '23:59' },
  friday: { isOpen: true, open: '00:00', close: '23:59' },
  saturday: { isOpen: true, open: '00:00', close: '23:59' },
  sunday: { isOpen: true, open: '00:00', close: '23:59' },
};

const cafeHours = {
  monday: { isOpen: true, open: '07:30', close: '20:00' },
  tuesday: { isOpen: true, open: '07:30', close: '20:00' },
  wednesday: { isOpen: true, open: '07:30', close: '20:00' },
  thursday: { isOpen: true, open: '07:30', close: '20:00' },
  friday: { isOpen: true, open: '07:30', close: '21:00' },
  saturday: { isOpen: true, open: '08:00', close: '21:00' },
  sunday: { isOpen: true, open: '08:00', close: '18:00' },
};

const restaurantHours = {
  monday: { isOpen: true, open: '10:00', close: '21:00' },
  tuesday: { isOpen: true, open: '10:00', close: '21:00' },
  wednesday: { isOpen: true, open: '10:00', close: '21:00' },
  thursday: { isOpen: true, open: '10:00', close: '21:00' },
  friday: { isOpen: true, open: '10:00', close: '22:00' },
  saturday: { isOpen: true, open: '10:00', close: '22:00' },
  sunday: { isOpen: true, open: '10:00', close: '20:00' },
};

const bankHours = {
  monday: { isOpen: true, open: '09:00', close: '15:00' },
  tuesday: { isOpen: true, open: '09:00', close: '15:00' },
  wednesday: { isOpen: true, open: '09:00', close: '15:00' },
  thursday: { isOpen: true, open: '09:00', close: '15:00' },
  friday: { isOpen: true, open: '09:00', close: '15:00' },
  saturday: { isOpen: true, open: '09:00', close: '12:00' },
  sunday: { isOpen: false },
};

const hospitalHours = {
  monday: { isOpen: true, open: '00:00', close: '23:59' },
  tuesday: { isOpen: true, open: '00:00', close: '23:59' },
  wednesday: { isOpen: true, open: '00:00', close: '23:59' },
  thursday: { isOpen: true, open: '00:00', close: '23:59' },
  friday: { isOpen: true, open: '00:00', close: '23:59' },
  saturday: { isOpen: true, open: '00:00', close: '23:59' },
  sunday: { isOpen: true, open: '00:00', close: '23:59' },
};

const schoolHours = {
  monday: { isOpen: true, open: '08:00', close: '16:00' },
  tuesday: { isOpen: true, open: '08:00', close: '16:00' },
  wednesday: { isOpen: true, open: '08:00', close: '16:00' },
  thursday: { isOpen: true, open: '08:00', close: '16:00' },
  friday: { isOpen: true, open: '08:00', close: '16:00' },
  saturday: { isOpen: false },
  sunday: { isOpen: false },
};

export const businesses: Business[] = [
  // -------------------------------------------------------
  // biz-1: Taj Tashi
  // -------------------------------------------------------
  {
    id: 'biz-1',
    name: 'Taj Tashi',
    slug: 'taj-tashi',
    description:
      'Taj Tashi is a five-star luxury hotel located in the heart of Thimphu, blending traditional Bhutanese architecture with world-class hospitality. The hotel features spacious rooms with panoramic views of the Thimphu valley, multiple dining venues serving both local and international cuisine, and a full-service spa. It is one of the most prestigious addresses in the kingdom, welcoming dignitaries and discerning travellers from around the world.',
    shortDescription:
      'Five-star luxury hotel in Thimphu combining traditional Bhutanese architecture with world-class hospitality.',
    categoryId: 'cat-1',
    subcategoryIds: ['subcat-1-1', 'subcat-1-2'],
    serviceIds: ['svc-accommodation', 'svc-dining', 'svc-spa'],
    type: 'corporation',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 95,
    phone: '+975-2-336699',
    email: 'reservations@tajtashi.com',
    website: 'https://www.tajhotels.com/en-in/taj-tashi-thimphu',
    whatsapp: '+975-17-336699',
    socialLinks: {
      facebook: 'https://www.facebook.com/TajTashiThimphu',
      instagram: 'https://www.instagram.com/tajtashi',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Samten Lam, Chubachu, Thimphu, Bhutan',
    latitude: 27.4728,
    longitude: 89.6390,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2008,
    registrationNumber: 'TL-THI-2008-00142',
    employees: '201-500',
    ownershipType: 'joint_venture',
    isFdiRegistered: true,
    isExporter: false,
    isStartup: false,
    openingHours: hotelHours,
    acceptedPayments: ['cash', 'visa', 'mastercard', 'amex', 'bank_transfer'],
    languages: ['English', 'Dzongkha', 'Hindi'],
    servicesOffered: [
      { name: 'Luxury Accommodation', description: 'Premium rooms and suites with valley views', price: 'From Nu. 15,000/night' },
      { name: 'Fine Dining', description: 'Multi-cuisine restaurants including Chig-ja-gye and Ara', price: 'Nu. 1,500-5,000' },
      { name: 'Jiva Spa', description: 'Traditional and contemporary wellness treatments', price: 'From Nu. 3,000' },
      { name: 'Conference & Events', description: 'State-of-the-art banquet and conference facilities', price: 'On request' },
    ],
    products: [],
    pricingTier: 'luxury',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.7,
    reviewCount: 342,
    viewCount: 12450,
    contactCount: 890,
    listedDate: '2023-01-15',
    lastUpdated: '2025-04-10',
    keywords: ['luxury hotel', 'five star', 'thimphu hotel', 'taj', 'accommodation', 'spa', 'fine dining'],
    aiTags: ['luxury-hospitality', 'international-brand', 'premium-dining', 'wellness-spa', 'conference-venue'],
    isPremium: true,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-2: Uma by COMO Paro
  // -------------------------------------------------------
  {
    id: 'biz-2',
    name: 'Uma by COMO Paro',
    slug: 'uma-by-como-paro',
    description:
      'Uma by COMO Paro is an exclusive luxury resort nestled in the forested hills above the Paro valley. The resort offers twenty-nine rooms and suites with stunning views of the surrounding mountains and pine forests. With its acclaimed COMO Shambhala Retreat, world-class cuisine, and curated cultural excursions, it provides an unparalleled gateway to the kingdom of Bhutan.',
    shortDescription:
      'Exclusive luxury resort in the hills above Paro valley with acclaimed wellness retreat.',
    categoryId: 'cat-1',
    subcategoryIds: ['subcat-1-1', 'subcat-1-3'],
    serviceIds: ['svc-accommodation', 'svc-wellness', 'svc-excursions'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'premium',
    trustScore: 93,
    phone: '+975-8-271597',
    email: 'res.uma.paro@comohotels.com',
    website: 'https://www.comohotels.com/uma-paro',
    whatsapp: '+975-17-271597',
    socialLinks: {
      facebook: 'https://www.facebook.com/UMAbyCOMOParo',
      instagram: 'https://www.instagram.com/comohotels',
    },
    dzongkhag: 'Paro',
    city: 'Paro',
    address: 'PO Box 222, Paro, Bhutan',
    latitude: 27.4305,
    longitude: 89.4095,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2004,
    registrationNumber: 'TL-PAR-2004-00078',
    employees: '51-200',
    ownershipType: 'foreign',
    isFdiRegistered: true,
    isExporter: false,
    isStartup: false,
    openingHours: hotelHours,
    acceptedPayments: ['cash', 'visa', 'mastercard', 'amex', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Luxury Accommodation', description: 'Rooms and suites with mountain and valley views', price: 'From Nu. 25,000/night' },
      { name: 'COMO Shambhala Retreat', description: 'Holistic wellness treatments, yoga, and meditation', price: 'From Nu. 5,000' },
      { name: 'Bukhari Restaurant', description: 'Fine dining featuring local and international cuisine', price: 'Nu. 2,000-6,000' },
    ],
    products: [],
    pricingTier: 'luxury',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.8,
    reviewCount: 278,
    viewCount: 9870,
    contactCount: 654,
    listedDate: '2023-02-01',
    lastUpdated: '2025-04-08',
    keywords: ['luxury resort', 'paro hotel', 'como', 'wellness retreat', 'spa', 'boutique'],
    aiTags: ['luxury-resort', 'wellness-retreat', 'boutique-hospitality', 'international-brand', 'nature-escape'],
    isPremium: true,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-3: Bhutan National Bank
  // -------------------------------------------------------
  {
    id: 'biz-3',
    name: 'Bhutan National Bank',
    slug: 'bhutan-national-bank',
    description:
      'Bhutan National Bank (BNB) is one of the leading commercial banks in the Kingdom of Bhutan, offering a comprehensive range of financial services including savings accounts, fixed deposits, loans, and digital banking. Established with a mandate to promote financial inclusion across the country, BNB operates branches in all twenty dzongkhags. The bank plays a pivotal role in supporting national economic development and fostering a modern banking culture.',
    shortDescription:
      'Leading commercial bank in Bhutan offering comprehensive financial services across all dzongkhags.',
    categoryId: 'cat-9',
    subcategoryIds: ['subcat-9-1'],
    serviceIds: ['svc-banking', 'svc-loans', 'svc-digital-banking'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 98,
    phone: '+975-2-322767',
    email: 'info@bnb.bt',
    website: 'https://www.bnb.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/BhutanNationalBank',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Norzin Lam, Thimphu, Bhutan',
    latitude: 27.4712,
    longitude: 89.6339,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1997,
    registrationNumber: 'GOV-FIN-1997-00012',
    employees: '501-1000',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: bankHours,
    acceptedPayments: ['cash', 'bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Personal Banking', description: 'Savings accounts, current accounts, fixed deposits', price: 'Varies' },
      { name: 'Loan Services', description: 'Personal, home, vehicle, and agricultural loans', price: 'Interest from 8% p.a.' },
      { name: 'Digital Banking', description: 'Internet banking, mobile banking, and mBoB services', price: 'Free' },
      { name: 'Foreign Exchange', description: 'Currency exchange and international remittances', price: 'Standard rates' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.2,
    reviewCount: 189,
    viewCount: 18700,
    contactCount: 2340,
    listedDate: '2023-01-10',
    lastUpdated: '2025-03-25',
    keywords: ['bank', 'banking', 'financial services', 'loans', 'savings', 'bnb', 'digital banking'],
    aiTags: ['government-banking', 'financial-inclusion', 'digital-finance', 'nationwide-network'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-4: Druk PNB Bank
  // -------------------------------------------------------
  {
    id: 'biz-4',
    name: 'Druk PNB Bank',
    slug: 'druk-pnb-bank',
    description:
      'Druk PNB Bank is a joint venture commercial bank between the Royal Government of Bhutan and Punjab National Bank of India. The bank provides a full spectrum of modern banking solutions including retail banking, corporate finance, trade finance, and digital payment services. It has steadily expanded its presence across Bhutan with a focus on technology-driven financial inclusion.',
    shortDescription:
      'Joint venture commercial bank offering modern banking solutions across Bhutan.',
    categoryId: 'cat-9',
    subcategoryIds: ['subcat-9-1'],
    serviceIds: ['svc-banking', 'svc-corporate-finance'],
    type: 'corporation',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'trusted',
    trustScore: 90,
    phone: '+975-2-323601',
    email: 'info@drukpnb.bt',
    website: 'https://www.drukpnb.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/DrukPNBBank',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Norzin Lam, Lower Thimphu, Bhutan',
    latitude: 27.4698,
    longitude: 89.6342,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2010,
    registrationNumber: 'TL-THI-2010-00198',
    employees: '201-500',
    ownershipType: 'joint_venture',
    isFdiRegistered: true,
    isExporter: false,
    isStartup: false,
    openingHours: bankHours,
    acceptedPayments: ['cash', 'bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha', 'Hindi'],
    servicesOffered: [
      { name: 'Retail Banking', description: 'Savings, current accounts, and fixed deposit services', price: 'Varies' },
      { name: 'Corporate Finance', description: 'Business loans, working capital, and trade finance', price: 'Custom rates' },
      { name: 'Digital Payments', description: 'Internet banking, mobile banking, and e-wallet solutions', price: 'Free' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.0,
    reviewCount: 134,
    viewCount: 11200,
    contactCount: 1560,
    listedDate: '2023-01-20',
    lastUpdated: '2025-03-18',
    keywords: ['bank', 'banking', 'druk pnb', 'financial services', 'corporate finance', 'digital payments'],
    aiTags: ['joint-venture-banking', 'digital-finance', 'corporate-banking', 'trade-finance'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-5: Red Panda Brewery
  // -------------------------------------------------------
  {
    id: 'biz-5',
    name: 'Red Panda Brewery',
    slug: 'red-panda-brewery',
    description:
      'Red Panda Brewery, located in the scenic Bumthang valley, is one of Bhutan\'s most celebrated craft breweries. Known for producing high-quality weiss beer using pristine Himalayan spring water and traditional brewing techniques, Red Panda has become a favourite among locals and tourists alike. The brewery also offers guided tours where visitors can learn about the brewing process and sample fresh beers on tap.',
    shortDescription:
      'Celebrated craft brewery in Bumthang producing premium weiss beer with Himalayan spring water.',
    categoryId: 'cat-11',
    subcategoryIds: ['subcat-11-2', 'subcat-11-3'],
    serviceIds: ['svc-food-processing', 'svc-brewery-tours'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 82,
    phone: '+975-3-631388',
    email: 'info@redpandabeer.com',
    website: 'https://www.redpandabeer.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/RedPandaBrewery',
      instagram: 'https://www.instagram.com/redpandabrewery',
    },
    dzongkhag: 'Bumthang',
    city: 'Jakar',
    address: 'Chamkhar Town, Bumthang, Bhutan',
    latitude: 27.5494,
    longitude: 90.7301,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2007,
    registrationNumber: 'TL-BUM-2007-00034',
    employees: '11-50',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '09:00', close: '18:00' },
      tuesday: { isOpen: true, open: '09:00', close: '18:00' },
      wednesday: { isOpen: true, open: '09:00', close: '18:00' },
      thursday: { isOpen: true, open: '09:00', close: '18:00' },
      friday: { isOpen: true, open: '09:00', close: '18:00' },
      saturday: { isOpen: true, open: '10:00', close: '17:00' },
      sunday: { isOpen: false },
    },
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha', 'Bumthap'],
    servicesOffered: [
      { name: 'Craft Beer Production', description: 'Premium weiss beer and seasonal brews', price: 'Nu. 150-250 per bottle' },
      { name: 'Brewery Tours', description: 'Guided tours of the brewing facility with tastings', price: 'Nu. 500 per person' },
    ],
    products: [
      { name: 'Red Panda Weiss Beer', description: 'Flagship wheat beer brewed with Himalayan spring water', price: 'Nu. 200' },
      { name: 'Red Panda Lager', description: 'Smooth craft lager with clean finish', price: 'Nu. 180' },
    ],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.5,
    reviewCount: 167,
    viewCount: 8430,
    contactCount: 412,
    listedDate: '2023-03-12',
    lastUpdated: '2025-04-01',
    keywords: ['brewery', 'craft beer', 'weiss beer', 'bumthang', 'red panda', 'beer tours'],
    aiTags: ['craft-brewery', 'local-brand', 'tourism-attraction', 'food-beverage', 'bumthang-valley'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-6: Namgay Artisanal Brewery
  // -------------------------------------------------------
  {
    id: 'biz-6',
    name: 'Namgay Artisanal Brewery',
    slug: 'namgay-artisanal-brewery',
    description:
      'Namgay Artisanal Brewery is a boutique microbrewery based in Paro that specializes in small-batch craft beers inspired by Bhutanese ingredients and traditions. Using locally sourced grains and botanicals, the brewery produces unique ales and lagers that reflect the flavours of the Himalayan kingdom. Their taproom offers a warm and inviting atmosphere where visitors can enjoy freshly brewed beers alongside Bhutanese snacks.',
    shortDescription:
      'Boutique microbrewery in Paro producing small-batch craft beers with locally sourced ingredients.',
    categoryId: 'cat-11',
    subcategoryIds: ['subcat-11-2'],
    serviceIds: ['svc-food-processing', 'svc-taproom'],
    type: 'sole_proprietorship',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 78,
    phone: '+975-8-272345',
    email: 'hello@namgaybrewery.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/NamgayBrewery',
      instagram: 'https://www.instagram.com/namgaybrewery',
    },
    dzongkhag: 'Paro',
    city: 'Paro',
    address: 'Bondey, Paro, Bhutan',
    latitude: 27.3863,
    longitude: 89.4190,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2018,
    registrationNumber: 'TL-PAR-2018-00112',
    employees: '1-10',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '10:00', close: '19:00' },
      tuesday: { isOpen: true, open: '10:00', close: '19:00' },
      wednesday: { isOpen: true, open: '10:00', close: '19:00' },
      thursday: { isOpen: true, open: '10:00', close: '19:00' },
      friday: { isOpen: true, open: '10:00', close: '20:00' },
      saturday: { isOpen: true, open: '10:00', close: '20:00' },
      sunday: { isOpen: true, open: '11:00', close: '17:00' },
    },
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Craft Beer Production', description: 'Small-batch artisanal ales and lagers', price: 'Nu. 200-350 per bottle' },
      { name: 'Taproom Experience', description: 'On-site tasting with Bhutanese snack pairings', price: 'Nu. 300-600' },
    ],
    products: [
      { name: 'Paro Valley Pale Ale', description: 'Hoppy pale ale with local botanical notes', price: 'Nu. 250' },
      { name: 'Himalayan Amber Ale', description: 'Rich amber ale with caramel malt character', price: 'Nu. 280' },
    ],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.3,
    reviewCount: 89,
    viewCount: 4560,
    contactCount: 198,
    listedDate: '2023-06-20',
    lastUpdated: '2025-03-15',
    keywords: ['microbrewery', 'craft beer', 'artisanal', 'paro', 'taproom', 'local brewery'],
    aiTags: ['craft-brewery', 'microbrewery', 'artisanal', 'local-ingredients', 'taproom'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-7: Bhutan Telecom
  // -------------------------------------------------------
  {
    id: 'biz-7',
    name: 'Bhutan Telecom',
    slug: 'bhutan-telecom',
    description:
      'Bhutan Telecom is the national telecommunications provider of the Kingdom of Bhutan, offering a comprehensive portfolio of voice, data, broadband, and mobile services. As a government-owned enterprise, it plays a critical role in connecting communities across the country, including remote rural areas. The company has been instrumental in driving digital transformation through its 4G LTE network rollout and fibre-optic broadband expansion.',
    shortDescription:
      'National telecommunications provider offering voice, data, broadband, and mobile services across Bhutan.',
    categoryId: 'cat-7',
    subcategoryIds: ['subcat-7-1', 'subcat-7-2'],
    serviceIds: ['svc-telecom', 'svc-broadband', 'svc-mobile'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 96,
    phone: '+975-2-343434',
    email: 'info@bt.bt',
    website: 'https://www.bt.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/BhutanTelecom',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Drophen Lam, Thimphu, Bhutan',
    latitude: 27.4695,
    longitude: 89.6410,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2000,
    registrationNumber: 'GOV-TEL-2000-00001',
    employees: '501-1000',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['cash', 'bank_transfer', 'mBoB'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Mobile Services', description: 'Prepaid and postpaid mobile plans with 4G LTE coverage', price: 'From Nu. 99/month' },
      { name: 'Broadband Internet', description: 'Fibre-optic and ADSL broadband for homes and businesses', price: 'From Nu. 599/month' },
      { name: 'Fixed Line', description: 'Landline telephone services for residential and commercial use', price: 'From Nu. 150/month' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 3.8,
    reviewCount: 456,
    viewCount: 22300,
    contactCount: 5670,
    listedDate: '2023-01-05',
    lastUpdated: '2025-04-12',
    keywords: ['telecom', 'mobile', 'broadband', 'internet', 'bhutan telecom', '4g', 'fibre'],
    aiTags: ['government-telecom', 'national-provider', 'digital-infrastructure', 'mobile-network', 'broadband'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-8: TashiCell
  // -------------------------------------------------------
  {
    id: 'biz-8',
    name: 'TashiCell',
    slug: 'tashicell',
    description:
      'TashiCell is Bhutan\'s first private mobile operator, providing competitive mobile voice, data, and value-added services across the kingdom. As part of the Tashi Group of Companies, TashiCell has invested heavily in expanding its 4G network coverage, especially in urban centres and along major highways. The operator is known for its competitive pricing, innovative data packages, and strong customer service.',
    shortDescription:
      'Bhutan\'s first private mobile operator providing competitive voice, data, and value-added services.',
    categoryId: 'cat-7',
    subcategoryIds: ['subcat-7-1'],
    serviceIds: ['svc-telecom', 'svc-mobile'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'trusted',
    trustScore: 85,
    phone: '+975-2-350350',
    email: 'care@tashicell.com',
    website: 'https://www.tashicell.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/TashiCell',
      instagram: 'https://www.instagram.com/tashicell',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Norzin Lam, Thimphu, Bhutan',
    latitude: 27.4733,
    longitude: 89.6365,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2008,
    registrationNumber: 'TL-THI-2008-00167',
    employees: '201-500',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['cash', 'bank_transfer', 'mBoB'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Mobile Plans', description: 'Prepaid and postpaid plans with competitive data packages', price: 'From Nu. 79/month' },
      { name: 'Data Packages', description: 'Daily, weekly, and monthly data bundles', price: 'From Nu. 29' },
      { name: 'Value-Added Services', description: 'Caller tunes, SMS bundles, and entertainment packs', price: 'Varies' },
    ],
    products: [],
    pricingTier: 'budget',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 3.9,
    reviewCount: 312,
    viewCount: 15800,
    contactCount: 3210,
    listedDate: '2023-01-18',
    lastUpdated: '2025-04-05',
    keywords: ['mobile operator', 'tashicell', 'telecom', '4g', 'data plans', 'prepaid'],
    aiTags: ['private-telecom', 'mobile-operator', 'data-services', 'competitive-pricing'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-9: Yeedzin Associates
  // -------------------------------------------------------
  {
    id: 'biz-9',
    name: 'Yeedzin Associates',
    slug: 'yeedzin-associates',
    description:
      'Yeedzin Associates is a prominent law firm in Thimphu providing comprehensive legal services across corporate law, civil litigation, intellectual property, and regulatory compliance. The firm is staffed by experienced Bhutanese attorneys who are well-versed in both traditional and modern legal frameworks. Yeedzin Associates is widely recognized for its professionalism, client-centred approach, and deep knowledge of Bhutan\'s evolving legal landscape.',
    shortDescription:
      'Prominent Thimphu law firm specializing in corporate law, litigation, and regulatory compliance.',
    categoryId: 'cat-4',
    subcategoryIds: ['subcat-4-1', 'subcat-4-2'],
    serviceIds: ['svc-legal', 'svc-corporate-law', 'svc-litigation'],
    type: 'partnership',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'trusted',
    trustScore: 88,
    phone: '+975-2-334567',
    email: 'info@yeedzinlaw.bt',
    website: 'https://www.yeedzinlaw.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/YeedzinAssociates',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Phendey Lam, Upper Thimphu, Bhutan',
    latitude: 27.4760,
    longitude: 89.6380,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2005,
    registrationNumber: 'TL-THI-2005-00089',
    employees: '11-50',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['cash', 'bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Corporate Legal Services', description: 'Company formation, M&A, contract drafting and review', price: 'On consultation' },
      { name: 'Litigation & Dispute Resolution', description: 'Civil and commercial dispute resolution, arbitration', price: 'On consultation' },
      { name: 'Regulatory Compliance', description: 'Licensing, FDI registration, and regulatory advisory', price: 'On consultation' },
    ],
    products: [],
    pricingTier: 'premium',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.6,
    reviewCount: 67,
    viewCount: 5340,
    contactCount: 423,
    listedDate: '2023-04-08',
    lastUpdated: '2025-02-20',
    keywords: ['law firm', 'legal services', 'corporate law', 'litigation', 'attorney', 'lawyer', 'thimphu'],
    aiTags: ['legal-services', 'corporate-law', 'litigation', 'regulatory-advisory', 'professional-services'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-10: Lhomon Construction
  // -------------------------------------------------------
  {
    id: 'biz-10',
    name: 'Lhomon Construction',
    slug: 'lhomon-construction',
    description:
      'Lhomon Construction is a well-established construction company based in Thimphu that specializes in residential, commercial, and infrastructure projects. The company has built a reputation for quality craftsmanship, adherence to Bhutanese architectural standards, and timely project delivery. With a team of experienced engineers and skilled craftspeople, Lhomon Construction has contributed to numerous landmark developments across western Bhutan.',
    shortDescription:
      'Established Thimphu construction company specializing in residential, commercial, and infrastructure projects.',
    categoryId: 'cat-3',
    subcategoryIds: ['subcat-3-1', 'subcat-3-2'],
    serviceIds: ['svc-construction', 'svc-renovation'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 80,
    phone: '+975-2-325678',
    email: 'info@lhomonconstruction.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/LhomonConstruction',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Babesa, Thimphu, Bhutan',
    latitude: 27.4450,
    longitude: 89.6520,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2001,
    registrationNumber: 'TL-THI-2001-00056',
    employees: '51-200',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '08:00', close: '17:00' },
      tuesday: { isOpen: true, open: '08:00', close: '17:00' },
      wednesday: { isOpen: true, open: '08:00', close: '17:00' },
      thursday: { isOpen: true, open: '08:00', close: '17:00' },
      friday: { isOpen: true, open: '08:00', close: '17:00' },
      saturday: { isOpen: true, open: '08:00', close: '13:00' },
      sunday: { isOpen: false },
    },
    acceptedPayments: ['cash', 'bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Building Construction', description: 'Residential and commercial building construction', price: 'Project-based' },
      { name: 'Infrastructure Development', description: 'Roads, bridges, and public infrastructure', price: 'Project-based' },
      { name: 'Renovation & Restoration', description: 'Building renovation and traditional architecture restoration', price: 'Project-based' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.1,
    reviewCount: 45,
    viewCount: 3200,
    contactCount: 234,
    listedDate: '2023-05-15',
    lastUpdated: '2025-01-30',
    keywords: ['construction', 'building', 'contractor', 'infrastructure', 'renovation', 'thimphu'],
    aiTags: ['construction', 'building-contractor', 'infrastructure', 'bhutanese-architecture', 'renovation'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-11: Royal Textile Academy
  // -------------------------------------------------------
  {
    id: 'biz-11',
    name: 'Royal Textile Academy',
    slug: 'royal-textile-academy',
    description:
      'The Royal Textile Academy of Bhutan is a government institution dedicated to the preservation and promotion of Bhutan\'s rich textile heritage. Located in Thimphu, the academy houses a museum showcasing centuries-old textile traditions, a weaving school where students learn traditional techniques, and a retail store offering authentic handwoven textiles. It serves as a vital centre for cultural preservation and handicraft excellence.',
    shortDescription:
      'Government institution preserving Bhutan\'s textile heritage through a museum, weaving school, and retail store.',
    categoryId: 'cat-11',
    subcategoryIds: ['subcat-11-1'],
    serviceIds: ['svc-handicrafts', 'svc-textile-education', 'svc-retail'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 97,
    phone: '+975-2-321234',
    email: 'info@royaltextileacademy.bt',
    website: 'https://www.royaltextileacademy.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/RoyalTextileAcademy',
      instagram: 'https://www.instagram.com/royaltextileacademy',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Norzin Lam, Changangkha, Thimphu, Bhutan',
    latitude: 27.4680,
    longitude: 89.6370,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2001,
    registrationNumber: 'GOV-CUL-2001-00008',
    employees: '51-200',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: true,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '09:00', close: '17:00' },
      tuesday: { isOpen: true, open: '09:00', close: '17:00' },
      wednesday: { isOpen: true, open: '09:00', close: '17:00' },
      thursday: { isOpen: true, open: '09:00', close: '17:00' },
      friday: { isOpen: true, open: '09:00', close: '17:00' },
      saturday: { isOpen: true, open: '10:00', close: '16:00' },
      sunday: { isOpen: false },
    },
    acceptedPayments: ['cash', 'visa', 'mastercard', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Textile Museum', description: 'Exhibition of historical and contemporary Bhutanese textiles', price: 'Nu. 100 entry' },
      { name: 'Weaving Workshops', description: 'Traditional weaving classes for students and visitors', price: 'From Nu. 500' },
      { name: 'Handwoven Textile Sales', description: 'Authentic handwoven kiras, ghos, and textile art', price: 'Nu. 2,000-50,000' },
    ],
    products: [
      { name: 'Traditional Kira', description: 'Handwoven women\'s national dress in various patterns', price: 'From Nu. 5,000' },
      { name: 'Handwoven Scarf', description: 'Silk and cotton scarves with traditional motifs', price: 'From Nu. 2,000' },
    ],
    pricingTier: 'premium',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.7,
    reviewCount: 198,
    viewCount: 14200,
    contactCount: 780,
    listedDate: '2023-01-12',
    lastUpdated: '2025-04-02',
    keywords: ['textile', 'handicraft', 'weaving', 'kira', 'gho', 'traditional', 'museum', 'bhutanese art'],
    aiTags: ['cultural-heritage', 'handicrafts', 'textile-museum', 'traditional-weaving', 'government-institution'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-12: Bhutan Post
  // -------------------------------------------------------
  {
    id: 'biz-12',
    name: 'Bhutan Post',
    slug: 'bhutan-post',
    description:
      'Bhutan Post is the national postal service of Bhutan, providing domestic and international mail delivery, parcel services, philatelic products, and financial services including money orders. Known worldwide for its distinctive and collectible postage stamps, Bhutan Post also operates express mail services and has been modernizing its logistics capabilities to serve e-commerce growth in the country.',
    shortDescription:
      'National postal service offering mail, parcel, philatelic products, and financial services.',
    categoryId: 'cat-13',
    subcategoryIds: ['subcat-13-1'],
    serviceIds: ['svc-postal', 'svc-logistics'],
    type: 'public_utility',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 92,
    phone: '+975-2-322220',
    email: 'info@bhutanpost.bt',
    website: 'https://www.bhutanpost.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/BhutanPost',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Chang Lam, Thimphu, Bhutan',
    latitude: 27.4720,
    longitude: 89.6350,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1962,
    registrationNumber: 'GOV-UTL-1962-00003',
    employees: '201-500',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Domestic & International Mail', description: 'Letter and parcel delivery within Bhutan and worldwide', price: 'From Nu. 10' },
      { name: 'Express Mail Service', description: 'Fast-track delivery for urgent documents and parcels', price: 'From Nu. 100' },
      { name: 'Philatelic Products', description: 'Collectible Bhutanese postage stamps and first day covers', price: 'From Nu. 50' },
    ],
    products: [
      { name: 'Collectible Stamp Sets', description: 'Themed postage stamp collections featuring Bhutanese culture', price: 'From Nu. 200' },
    ],
    pricingTier: 'budget',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 3.5,
    reviewCount: 210,
    viewCount: 9800,
    contactCount: 1890,
    listedDate: '2023-01-08',
    lastUpdated: '2025-03-28',
    keywords: ['postal', 'mail', 'stamps', 'parcel', 'bhutan post', 'philately', 'logistics'],
    aiTags: ['government-utility', 'postal-service', 'philately', 'logistics', 'national-service'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-13: Druk Air
  // -------------------------------------------------------
  {
    id: 'biz-13',
    name: 'Druk Air',
    slug: 'druk-air',
    description:
      'Druk Air - Royal Bhutan Airlines is the national flag carrier of the Kingdom of Bhutan, operating flights from Paro International Airport to destinations across Asia including Bangkok, Delhi, Kathmandu, Kolkata, Singapore, and Dhaka. As the sole international airline operating into one of the world\'s most challenging airports, Druk Air provides a unique gateway to the Land of the Thunder Dragon. The airline is renowned for its scenic Himalayan flights and warm Bhutanese hospitality.',
    shortDescription:
      'National flag carrier operating scenic Himalayan flights from Paro to destinations across Asia.',
    categoryId: 'cat-13',
    subcategoryIds: ['subcat-13-2'],
    serviceIds: ['svc-airline', 'svc-cargo'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 94,
    phone: '+975-2-351401',
    email: 'reservations@drukair.com.bt',
    website: 'https://www.drukair.com.bt',
    whatsapp: '+975-17-351401',
    socialLinks: {
      facebook: 'https://www.facebook.com/DrukAir',
      instagram: 'https://www.instagram.com/drukair',
    },
    dzongkhag: 'Paro',
    city: 'Paro',
    address: 'Paro International Airport, Paro, Bhutan',
    latitude: 27.4032,
    longitude: 89.4246,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1981,
    registrationNumber: 'GOV-AVN-1981-00001',
    employees: '201-500',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '06:00', close: '20:00' },
      tuesday: { isOpen: true, open: '06:00', close: '20:00' },
      wednesday: { isOpen: true, open: '06:00', close: '20:00' },
      thursday: { isOpen: true, open: '06:00', close: '20:00' },
      friday: { isOpen: true, open: '06:00', close: '20:00' },
      saturday: { isOpen: true, open: '06:00', close: '20:00' },
      sunday: { isOpen: true, open: '06:00', close: '20:00' },
    },
    acceptedPayments: ['cash', 'visa', 'mastercard', 'bank_transfer'],
    languages: ['English', 'Dzongkha', 'Hindi', 'Thai'],
    servicesOffered: [
      { name: 'Passenger Flights', description: 'Scheduled flights to Bangkok, Delhi, Kathmandu, Singapore, and more', price: 'From Nu. 8,000 one-way' },
      { name: 'Cargo Services', description: 'Air cargo transport for commercial and personal goods', price: 'Rate per kg' },
      { name: 'Charter Services', description: 'Private charter flights for groups and special occasions', price: 'On request' },
    ],
    products: [],
    pricingTier: 'premium',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.0,
    reviewCount: 523,
    viewCount: 28900,
    contactCount: 7890,
    listedDate: '2023-01-03',
    lastUpdated: '2025-04-15',
    keywords: ['airline', 'flights', 'druk air', 'paro airport', 'national carrier', 'aviation', 'bhutan flights'],
    aiTags: ['national-airline', 'aviation', 'himalayan-flights', 'government-enterprise', 'international-connectivity'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-14: Bhutan Tourism Corporation
  // -------------------------------------------------------
  {
    id: 'biz-14',
    name: 'Bhutan Tourism Corporation',
    slug: 'bhutan-tourism-corporation',
    description:
      'Bhutan Tourism Corporation Limited (BTCL) is one of Bhutan\'s oldest and most respected tour operators, offering premium cultural, trekking, and adventure tours throughout the kingdom. With decades of experience and a team of certified guides, BTCL crafts bespoke itineraries that immerse visitors in Bhutan\'s rich cultural heritage, pristine landscapes, and vibrant festivals. The company also manages several hotels and provides comprehensive ground handling services.',
    shortDescription:
      'Premier tour operator offering bespoke cultural, trekking, and adventure experiences across Bhutan.',
    categoryId: 'cat-8',
    subcategoryIds: ['subcat-8-1', 'subcat-8-2'],
    serviceIds: ['svc-tours', 'svc-trekking', 'svc-ground-handling'],
    type: 'corporation',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'premium',
    trustScore: 91,
    phone: '+975-2-324045',
    email: 'info@btcl.com.bt',
    website: 'https://www.btcl.com.bt',
    whatsapp: '+975-17-324045',
    socialLinks: {
      facebook: 'https://www.facebook.com/BhutanTourismCorp',
      instagram: 'https://www.instagram.com/bhutantourismcorp',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Norzin Lam, Thimphu, Bhutan',
    latitude: 27.4715,
    longitude: 89.6345,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1991,
    registrationNumber: 'TL-THI-1991-00023',
    employees: '51-200',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['cash', 'visa', 'mastercard', 'bank_transfer', 'wire_transfer'],
    languages: ['English', 'Dzongkha', 'Japanese', 'German'],
    servicesOffered: [
      { name: 'Cultural Tours', description: 'Guided tours of dzongs, monasteries, and festivals', price: 'From USD 250/day' },
      { name: 'Trekking Expeditions', description: 'Multi-day treks including Jomolhari, Snowman, and Druk Path', price: 'From USD 300/day' },
      { name: 'Ground Handling', description: 'Visa processing, airport transfers, and logistics', price: 'Included in packages' },
    ],
    products: [],
    pricingTier: 'premium',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.6,
    reviewCount: 289,
    viewCount: 16500,
    contactCount: 2340,
    listedDate: '2023-02-10',
    lastUpdated: '2025-04-12',
    keywords: ['tour operator', 'tourism', 'trekking', 'cultural tours', 'bhutan tours', 'adventure', 'btcl'],
    aiTags: ['premium-tour-operator', 'cultural-tourism', 'trekking', 'ground-handling', 'established-brand'],
    isPremium: true,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-15: Ambient Cafe
  // -------------------------------------------------------
  {
    id: 'biz-15',
    name: 'Ambient Cafe',
    slug: 'ambient-cafe',
    description:
      'Ambient Cafe is a cozy and contemporary cafe nestled in the heart of Thimphu, popular among young professionals and expats alike. The cafe serves specialty coffee, artisanal teas, freshly baked pastries, and a selection of light meals inspired by both Bhutanese and international flavours. With its warm ambiance, free Wi-Fi, and relaxed setting, it has become a go-to workspace and social hub in the capital.',
    shortDescription:
      'Contemporary Thimphu cafe serving specialty coffee, artisanal teas, and freshly baked pastries.',
    categoryId: 'cat-2',
    subcategoryIds: ['subcat-2-2'],
    serviceIds: ['svc-cafe', 'svc-bakery'],
    type: 'sole_proprietorship',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 75,
    phone: '+975-2-337890',
    email: 'hello@ambientcafe.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/AmbientCafeThimphu',
      instagram: 'https://www.instagram.com/ambientcafe',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Clock Tower Square, Thimphu, Bhutan',
    latitude: 27.4738,
    longitude: 89.6358,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2016,
    registrationNumber: 'TL-THI-2016-00234',
    employees: '1-10',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: cafeHours,
    acceptedPayments: ['cash', 'bank_transfer', 'mBoB'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Specialty Coffee', description: 'Freshly brewed espresso, latte, cappuccino, and pour-over', price: 'Nu. 100-250' },
      { name: 'Light Meals & Pastries', description: 'Freshly baked goods, sandwiches, and salads', price: 'Nu. 150-400' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.4,
    reviewCount: 156,
    viewCount: 7890,
    contactCount: 345,
    listedDate: '2023-07-01',
    lastUpdated: '2025-03-20',
    keywords: ['cafe', 'coffee', 'pastries', 'thimphu cafe', 'brunch', 'workspace'],
    aiTags: ['cafe', 'specialty-coffee', 'co-working-friendly', 'youth-hub', 'casual-dining'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-16: Folk Heritage Museum Restaurant
  // -------------------------------------------------------
  {
    id: 'biz-16',
    name: 'Folk Heritage Museum Restaurant',
    slug: 'folk-heritage-museum-restaurant',
    description:
      'The Folk Heritage Museum Restaurant is located within the grounds of the Folk Heritage Museum in Thimphu, offering an authentic Bhutanese dining experience in a beautifully restored traditional farmhouse setting. The menu features classic Bhutanese dishes such as ema datshi, phaksha paa, and momos, prepared using locally sourced organic ingredients. It is a must-visit for travellers seeking genuine Bhutanese cuisine in an atmospheric and culturally rich environment.',
    shortDescription:
      'Authentic Bhutanese restaurant set in a traditional farmhouse within the Folk Heritage Museum grounds.',
    categoryId: 'cat-2',
    subcategoryIds: ['subcat-2-1'],
    serviceIds: ['svc-restaurant', 'svc-cultural-dining'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 77,
    phone: '+975-2-327890',
    email: 'restaurant@folkheritagemuseum.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/FolkHeritageMuseum',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Kawajangsa, Thimphu, Bhutan',
    latitude: 27.4690,
    longitude: 89.6410,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2003,
    registrationNumber: 'GOV-CUL-2003-00015',
    employees: '11-50',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: restaurantHours,
    acceptedPayments: ['cash', 'visa', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Traditional Bhutanese Cuisine', description: 'Ema datshi, phaksha paa, jasha maru, and other classics', price: 'Nu. 200-600' },
      { name: 'Cultural Dining Experience', description: 'Meal served in a traditional farmhouse atmosphere', price: 'Nu. 500-1,000 set menu' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.3,
    reviewCount: 234,
    viewCount: 11200,
    contactCount: 567,
    listedDate: '2023-03-05',
    lastUpdated: '2025-03-10',
    keywords: ['restaurant', 'bhutanese food', 'ema datshi', 'traditional cuisine', 'folk heritage', 'thimphu'],
    aiTags: ['traditional-cuisine', 'cultural-dining', 'authentic-bhutanese', 'tourist-attraction', 'organic-food'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-17: JDWNR Hospital
  // -------------------------------------------------------
  {
    id: 'biz-17',
    name: 'Jigme Dorji Wangchuck National Referral Hospital',
    slug: 'jdwnr-hospital',
    description:
      'Jigme Dorji Wangchuck National Referral Hospital (JDWNRH) is the largest and most comprehensive medical facility in Bhutan, located in Thimphu. As the national referral hospital, it provides a full range of medical services including emergency care, surgery, internal medicine, paediatrics, obstetrics, and specialized diagnostic services. The hospital serves as the apex healthcare institution in the country, receiving referrals from district hospitals nationwide.',
    shortDescription:
      'Bhutan\'s largest national referral hospital providing comprehensive medical and emergency services.',
    categoryId: 'cat-5',
    subcategoryIds: ['subcat-5-1'],
    serviceIds: ['svc-healthcare', 'svc-emergency', 'svc-surgery'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 95,
    phone: '+975-2-322496',
    email: 'info@jdwnrh.gov.bt',
    website: 'https://www.jdwnrh.gov.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/JDWNRH',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Gongphel Lam, Thimphu, Bhutan',
    latitude: 27.4685,
    longitude: 89.6425,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1972,
    registrationNumber: 'GOV-HLT-1972-00001',
    employees: '1001-5000',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: hospitalHours,
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Emergency Medicine', description: '24/7 emergency care and trauma services', price: 'Free for citizens' },
      { name: 'Surgical Services', description: 'General and specialized surgical procedures', price: 'Free for citizens' },
      { name: 'Diagnostic Imaging', description: 'X-ray, CT scan, MRI, and ultrasound services', price: 'Free for citizens' },
      { name: 'Outpatient Clinics', description: 'Specialist consultations across all medical departments', price: 'Free for citizens' },
    ],
    products: [],
    pricingTier: 'budget',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 3.9,
    reviewCount: 567,
    viewCount: 34500,
    contactCount: 12300,
    listedDate: '2023-01-02',
    lastUpdated: '2025-04-14',
    keywords: ['hospital', 'healthcare', 'medical', 'emergency', 'surgery', 'jdwnrh', 'national referral'],
    aiTags: ['government-healthcare', 'national-hospital', 'emergency-medicine', 'specialist-care', 'public-health'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-18: Thimphu TechPark
  // -------------------------------------------------------
  {
    id: 'biz-18',
    name: 'Thimphu TechPark',
    slug: 'thimphu-techpark',
    description:
      'Thimphu TechPark is a government-initiated information technology park designed to foster the growth of Bhutan\'s ICT sector. The facility provides modern office spaces, high-speed internet infrastructure, and business incubation support to technology startups and IT service companies. It serves as a catalyst for digital innovation in the kingdom, hosting both local and international tech firms focused on software development, BPO services, and digital solutions.',
    shortDescription:
      'Government IT park fostering Bhutan\'s tech ecosystem with office space, infrastructure, and incubation support.',
    categoryId: 'cat-7',
    subcategoryIds: ['subcat-7-3'],
    serviceIds: ['svc-it-park', 'svc-incubation', 'svc-coworking'],
    type: 'government',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 90,
    phone: '+975-2-340860',
    email: 'info@thimphutechpark.bt',
    website: 'https://www.thimphutechpark.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/ThimphuTechPark',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Changzamtog, Thimphu, Bhutan',
    latitude: 27.4580,
    longitude: 89.6490,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2012,
    registrationNumber: 'GOV-ICT-2012-00005',
    employees: '51-200',
    ownershipType: 'government',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: true,
    openingHours: weekdayHours,
    acceptedPayments: ['bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Office Space Rental', description: 'Furnished office spaces with high-speed internet for tech firms', price: 'From Nu. 5,000/month' },
      { name: 'Business Incubation', description: 'Mentorship, funding assistance, and business development support', price: 'Subsidized rates' },
      { name: 'Training & Workshops', description: 'ICT skills training and technology workshops', price: 'Varies' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.2,
    reviewCount: 78,
    viewCount: 6780,
    contactCount: 456,
    listedDate: '2023-04-15',
    lastUpdated: '2025-03-22',
    keywords: ['tech park', 'IT', 'startup', 'incubation', 'coworking', 'technology', 'digital', 'thimphu'],
    aiTags: ['tech-park', 'startup-ecosystem', 'government-initiative', 'digital-innovation', 'business-incubation'],
    isPremium: false,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-19: Mountain Hazelnut Venture
  // -------------------------------------------------------
  {
    id: 'biz-19',
    name: 'Mountain Hazelnut Venture',
    slug: 'mountain-hazelnut-venture',
    description:
      'Mountain Hazelnut Venture is a pioneering social enterprise and the largest foreign direct investment in Bhutan\'s agricultural sector. The company works with thousands of smallholder farming families across eastern Bhutan to grow and process premium hazelnuts for export. By introducing hazelnut cultivation as a sustainable cash crop, Mountain Hazelnut Venture is transforming rural livelihoods while contributing to reforestation and environmental conservation goals.',
    shortDescription:
      'Pioneering FDI social enterprise transforming rural livelihoods through hazelnut cultivation in eastern Bhutan.',
    categoryId: 'cat-10',
    subcategoryIds: ['subcat-10-1'],
    serviceIds: ['svc-agriculture', 'svc-processing', 'svc-export'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 85,
    phone: '+975-4-641234',
    email: 'info@mountainhazelnut.com',
    website: 'https://www.mountainhazelnut.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/MountainHazelnut',
      instagram: 'https://www.instagram.com/mountainhazelnut',
    },
    dzongkhag: 'Mongar',
    city: 'Mongar',
    address: 'Mongar Town, Mongar, Bhutan',
    latitude: 27.2747,
    longitude: 91.2395,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2009,
    registrationNumber: 'FDI-MON-2009-00002',
    employees: '201-500',
    ownershipType: 'foreign',
    isFdiRegistered: true,
    isExporter: true,
    isStartup: false,
    openingHours: weekdayHours,
    acceptedPayments: ['bank_transfer', 'wire_transfer'],
    languages: ['English', 'Dzongkha', 'Sharchop'],
    servicesOffered: [
      { name: 'Hazelnut Cultivation Support', description: 'Seedling supply, training, and agronomic support for farming families', price: 'Subsidized' },
      { name: 'Hazelnut Processing', description: 'Post-harvest processing, grading, and export preparation', price: 'Commercial rates' },
      { name: 'Community Development', description: 'Rural livelihood improvement and reforestation programs', price: 'Social enterprise' },
    ],
    products: [
      { name: 'Premium Bhutanese Hazelnuts', description: 'Export-grade hazelnuts grown in eastern Bhutan', price: 'Market rate' },
    ],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.4,
    reviewCount: 56,
    viewCount: 5670,
    contactCount: 234,
    listedDate: '2023-05-01',
    lastUpdated: '2025-03-05',
    keywords: ['agriculture', 'hazelnut', 'FDI', 'social enterprise', 'export', 'rural development', 'mongar'],
    aiTags: ['fdi-agriculture', 'social-enterprise', 'rural-development', 'export-oriented', 'sustainability'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-20: Bhutan Agro Industries
  // -------------------------------------------------------
  {
    id: 'biz-20',
    name: 'Bhutan Agro Industries',
    slug: 'bhutan-agro-industries',
    description:
      'Bhutan Agro Industries Limited (BAIL) is a food processing company based in Sarpang that produces a range of packaged food products including fruit juices, jams, pickles, and canned goods from locally sourced Bhutanese fruits and vegetables. The company supports local farmers by purchasing their harvest at fair prices and adds value through modern processing facilities. BAIL products are distributed across Bhutan and exported to select regional markets.',
    shortDescription:
      'Food processing company in Sarpang producing juices, jams, and packaged goods from local produce.',
    categoryId: 'cat-11',
    subcategoryIds: ['subcat-11-2'],
    serviceIds: ['svc-food-processing', 'svc-distribution'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 78,
    phone: '+975-6-252345',
    email: 'info@bhutanagro.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/BhutanAgroIndustries',
    },
    dzongkhag: 'Sarpang',
    city: 'Gelephu',
    address: 'Industrial Area, Gelephu, Sarpang, Bhutan',
    latitude: 26.8622,
    longitude: 90.4972,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1999,
    registrationNumber: 'TL-SAR-1999-00018',
    employees: '51-200',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: true,
    isStartup: false,
    openingHours: {
      monday: { isOpen: true, open: '08:00', close: '17:00' },
      tuesday: { isOpen: true, open: '08:00', close: '17:00' },
      wednesday: { isOpen: true, open: '08:00', close: '17:00' },
      thursday: { isOpen: true, open: '08:00', close: '17:00' },
      friday: { isOpen: true, open: '08:00', close: '17:00' },
      saturday: { isOpen: true, open: '08:00', close: '12:00' },
      sunday: { isOpen: false },
    },
    acceptedPayments: ['cash', 'bank_transfer', 'cheque'],
    languages: ['English', 'Dzongkha', 'Lhotshamkha'],
    servicesOffered: [
      { name: 'Fruit Juice Production', description: 'Processing and packaging of apple, orange, and mixed fruit juices', price: 'Wholesale rates' },
      { name: 'Preserved Foods', description: 'Jams, pickles, and canned vegetables from local produce', price: 'Wholesale rates' },
    ],
    products: [
      { name: 'Apple Juice', description: 'Pure apple juice from Bhutanese apples', price: 'Nu. 80 per 500ml' },
      { name: 'Mixed Fruit Jam', description: 'Artisanal jam from seasonal Bhutanese fruits', price: 'Nu. 120 per jar' },
      { name: 'Chilli Pickle', description: 'Traditional Bhutanese chilli pickle', price: 'Nu. 90 per jar' },
    ],
    pricingTier: 'budget',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.0,
    reviewCount: 67,
    viewCount: 4300,
    contactCount: 189,
    listedDate: '2023-06-10',
    lastUpdated: '2025-02-28',
    keywords: ['food processing', 'juice', 'jam', 'agro industry', 'export', 'sarpang', 'gelephu'],
    aiTags: ['food-processing', 'local-produce', 'export-oriented', 'agro-industry', 'farm-to-market'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-21: Zhiwa Ling Heritage Hotel
  // -------------------------------------------------------
  {
    id: 'biz-21',
    name: 'Zhiwa Ling Heritage Hotel',
    slug: 'zhiwa-ling-heritage-hotel',
    description:
      'Zhiwa Ling Heritage Hotel is a luxury boutique hotel in Paro that stands as a masterpiece of traditional Bhutanese architecture. Built entirely by local artisans using traditional techniques, the hotel features hand-carved woodwork, slate roofing, and intricately painted interiors. Guests can enjoy spacious rooms with mountain views, a traditional hot stone bath spa, and fine dining that blends Bhutanese and international cuisine in a setting of exceptional cultural authenticity.',
    shortDescription:
      'Luxury heritage hotel in Paro built by traditional artisans with stunning mountain views and cultural authenticity.',
    categoryId: 'cat-1',
    subcategoryIds: ['subcat-1-1', 'subcat-1-4'],
    serviceIds: ['svc-accommodation', 'svc-spa', 'svc-dining'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'premium',
    trustScore: 89,
    phone: '+975-8-271277',
    email: 'reservations@zhiwaling.com',
    website: 'https://www.zhiwaling.com',
    whatsapp: '+975-17-271277',
    socialLinks: {
      facebook: 'https://www.facebook.com/ZhiwaLingHotel',
      instagram: 'https://www.instagram.com/zhiwaling',
    },
    dzongkhag: 'Paro',
    city: 'Paro',
    address: 'Shari Village, Paro, Bhutan',
    latitude: 27.4222,
    longitude: 89.4118,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2006,
    registrationNumber: 'TL-PAR-2006-00052',
    employees: '51-200',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: hotelHours,
    acceptedPayments: ['cash', 'visa', 'mastercard', 'amex', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Heritage Accommodation', description: 'Rooms and suites with traditional Bhutanese decor and mountain views', price: 'From Nu. 12,000/night' },
      { name: 'Hot Stone Bath Spa', description: 'Traditional Bhutanese dotsho and wellness treatments', price: 'From Nu. 2,500' },
      { name: 'Fine Dining', description: 'Bhutanese and international cuisine in a heritage setting', price: 'Nu. 1,200-4,000' },
    ],
    products: [],
    pricingTier: 'luxury',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.6,
    reviewCount: 214,
    viewCount: 8900,
    contactCount: 567,
    listedDate: '2023-02-20',
    lastUpdated: '2025-04-05',
    keywords: ['heritage hotel', 'luxury hotel', 'paro', 'traditional architecture', 'boutique hotel', 'hot stone bath'],
    aiTags: ['heritage-hospitality', 'boutique-luxury', 'traditional-architecture', 'wellness-spa', 'cultural-authenticity'],
    isPremium: true,
    isFeatured: true,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-22: Naksel Boutique Hotel & Spa
  // -------------------------------------------------------
  {
    id: 'biz-22',
    name: 'Naksel Boutique Hotel & Spa',
    slug: 'naksel-boutique-hotel-and-spa',
    description:
      'Naksel Boutique Hotel & Spa is a charming retreat located on a hillside above Paro town, offering panoramic views of the Paro valley and surrounding peaks. The hotel combines contemporary comfort with traditional Bhutanese aesthetics, featuring warmly appointed rooms, a full-service spa, and a restaurant serving organic farm-to-table cuisine. Its peaceful setting and personalized service make it a favourite for discerning travellers seeking a tranquil Bhutanese experience.',
    shortDescription:
      'Charming hillside retreat in Paro offering panoramic valley views, spa services, and organic cuisine.',
    categoryId: 'cat-1',
    subcategoryIds: ['subcat-1-1', 'subcat-1-3'],
    serviceIds: ['svc-accommodation', 'svc-spa', 'svc-dining'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'trusted',
    trustScore: 86,
    phone: '+975-8-272864',
    email: 'reservations@naksel.com',
    website: 'https://www.naksel.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/NakselHotel',
      instagram: 'https://www.instagram.com/nakselhotel',
    },
    dzongkhag: 'Paro',
    city: 'Paro',
    address: 'Tshongdue, Paro, Bhutan',
    latitude: 27.4312,
    longitude: 89.4152,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2015,
    registrationNumber: 'TL-PAR-2015-00098',
    employees: '11-50',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: hotelHours,
    acceptedPayments: ['cash', 'visa', 'mastercard', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Boutique Accommodation', description: 'Warmly appointed rooms and suites with valley views', price: 'From Nu. 8,000/night' },
      { name: 'Wellness Spa', description: 'Traditional and contemporary spa treatments', price: 'From Nu. 2,000' },
      { name: 'Farm-to-Table Dining', description: 'Organic cuisine using ingredients from the hotel garden', price: 'Nu. 800-2,500' },
    ],
    products: [],
    pricingTier: 'premium',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.5,
    reviewCount: 145,
    viewCount: 6700,
    contactCount: 389,
    listedDate: '2023-03-15',
    lastUpdated: '2025-03-28',
    keywords: ['boutique hotel', 'spa', 'paro', 'organic dining', 'wellness', 'valley view', 'retreat'],
    aiTags: ['boutique-hospitality', 'wellness-spa', 'organic-dining', 'hillside-retreat', 'personalized-service'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-23: Choki Traditional Art School
  // -------------------------------------------------------
  {
    id: 'biz-23',
    name: 'Choki Traditional Art School',
    slug: 'choki-traditional-art-school',
    description:
      'Choki Traditional Art School is a private institution in Thimphu dedicated to preserving and teaching the thirteen traditional arts of Bhutan, known as Zorig Chusum. The school offers courses in painting (lhazo), woodcarving (shinzo), embroidery (tshemdzo), and other traditional crafts to both Bhutanese students and international visitors. Founded with a mission to keep ancient artistic traditions alive, the school also operates a gallery and craft shop showcasing student and master works.',
    shortDescription:
      'Private institution teaching Bhutan\'s thirteen traditional arts with gallery and craft shop.',
    categoryId: 'cat-6',
    subcategoryIds: ['subcat-6-1'],
    serviceIds: ['svc-education', 'svc-art-training'],
    type: 'ngo',
    status: 'active',
    verificationStatus: 'verified',
    trustScore: 84,
    phone: '+975-2-334567',
    email: 'info@chokiartschool.bt',
    website: 'https://www.chokiartschool.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/ChokiArtSchool',
      instagram: 'https://www.instagram.com/chokiartschool',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Kabesa, Thimphu, Bhutan',
    latitude: 27.5012,
    longitude: 89.6230,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1999,
    registrationNumber: 'NGO-THI-1999-00034',
    employees: '11-50',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: schoolHours,
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Traditional Art Courses', description: 'Multi-year programs in painting, carving, embroidery, and other Zorig Chusum disciplines', price: 'From Nu. 10,000/term' },
      { name: 'Visitor Workshops', description: 'Short workshops for tourists to experience traditional Bhutanese art', price: 'Nu. 1,000-3,000' },
      { name: 'Gallery & Craft Shop', description: 'Exhibition and sale of traditional Bhutanese artwork and handicrafts', price: 'Varies' },
    ],
    products: [
      { name: 'Traditional Thangka Painting', description: 'Hand-painted Buddhist scroll paintings by school masters', price: 'From Nu. 10,000' },
      { name: 'Carved Wooden Masks', description: 'Traditional Bhutanese dance masks and decorative carvings', price: 'From Nu. 5,000' },
    ],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.7,
    reviewCount: 112,
    viewCount: 7890,
    contactCount: 345,
    listedDate: '2023-04-20',
    lastUpdated: '2025-02-15',
    keywords: ['art school', 'traditional arts', 'zorig chusum', 'painting', 'woodcarving', 'thangka', 'education'],
    aiTags: ['cultural-education', 'traditional-arts', 'zorig-chusum', 'handicraft-school', 'cultural-preservation'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-24: Jojo's Cafe
  // -------------------------------------------------------
  {
    id: 'biz-24',
    name: "Jojo's Cafe",
    slug: 'jojos-cafe',
    description:
      "Jojo's Cafe is a small, locally loved cafe tucked away on a side street in Thimphu, known for its homestyle cooking and casual atmosphere. The cafe serves a mix of Bhutanese comfort food, momos, sandwiches, and coffee in a relaxed setting popular with students and young locals. While modest in size, Jojo's has built a loyal following for its affordable prices, generous portions, and friendly service.",
    shortDescription:
      'Locally loved Thimphu cafe serving affordable homestyle Bhutanese food and coffee.',
    categoryId: 'cat-2',
    subcategoryIds: ['subcat-2-2'],
    serviceIds: ['svc-cafe'],
    type: 'sole_proprietorship',
    status: 'active',
    verificationStatus: 'unverified',
    trustScore: 65,
    phone: '+975-17-456789',
    email: 'jojoscafe.thimphu@gmail.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/JojosCafeThimphu',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Jojo Lane, near Hong Kong Market, Thimphu, Bhutan',
    latitude: 27.4745,
    longitude: 89.6355,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 2019,
    registrationNumber: 'TL-THI-2019-00312',
    employees: '1-10',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: cafeHours,
    acceptedPayments: ['cash', 'mBoB'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Homestyle Meals', description: 'Bhutanese comfort food, momos, and noodle dishes', price: 'Nu. 80-250' },
      { name: 'Coffee & Beverages', description: 'Fresh coffee, tea, and cold drinks', price: 'Nu. 50-150' },
    ],
    products: [],
    pricingTier: 'budget',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.2,
    reviewCount: 78,
    viewCount: 3400,
    contactCount: 123,
    listedDate: '2023-09-01',
    lastUpdated: '2025-01-10',
    keywords: ['cafe', 'momos', 'affordable food', 'thimphu', 'homestyle', 'student cafe'],
    aiTags: ['local-cafe', 'budget-dining', 'homestyle-food', 'casual-atmosphere', 'student-favourite'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },

  // -------------------------------------------------------
  // biz-25: Kelki Higher Secondary School
  // -------------------------------------------------------
  {
    id: 'biz-25',
    name: 'Kelki Higher Secondary School',
    slug: 'kelki-higher-secondary-school',
    description:
      'Kelki Higher Secondary School is one of the leading private schools in Bhutan, located in Thimphu. The school offers classes from primary through higher secondary level and follows the national curriculum enriched with supplementary programs in science, technology, arts, and sports. Known for its strong academic results, dedicated faculty, and well-maintained campus, Kelki has been a trusted institution for Bhutanese families seeking quality education for their children.',
    shortDescription:
      'Leading private school in Thimphu offering primary through higher secondary education with strong academic results.',
    categoryId: 'cat-6',
    subcategoryIds: ['subcat-6-2'],
    serviceIds: ['svc-education', 'svc-extracurricular'],
    type: 'private_company',
    status: 'active',
    verificationStatus: 'verified',
    verificationBadge: 'government',
    trustScore: 88,
    phone: '+975-2-322456',
    email: 'admin@kelkischool.edu.bt',
    website: 'https://www.kelkischool.edu.bt',
    socialLinks: {
      facebook: 'https://www.facebook.com/KelkiHSS',
    },
    dzongkhag: 'Thimphu',
    city: 'Thimphu',
    address: 'Changzamtog, Thimphu, Bhutan',
    latitude: 27.4590,
    longitude: 89.6480,
    logo: undefined,
    coverImage: undefined,
    photos: [],
    videos: [],
    foundedYear: 1999,
    registrationNumber: 'EDU-THI-1999-00007',
    employees: '51-200',
    ownershipType: 'local',
    isFdiRegistered: false,
    isExporter: false,
    isStartup: false,
    openingHours: schoolHours,
    acceptedPayments: ['cash', 'bank_transfer'],
    languages: ['English', 'Dzongkha'],
    servicesOffered: [
      { name: 'Primary Education', description: 'Classes PP to VI following the national curriculum', price: 'Annual tuition varies' },
      { name: 'Secondary & Higher Secondary Education', description: 'Classes VII to XII with science, commerce, and arts streams', price: 'Annual tuition varies' },
      { name: 'Extracurricular Programs', description: 'Sports, clubs, music, debate, and community service activities', price: 'Included in tuition' },
    ],
    products: [],
    pricingTier: 'moderate',
    branchLocations: [],
    documents: [],
    certificates: [],
    licenses: [],
    rating: 4.1,
    reviewCount: 123,
    viewCount: 8900,
    contactCount: 567,
    listedDate: '2023-02-05',
    lastUpdated: '2025-03-15',
    keywords: ['school', 'education', 'private school', 'higher secondary', 'thimphu', 'kelki', 'academic'],
    aiTags: ['private-education', 'k-12-school', 'academic-excellence', 'extracurricular', 'thimphu-school'],
    isPremium: false,
    isFeatured: false,
    isSponsored: false,
    adminIds: [],
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Find a business by its unique ID.
 */
export function getBusinessById(id: string): Business | undefined {
  return businesses.find((b) => b.id === id);
}

/**
 * Find a business by its URL slug.
 */
export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

/**
 * Get all businesses belonging to a specific category.
 */
export function getBusinessesByCategory(categoryId: string): Business[] {
  return businesses.filter((b) => b.categoryId === categoryId);
}

/**
 * Get all businesses located in a specific dzongkhag.
 */
export function getBusinessesByDzongkhag(dzongkhag: string): Business[] {
  return businesses.filter(
    (b) => b.dzongkhag.toLowerCase() === dzongkhag.toLowerCase()
  );
}

/**
 * Get all featured businesses.
 */
export function getFeaturedBusinesses(): Business[] {
  return businesses.filter((b) => b.isFeatured);
}

/**
 * Get all verified businesses.
 */
export function getVerifiedBusinesses(): Business[] {
  return businesses.filter((b) => b.verificationStatus === 'verified');
}

/**
 * Get top-rated businesses sorted by rating (descending), with optional limit.
 */
export function getTopRatedBusinesses(limit: number = 10): Business[] {
  return [...businesses]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, limit);
}

/**
 * Get the most recently listed businesses, with optional limit.
 */
export function getNewBusinesses(limit: number = 10): Business[] {
  return [...businesses]
    .sort(
      (a, b) =>
        new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()
    )
    .slice(0, limit);
}

/**
 * Search businesses by query string across name, description, keywords, and AI tags.
 */
export function searchBusinesses(query: string): Business[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.shortDescription.toLowerCase().includes(q) ||
      b.keywords.some((k) => k.toLowerCase().includes(q)) ||
      b.aiTags.some((t) => t.toLowerCase().includes(q)) ||
      b.city.toLowerCase().includes(q) ||
      b.dzongkhag.toLowerCase().includes(q)
  );
}

/**
 * Get related businesses based on the same category or dzongkhag, excluding the source business.
 */
export function getRelatedBusinesses(
  businessId: string,
  limit: number = 5
): Business[] {
  const business = getBusinessById(businessId);
  if (!business) return [];
  return businesses
    .filter(
      (b) =>
        b.id !== businessId &&
        (b.categoryId === business.categoryId ||
          b.dzongkhag === business.dzongkhag)
    )
    .sort((a, b) => {
      // Prioritize same category, then by rating
      const aScore =
        (a.categoryId === business.categoryId ? 10 : 0) + a.rating;
      const bScore =
        (b.categoryId === business.categoryId ? 10 : 0) + b.rating;
      return bScore - aScore;
    })
    .slice(0, limit);
}

/**
 * Get all premium businesses.
 */
export function getPremiumBusinesses(): Business[] {
  return businesses.filter((b) => b.isPremium);
}

/**
 * Get all startup businesses.
 */
export function getStartupBusinesses(): Business[] {
  return businesses.filter((b) => b.isStartup);
}

/**
 * Get all FDI-registered businesses.
 */
export function getFdiBusinesses(): Business[] {
  return businesses.filter((b) => b.isFdiRegistered);
}

/**
 * Get all exporter businesses.
 */
export function getExporterBusinesses(): Business[] {
  return businesses.filter((b) => b.isExporter);
}

/**
 * Get all government-type businesses.
 */
export function getGovernmentBusinesses(): Business[] {
  return businesses.filter(
    (b) => b.type === 'government' || b.type === 'public_utility'
  );
}
