import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/lib/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sku: string }> }
) {
  try {
    const { sku } = await params;
    
    if (!sku || typeof sku !== 'string') {
      return NextResponse.json(
        { error: 'Invalid SKU parameter' },
        { status: 400 }
      );
    }

    const product = productService.getById(sku);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error in product API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
