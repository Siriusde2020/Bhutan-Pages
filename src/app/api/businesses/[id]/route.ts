import { NextRequest, NextResponse } from 'next/server';
import {
  getUserFromToken,
  getBusinessById,
  updateBusiness,
  trackBusinessAction,
} from '@/lib/store';

function getAuthUser(request: NextRequest) {
  const token =
    request.cookies.get('bhutanbiz_token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return null;
  return getUserFromToken(token);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const business = getBusinessById(id);

    if (!business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    trackBusinessAction(business.id, 'view');

    return NextResponse.json({ business });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const business = getBusinessById(id);

    if (!business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    if (business.ownerId !== user.id && !business.adminIds.includes(user.id) && user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Not authorized to update this business' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const updated = updateBusiness(business.id, body);

    if (!updated) {
      return NextResponse.json(
        { error: 'Failed to update business' },
        { status: 500 }
      );
    }

    return NextResponse.json({ business: updated });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
