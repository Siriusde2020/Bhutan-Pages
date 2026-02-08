import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BhutanBiz - Bhutan\'s #1 Business & Services Directory',
    template: '%s | BhutanBiz - Bhutan Business Directory',
  },
  description: 'The most comprehensive business and services directory in Bhutan. Find verified businesses, services, professionals, and government-registered companies across all 20 Dzongkhags. Browse hotels, restaurants, legal services, construction, IT, healthcare, and more.',
  keywords: [
    'Bhutan business directory',
    'Bhutan companies',
    'businesses in Bhutan',
    'Thimphu businesses',
    'Paro businesses',
    'Bhutan services',
    'Bhutan yellow pages',
    'Bhutan professionals',
    'invest in Bhutan',
    'Bhutan tourism',
    'Bhutan hotels',
    'Bhutan restaurants',
    'Bhutan lawyers',
    'Bhutan construction',
    'Dzongkhag business list',
    'Bhutan startups',
    'FDI Bhutan',
    'MSME Bhutan',
  ],
  authors: [{ name: 'BhutanBiz' }],
  creator: 'BhutanBiz',
  publisher: 'BhutanBiz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bhutanbiz.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'dz': '/dz',
    },
  },
  openGraph: {
    title: 'BhutanBiz - Bhutan\'s #1 Business & Services Directory',
    description: 'Discover thousands of verified businesses and services across all 20 Dzongkhags of Bhutan.',
    url: 'https://bhutanbiz.com',
    siteName: 'BhutanBiz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BhutanBiz - Bhutan\'s #1 Business & Services Directory',
    description: 'Discover thousands of verified businesses and services across Bhutan.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BhutanBiz',
  description: 'Bhutan\'s most comprehensive business and services directory',
  url: 'https://bhutanbiz.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bhutanbiz.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
