import { ProductGrid } from '~/components/products/ProductGrid';
import type { Product } from '~/models/product.server';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}