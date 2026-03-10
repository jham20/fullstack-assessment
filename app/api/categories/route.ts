import { NextResponse } from 'next/server';
import { productService } from '@/lib/products';

export async function GET() {
  try {
    const categories = productService.getCategories();
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error in categories API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
