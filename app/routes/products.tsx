import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProductGrid } from "~/components/products/ProductGrid";
import { featuredProducts } from "~/data/dummy";

export async function loader() {
  return json({ products: featuredProducts });
}

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">All Products</h1>
        <div className="flex items-center gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}