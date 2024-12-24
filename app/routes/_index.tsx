import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from 'react-i18next';
import { CategoryBar } from "~/components/categories/CategoryBar";
import { HeroSection } from "~/components/home/HeroSection";
import { categories, featuredProducts } from "~/data/dummy";

export async function loader() {
  return json({
    categories,
    featuredProducts
  });
}

export default function Index() {
  const { categories, featuredProducts } = useLoaderData<typeof loader>();
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Category Bar */}
      <div className="sticky top-16 z-40 bg-white shadow-sm">
        <CategoryBar categories={categories} />
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{t('common.featuredProducts')}</h2>
          <a 
            href="/products" 
            className="text-primary-500 hover:text-primary-600 flex items-center"
          >
            {t('common.viewAll')}
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">₹{product.price}</span>
                  <button className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600">
                    {t('common.addToCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}