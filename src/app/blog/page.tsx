import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, User, Tag, TrendingUp, Calendar } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    slug: 'bhutans-digital-economy-revolution',
    title: 'Bhutan\'s Digital Economy Revolution: How Technology is Reshaping Business in the Kingdom',
    excerpt: 'From the launch of the National Digital ID to the growth of Thimphu TechPark, Bhutan is undergoing a digital transformation that is creating unprecedented opportunities for businesses and entrepreneurs.',
    author: 'Sonam Pelden',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Digital Economy',
  };

  const posts = [
    {
      slug: 'top-10-fastest-growing-industries-2026',
      title: 'Top 10 Fastest-Growing Industries in Bhutan for 2026',
      excerpt: 'Our analysis of business registration data, revenue growth, and market trends reveals the sectors poised for explosive growth this year.',
      author: 'Karma Tshering',
      date: 'January 28, 2026',
      readTime: '6 min',
      category: 'Market Insights',
    },
    {
      slug: 'how-to-get-first-100-customers',
      title: 'How to Get Your First 100 Customers in Bhutan',
      excerpt: 'Practical marketing strategies that work in the Bhutanese context -- from leveraging community networks to digital marketing tactics.',
      author: 'Dechen Wangmo',
      date: 'January 20, 2026',
      readTime: '7 min',
      category: 'Business Growth',
    },
    {
      slug: 'bhutan-ecommerce-regulations',
      title: 'Understanding Bhutan\'s New E-Commerce Regulations',
      excerpt: 'A breakdown of the recently passed e-commerce framework and what it means for online sellers, marketplaces, and digital service providers.',
      author: 'Ugyen Dorji',
      date: 'January 15, 2026',
      readTime: '5 min',
      category: 'Regulations',
    },
    {
      slug: 'ambient-cafe-success-story',
      title: 'Success Story: How Ambient Cafe Grew 250% with BhutanBiz',
      excerpt: 'Sonam Choden shares how a premium listing, customer reviews, and analytics-driven decisions transformed her small Thimphu cafe into a must-visit destination.',
      author: 'Sonam Pelden',
      date: 'January 8, 2026',
      readTime: '6 min',
      category: 'Success Stories',
    },
    {
      slug: 'business-taxes-bhutan-2026',
      title: 'The Complete Guide to Business Taxes in Bhutan (2026)',
      excerpt: 'Everything business owners need to know about BIT, CIT, sales tax, customs duties, and the latest changes from the Department of Revenue & Customs.',
      author: 'Karma Tshering',
      date: 'January 2, 2026',
      readTime: '10 min',
      category: 'Finance & Tax',
    },
    {
      slug: 'customer-reviews-marketing-tool',
      title: 'Why Customer Reviews Are Your Most Powerful Marketing Tool',
      excerpt: 'Data from 8,900+ BhutanBiz listings shows that businesses with 10+ reviews receive 340% more inquiries. Here\'s how to earn more reviews.',
      author: 'Dechen Wangmo',
      date: 'December 22, 2025',
      readTime: '5 min',
      category: 'Marketing',
    },
    {
      slug: 'bhutan-tourism-comeback-sdf-reform',
      title: 'Bhutan\'s Tourism Comeback: Opportunities After SDF Reform',
      excerpt: 'With the adjusted Sustainable Development Fee and new tourism policies, Bhutan is seeing a surge in visitor numbers. What this means for businesses.',
      author: 'Ugyen Dorji',
      date: 'December 15, 2025',
      readTime: '7 min',
      category: 'Tourism',
    },
    {
      slug: 'startup-to-scaleup-lessons',
      title: 'From Startup to Scale-Up: Lessons from Bhutan\'s Top Entrepreneurs',
      excerpt: 'We interviewed 12 of Bhutan\'s most successful entrepreneurs about the challenges they faced and the strategies that helped them scale.',
      author: 'Sonam Pelden',
      date: 'December 8, 2025',
      readTime: '9 min',
      category: 'Entrepreneurship',
    },
  ];

  const categories = [
    { name: 'Market Insights', count: 24 },
    { name: 'Business Growth', count: 18 },
    { name: 'Digital Economy', count: 15 },
    { name: 'Regulations', count: 12 },
    { name: 'Success Stories', count: 10 },
    { name: 'Finance & Tax', count: 9 },
    { name: 'Tourism', count: 8 },
    { name: 'Entrepreneurship', count: 14 },
    { name: 'Marketing', count: 11 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
            <BookOpen className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">BhutanBiz Blog</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, analysis, and stories from Bhutan&apos;s business ecosystem. Stay informed about market trends, regulations, and growth strategies.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="block bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white mb-12 hover:shadow-xl transition-shadow">
          <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">Featured Article</span>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">{featuredPost.title}</h2>
          <p className="mt-3 text-orange-100 leading-relaxed max-w-2xl">{featuredPost.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-orange-100">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{featuredPost.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredPost.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
          </div>
          <span className="inline-flex items-center gap-2 mt-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg">
            Read Article <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Posts */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <span className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between py-1.5 text-sm hover:text-orange-600 cursor-pointer transition-colors">
                    <span className="text-gray-600">{cat.name}</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" /> Trending
              </h3>
              <div className="space-y-3">
                {posts.slice(0, 4).map((post, i) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-start gap-3 group">
                    <span className="text-lg font-bold text-gray-300 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors leading-snug">{post.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Get weekly business insights delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
