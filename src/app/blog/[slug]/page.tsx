import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Tag, ArrowRight, Share2, BookOpen } from 'lucide-react';

const blogPosts: Record<string, {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  'bhutans-digital-economy-revolution': {
    title: 'Bhutan\'s Digital Economy Revolution: How Technology is Reshaping Business in the Kingdom',
    author: 'Sonam Pelden',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Digital Economy',
    content: [
      'Bhutan is undergoing a profound digital transformation that is reshaping how businesses operate, how citizens access services, and how the economy connects to the global marketplace. From the launch of the National Digital ID to the rapid growth of Thimphu TechPark, the Kingdom is embracing technology while staying true to its Gross National Happiness philosophy.',
      'The Royal Government\'s Digital Drukyul initiative has laid the groundwork for a connected economy. With 85% internet penetration and rapidly expanding 4G coverage across all 20 dzongkhags, Bhutanese businesses now have the infrastructure to reach customers far beyond their physical locations. Mobile banking through mBOB and Druk PNB has transformed financial transactions, while the G2C portal has streamlined business registration from weeks to days.',
      'Thimphu TechPark, now home to over 40 technology companies and startups, has emerged as the epicenter of Bhutan\'s tech ecosystem. The park offers affordable office space, high-speed connectivity, and a collaborative environment that has attracted both domestic entrepreneurs and international companies looking to establish a presence in Bhutan.',
      'For traditional businesses, platforms like BhutanBiz are bridging the gap between offline operations and online visibility. With over 8,900 businesses now listed, consumers can discover, compare, and connect with businesses across the country. This digital presence is particularly transformative for businesses in remote dzongkhags that previously relied solely on word-of-mouth.',
      'The e-commerce landscape is also evolving rapidly. The recently passed E-Commerce Framework provides regulatory clarity for online sellers, digital payment providers, and marketplace platforms. This has encouraged entrepreneurs to launch online stores, delivery services, and digital products targeting both domestic and international markets.',
      'Looking ahead, Bhutan\'s digital economy is poised for accelerated growth. Key trends to watch include the expansion of fintech services, the growth of digital marketing and content creation, the development of AI-powered tools for agriculture and tourism, and the continued digitization of government services. For businesses that embrace these changes, the opportunities are immense.',
    ],
  },
  'top-10-fastest-growing-industries-2026': {
    title: 'Top 10 Fastest-Growing Industries in Bhutan for 2026',
    author: 'Karma Tshering',
    date: 'January 28, 2026',
    readTime: '6 min read',
    category: 'Market Insights',
    content: [
      'As Bhutan\'s economy continues to diversify beyond hydropower, several industries are experiencing remarkable growth. Our analysis of business registration data, revenue trends, and market indicators reveals the sectors that entrepreneurs and investors should be watching closely in 2026.',
      '1. Information Technology & Software Development (+35% YoY) — Led by Thimphu TechPark\'s expanding ecosystem, IT services are Bhutan\'s fastest-growing sector. Software development, IT outsourcing, and digital consulting firms are thriving as government and private sector digitization accelerates.',
      '2. Tourism & Hospitality (+28% YoY) — Following the SDF reform, tourist arrivals have surged. Premium tourism, cultural experiences, and adventure travel are driving growth across hotels, tour operators, and hospitality services.',
      '3. Renewable Energy (+25% YoY) — Beyond hydropower, solar and wind energy projects are attracting significant investment. Small-scale renewable installations for off-grid communities represent a growing market.',
      '4. E-Commerce & Digital Services (+32% YoY) — Online retail, digital payment platforms, and delivery services are expanding rapidly as consumer behavior shifts toward digital channels.',
      '5. Education & Training (+22% YoY) — Private education institutes, vocational training centers, and online learning platforms are meeting the growing demand for skilled workers across all sectors.',
      '6. Healthcare & Wellness (+20% YoY) — Private clinics, traditional medicine practices, and wellness tourism are growing as both domestic and international demand increases.',
      '7-10. Additional high-growth sectors include organic agriculture and food processing (+18%), construction and real estate (+15%), financial services (+14%), and creative industries including media and design (+12%). Each of these sectors presents unique opportunities for entrepreneurs willing to innovate and adapt.',
    ],
  },
  'how-to-get-first-100-customers': {
    title: 'How to Get Your First 100 Customers in Bhutan',
    author: 'Dechen Wangmo',
    date: 'January 20, 2026',
    readTime: '7 min read',
    category: 'Business Growth',
    content: [
      'Getting your first 100 customers is the hardest part of building a business. In Bhutan\'s close-knit market, the strategies that work are unique — combining digital presence with community trust. Here\'s a practical guide that has worked for hundreds of BhutanBiz businesses.',
      'Start with your inner circle. In Bhutan, personal relationships drive business. Tell every friend, family member, and acquaintance about your business. Ask them to spread the word. This personal endorsement carries more weight than any advertisement. Host a small launch event or tshechu-time promotion to create buzz.',
      'Get listed on BhutanBiz immediately. Over 45,000 people search for businesses on BhutanBiz every month. A complete profile with photos, accurate contact information, and a compelling description puts you in front of customers who are actively looking for what you offer. Premium listings appear at the top of search results.',
      'Leverage Facebook and WeChat. In Bhutan, Facebook is the dominant social media platform. Create a business page, join local community groups, and share engaging content about your products or services. WeChat is essential if you serve Chinese-speaking tourists or have connections to the Tibetan market.',
      'Ask for reviews early. Your first customers\' reviews on BhutanBiz create social proof that attracts more customers. Our data shows that businesses with 10+ reviews receive 340% more inquiries than those with none. Politely ask satisfied customers to leave a review — most are happy to help.',
      'Partner with complementary businesses. A new restaurant can partner with nearby hotels. A construction company can build relationships with real estate agents. These partnerships create referral networks that bring a steady stream of customers.',
      'The key is consistency. Keep your BhutanBiz profile updated, respond to every review, post regularly on social media, and maintain high service quality. In Bhutan\'s market, reputation is everything — and your first 100 customers will determine your reputation for years to come.',
    ],
  },
};

