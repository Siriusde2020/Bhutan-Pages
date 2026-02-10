import Link from 'next/link';
import { Award, ArrowRight, Star, TrendingUp, Quote, MapPin, Building2, Users, Globe } from 'lucide-react';

export default function SuccessStoriesPage() {
  const featuredStory = {
    business: 'Ambient Cafe & Bistro',
    owner: 'Sonam Choden',
    location: 'Thimphu',
    category: 'Restaurant & Cafe',
    quote: 'BhutanBiz transformed our business. Within three months of getting a Premium listing, our reservations increased by 250%. The platform connected us with customers we never could have reached through word-of-mouth alone.',
    stats: [
      { label: 'Revenue Increase', value: '+250%' },
      { label: 'Monthly Inquiries', value: '400+' },
      { label: 'Google Rating', value: '4.9/5' },
      { label: 'BhutanBiz Views', value: '12K/mo' },
    ],
  };

  const stories = [
    {
      business: 'Dragon Technologies',
      owner: 'Tshering Tobgay',
      location: 'Thimphu',
      category: 'IT & Technology',
      rating: 4.8,
      growth: '+180%',
      quote: 'As a startup, visibility was our biggest challenge. BhutanBiz\'s verified listing gave us instant credibility. We secured our first three enterprise clients directly through the platform.',
      highlight: 'From 2 employees to a 15-person team in 18 months',
    },
    {
      business: 'Punakha Valley Resort',
      owner: 'Karma Wangchuk',
      location: 'Punakha',
      category: 'Hotels & Lodging',
      rating: 4.9,
      growth: '+320%',
      quote: 'International tourists find us on BhutanBiz before they even arrive in Bhutan. The detailed listing with photos, reviews, and amenities makes the booking decision easy for them.',
      highlight: 'Occupancy rate went from 45% to 89%',
    },
    {
      business: 'Bhutan Organic Farm',
      owner: 'Dechen Pem',
      location: 'Paro',
      category: 'Agriculture',
      rating: 4.7,
      growth: '+150%',
      quote: 'We used to sell only at the local farmers\' market. Through BhutanBiz, hotels and restaurants across Bhutan now order directly from us. Our organic certification badge on the platform builds trust.',
      highlight: 'Expanded distribution to 8 dzongkhags',
    },
    {
      business: 'Thimphu Auto Works',
      owner: 'Ugyen Tenzin',
      location: 'Thimphu',
      category: 'Automotive Services',
      rating: 4.6,
      growth: '+95%',
      quote: 'The review system on BhutanBiz helped us stand out. Customers choose us because they can see our 200+ positive reviews. We respond to every review, and that builds real relationships.',
      highlight: 'Over 200 verified 5-star reviews',
    },
    {
      business: 'Druk Construction',
      owner: 'Pema Dorji',
      location: 'Phuentsholing',
      category: 'Construction',
      rating: 4.5,
      growth: '+210%',
      quote: 'BhutanBiz\'s B2B visibility connected us with major development projects. We received inquiry for three government contracts through our Premium listing profile.',
      highlight: 'Secured Nu. 50M+ in project contracts',
    },
    {
      business: 'Lotus Wellness Spa',
      owner: 'Tshering Yangdon',
      location: 'Paro',
      category: 'Health & Wellness',
      rating: 4.9,
      growth: '+275%',
      quote: 'Tourism is our lifeblood. BhutanBiz helped us reach tourists planning their Bhutan trip. Our spa is now a must-visit stop for international visitors coming through Paro.',
      highlight: 'Featured in 3 international travel blogs',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <Award className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Success Stories</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Real businesses, real growth. Discover how Bhutanese businesses are thriving with BhutanBiz -- from startups to established enterprises across all 20 dzongkhags.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Featured Story */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white mb-12">
          <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">Featured Story</span>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold">{featuredStory.business}</h2>
              <div className="flex items-center gap-3 mt-2 text-orange-100 text-sm">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />{featuredStory.owner}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{featuredStory.location}</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{featuredStory.category}</span>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <Quote className="w-8 h-8 text-white/30 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90 leading-relaxed italic">{featuredStory.quote}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-shrink-0 md:w-64">
              {featuredStory.stats.map((stat) => (
                <div key={stat.label} className="bg-white/15 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-orange-100 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div key={story.business} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{story.business}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{story.location}</span>
                    <span>{story.category}</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600">{story.growth}</span>
              </div>

              <div className="flex items-start gap-2 mb-4">
                <Quote className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-600 leading-relaxed italic">{story.quote}</p>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3">
                <p className="text-sm text-orange-700 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {story.highlight}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">by {story.owner}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{story.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Write Your Success Story?</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Join thousands of Bhutanese businesses that are growing with BhutanBiz. Get started with a free listing today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/claim" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              List Your Business <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              <Globe className="w-4 h-4" /> View Premium Plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
