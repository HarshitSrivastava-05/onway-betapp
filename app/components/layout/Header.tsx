import { useCart } from '~/lib/hooks/useCart';
import { SearchBar } from './SearchBar';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { items } = useCart();
  const { t } = useTranslation();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary-500 flex items-center">
            <span className="text-3xl mr-2">🚚</span>
            <span className="hidden sm:inline">OnWay</span>
          </a>
          
          {/* Search Bar - Hide on mobile */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/products" className="text-gray-600 hover:text-primary-500 transition-colors">
                {t('nav.products')}
              </a>
              <a href="/offers" className="text-gray-600 hover:text-primary-500 transition-colors">
                {t('nav.offers')}
              </a>
            </div>

            {/* Cart & Profile */}
            <div className="flex items-center space-x-4">
              <a href="/cart" className="p-2 text-gray-600 hover:text-primary-500 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                    {cartItemCount}
                  </span>
                )}
              </a>
              <a href="/login" className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-primary-500 hover:bg-primary-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{t('nav.signIn')}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}