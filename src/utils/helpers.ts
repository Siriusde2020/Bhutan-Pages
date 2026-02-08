export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toLocaleString();
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getTimeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export function isOpenNow(openingHours: Record<string, { isOpen: boolean; open?: string; close?: string }>): boolean {
  const now = new Date();
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = days[now.getDay()];
  const hours = openingHours[today];

  if (!hours || !hours.isOpen || !hours.open || !hours.close) return false;

  const currentTime = now.getHours() * 100 + now.getMinutes();
  const openTime = parseInt(hours.open.replace(':', ''));
  const closeTime = parseInt(hours.close.replace(':', ''));

  return currentTime >= openTime && currentTime <= closeTime;
}

export function getTrustScoreLabel(score: number): { label: string; color: string } {
  if (score >= 80) return { label: 'Excellent', color: 'text-green-600' };
  if (score >= 60) return { label: 'Good', color: 'text-blue-600' };
  if (score >= 40) return { label: 'Average', color: 'text-yellow-600' };
  return { label: 'Needs Improvement', color: 'text-red-600' };
}

export function getVerificationLabel(status: string): { label: string; color: string; bg: string } {
  switch (status) {
    case 'government': return { label: 'Government Verified', color: 'text-purple-800', bg: 'bg-purple-100' };
    case 'trusted': return { label: 'Trusted Business', color: 'text-green-800', bg: 'bg-green-100' };
    case 'premium': return { label: 'Premium Verified', color: 'text-amber-800', bg: 'bg-amber-100' };
    case 'gold': return { label: 'Gold Member', color: 'text-yellow-800', bg: 'bg-yellow-100' };
    case 'platinum': return { label: 'Platinum Member', color: 'text-gray-800', bg: 'bg-gray-100' };
    default: return { label: 'Verified', color: 'text-blue-800', bg: 'bg-blue-100' };
  }
}

export function generateBreadcrumbs(path: string): { label: string; href: string }[] {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];

  let href = '';
  for (const part of parts) {
    href += `/${part}`;
    const label = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    breadcrumbs.push({ label, href });
  }

  return breadcrumbs;
}

export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function calculatePageRange(page: number, limit: number, total: number): { start: number; end: number } {
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);
  return { start, end };
}
