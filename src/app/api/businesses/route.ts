import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken, searchBusinesses, addBusiness } from '@/lib/store';

function getAuthUser(request: NextRequest) {
  const token =
    request.cookies.get('bhutanbiz_token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return null;
  return getUserFromToken(token);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get('q') || searchParams.get('query') || '';
    const category = searchParams.get('category') || undefined;
    const dzongkhag = searchParams.get('dzongkhag') || undefined;
    const ratingParam = searchParams.get('rating');
    const rating = ratingParam ? parseFloat(ratingParam) : undefined;
    const verifiedParam = searchParams.get('verified');
    const verified = verifiedParam === 'true' ? true : undefined;
    const sort = searchParams.get('sort') || undefined;
    const status = searchParams.get('status') || undefined;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const allResults = searchBusinesses(query, {
      category,
      dzongkhag,
      rating,
      verified,
      sort,
      status,
    });

    const totalResults = allResults.length;
    const totalPages = Math.ceil(totalResults / limit);
    const startIndex = (page - 1) * limit;
    const paginatedResults = allResults.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      businesses: paginatedResults,
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

export async function POST(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();

    if (!body.name || !body.categoryId || !body.dzongkhag) {
      return NextResponse.json(
        { error: 'Name, category, and dzongkhag are required' },
        { status: 400 }
      );
    }

    const business = addBusiness(body, user.id);

    return NextResponse.json({ business }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
