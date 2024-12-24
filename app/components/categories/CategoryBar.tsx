import { useTranslation } from 'react-i18next';

interface CategoryBarProps {
  categories: Array<{
    id: string;
    name: string;
    image: string;
    count: number;
  }>;
}

export function CategoryBar({ categories }: CategoryBarProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto">
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Categories */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 py-6 px-4">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex-shrink-0 group text-center w-20"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-100 ring-2 ring-white shadow-lg mx-auto transform transition-transform group-hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary-500 transition-colors">
                    {t(`categories.${category.name}`)}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {category.count} {t('common.items')}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}