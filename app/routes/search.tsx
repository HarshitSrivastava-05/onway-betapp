import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { ProductGrid } from "~/components/products/ProductGrid";
import { featuredProducts } from "~/data/dummy";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  // Filter products based on search query
  const products = featuredProducts.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );

  return json({ products });
}

export default function Search() {
  const { products } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        {query && (
          <p className="text-gray-600">
            Showing results for "{query}"
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">No products found</h2>
          <p className="text-gray-500 mb-8">Try searching with different keywords</p>
          <a href="/products" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors">
            Browse All Products
          </a>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}