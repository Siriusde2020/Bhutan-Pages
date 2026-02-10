import { NextRequest, NextResponse } from 'next/server';
import {
  getUserFromToken,
  getAnalyticsForBusiness,
  getPlatformAnalytics,
} from '@/lib/store';

function getAuthUser(request: NextRequest) {
  const token =
    request.cookies.get('bhutanbiz_token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return null;
  return getUserFromToken(token);
}

export async function GET(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');

    if (businessId) {
      const analytics = getAnalyticsForBusiness(businessId);
      return NextResponse.json({ analytics });
    }

    if (user.role === 'admin') {
      const analytics = getPlatformAnalytics();
      return NextResponse.json({ analytics });
    }

    return NextResponse.json(
      { error: 'Business ID is required, or admin access for platform analytics' },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
