import { NextResponse } from 'next/server';
import { getAllEvents } from '@/lib/store';

export async function GET() {
  try {
    const events = getAllEvents();

    return NextResponse.json({ events });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