// Fallback content for posts without detailed entries
const defaultContent = [
  'This article is part of our ongoing coverage of Bhutan\'s business landscape. Our editorial team produces in-depth analysis, practical guides, and expert insights to help businesses and entrepreneurs navigate the Bhutanese market.',
  'At BhutanBiz, we believe that access to quality information is essential for business success. Our blog covers topics ranging from market trends and regulatory changes to marketing strategies and success stories from real Bhutanese businesses.',
  'Stay tuned for the full article. In the meantime, explore our other resources including Business Guides, Industry Reports, and Success Stories for comprehensive insights into doing business in Bhutan.',
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  const title = post?.title || params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const author = post?.author || 'BhutanBiz Editorial';
  const date = post?.date || 'January 2026';
  const readTime = post?.readTime || '5 min read';
  const category = post?.category || 'Business';
  const content = post?.content || defaultContent;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full mb-4">
            <Tag className="w-3 h-3" /> {category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{readTime}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Share2 className="w-4 h-4" />
                <span>Share this article</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Written by</span>
                <span className="font-semibold text-gray-700">{author}</span>
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all group">
              <span className="text-xs text-orange-600 font-medium">All Articles</span>
              <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-orange-600 transition-colors">Browse All Blog Posts</h3>
              <span className="text-sm text-orange-600 flex items-center gap-1 mt-2">
                View all <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/resources/guides" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all group">
              <span className="text-xs text-orange-600 font-medium flex items-center gap-1"><BookOpen className="w-3 h-3" /> Guides</span>
              <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-orange-600 transition-colors">Business Guides & Resources</h3>
              <span className="text-sm text-orange-600 flex items-center gap-1 mt-2">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
