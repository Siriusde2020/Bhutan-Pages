import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken, getAllJobs, addJob } from '@/lib/store';

function getAuthUser(request: NextRequest) {
  const token =
    request.cookies.get('bhutanbiz_token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return null;
  return getUserFromToken(token);
}

export async function GET() {
  try {
    const jobs = getAllJobs();

    return NextResponse.json({ jobs });
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

    if (!body.title || !body.businessId) {
      return NextResponse.json(
        { error: 'Title and business ID are required' },
        { status: 400 }
      );
    }

    const job = addJob(body);

    return NextResponse.json({ job }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
