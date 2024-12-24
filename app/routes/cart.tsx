import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCart } from "~/lib/hooks/useCart";

export async function loader() {
  return json({});
}

export default function Cart() {
  const { items, total, updateQuantity, removeItem } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
          <a href="/products" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
                <img 
                  src={item.product.image} 
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm">{item.product.description}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹40.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{(total + 40).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <a 
                href="/checkout"
                className="block w-full py-3 px-4 rounded-full bg-primary-500 text-white text-center font-medium hover:bg-primary-600 transition-colors"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}