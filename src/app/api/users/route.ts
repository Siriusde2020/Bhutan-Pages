import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken, getAllUsers } from '@/lib/store';

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

    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const users = getAllUsers();

    // Strip sensitive fields
    const safeUsers = users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      role: u.role,
      avatar: u.avatar,
      isVerified: u.isVerified,
      createdAt: u.createdAt,
      lastActive: u.lastActive,
      savedBusinesses: u.savedBusinesses,
      reviewIds: u.reviewIds,
    }));

    return NextResponse.json({ users: safeUsers });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
