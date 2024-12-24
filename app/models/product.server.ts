import { featuredProducts } from "~/data/dummy";

export async function getFeaturedProducts() {
  // This will be replaced with Supabase calls later
  return featuredProducts;
}

export async function getProductsByCategory(categoryId: string) {
  // This will be replaced with Supabase calls later
  return featuredProducts.filter(product => product.category === categoryId);
}