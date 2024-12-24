import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CategoryList } from "~/components/categories/CategoryList";
import { categories } from "~/data/dummy";

export async function loader() {
  return json({ categories });
}

export default function Categories() {
  const { categories } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">All Categories</h1>
      <CategoryList categories={categories} />
    </div>
  );
}