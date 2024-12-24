interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <a
          key={category.id}
          href={`/category/${category.id}`}
          className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6">
            <h3 className="text-white text-xl font-bold text-center mb-2">{category.name}</h3>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm">
              {category.count} items
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}