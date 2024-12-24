import { useCart } from '~/lib/hooks/useCart';

export function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-48 md:h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.inStock ? (
          <span className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
            Out of Stock
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">₹{product.price.toFixed(2)}</span>
          <button
            onClick={() => {
              addItem(product);
              const toast = document.createElement('div');
              toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
              toast.textContent = 'Added to cart!';
              document.body.appendChild(toast);
              setTimeout(() => toast.remove(), 2000);
            }}
            className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors flex items-center"
            disabled={!product.inStock}
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}