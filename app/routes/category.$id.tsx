import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getProductsByCategory } from '~/models/product.server';
import { ProductGrid } from '~/components/products/ProductGrid';

export async function loader({ params }: LoaderFunctionArgs) {
  const products = await getProductsByCategory(params.id as string);
  return json({ products });
}

export default function CategoryPage() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductGrid products={products} />
    </div>
  );
}