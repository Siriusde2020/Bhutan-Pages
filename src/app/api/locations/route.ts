import { NextResponse } from 'next/server';
import { getAllDzongkhags } from '@/data/locations';

export async function GET() {
  try {
    const dzongkhags = getAllDzongkhags();

    return NextResponse.json({ dzongkhags });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
