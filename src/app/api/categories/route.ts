import { NextResponse } from 'next/server';
import { getAllCategories } from '@/data/categories';

export async function GET() {
  try {
    const categories = getAllCategories();

    return NextResponse.json({ categories });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
