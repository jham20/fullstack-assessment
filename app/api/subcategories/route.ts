import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/lib/products';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') || undefined;

    const subCategories = productService.getSubCategories(category);
    return NextResponse.json({ subCategories });
  } catch (error) {
    console.error('Error in subcategories API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subcategories' },
      { status: 500 }
    );
  }
}
