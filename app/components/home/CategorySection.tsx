import { CategoryList } from '~/components/categories/CategoryList';
import type { Category } from '~/models/category.server';

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <CategoryList categories={categories} />
      </div>
    </section>
  );
}