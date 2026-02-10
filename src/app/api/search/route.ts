import { NextRequest, NextResponse } from 'next/server';
import { searchBusinesses } from '@/lib/store';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const q = searchParams.get('q') || '';
    const category = searchParams.get('category') || undefined;
    const dzongkhag = searchParams.get('dzongkhag') || undefined;
    const ratingParam = searchParams.get('rating');
    const rating = ratingParam ? parseFloat(ratingParam) : undefined;
    const verifiedParam = searchParams.get('verified');
    const verified = verifiedParam === 'true' ? true : undefined;
    const sort = searchParams.get('sort') || undefined;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const allResults = searchBusinesses(q, {
      category,
      dzongkhag,
      rating,
      verified,
      sort,
    });

    const totalResults = allResults.length;
    const totalPages = Math.ceil(totalResults / limit);
    const startIndex = (page - 1) * limit;
    const paginatedResults = allResults.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      businesses: paginatedResults,
      query: q,
      filters: { category, dzongkhag, rating, verified, sort },
      pagination: {
        page,
        limit,
        totalResults,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
