import { useTranslation } from 'react-i18next';

export function FeaturedCategories({ categories }) {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t('home.featuredCategories')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-square transform transition-transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm">
                  {category.count} {t('common.items')}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}