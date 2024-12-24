import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/api/categories';

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="group relative rounded-lg overflow-hidden"
        >
          <div className="relative h-40">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}