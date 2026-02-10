import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken, getUserById, updateUser } from '@/lib/store';

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
    const authUser = getAuthUser(request);
    if (!authUser || authUser.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { id } = await params;
    const user = getUserById(id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = getAuthUser(request);
    if (!authUser || authUser.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();

    const allowedFields = ['name', 'phone', 'role', 'avatar', 'isVerified'] as const;
    const updates: Record<string, unknown> = {};
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    }

    // Handle status field separately (active/suspended maps to isVerified concept)
    if (body.status !== undefined) {
      updates.isVerified = body.status === 'active';
    }

    const updated = updateUser(id, updates);

    if (!updated) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user: updated });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
