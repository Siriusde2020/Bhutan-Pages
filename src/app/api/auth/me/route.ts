import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken, updateUser } from '@/lib/store';

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
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = getAuthUser(request);

    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Only allow updating safe fields
    const allowedFields = ['name', 'phone', 'avatar', 'preferences'] as const;
    const updates: Record<string, unknown> = {};
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }

    const updated = updateUser(user.id, updates);

    if (!updated) {
      return NextResponse.json(
        { error: 'Failed to update user' },
        { status: 500 }
      );
    }

    return NextResponse.json({ user: updated });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
