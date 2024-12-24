import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundPosition: 'center 60%'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 z-20">
        <div className="max-w-2xl">
          {/* Delivery badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500 bg-opacity-90 backdrop-blur-sm mb-6">
            <span className="text-white text-sm md:text-base font-medium">
              {t('common.deliveryTime')} 🚀
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-primary-400">{t('hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <a 
            href="/products" 
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}