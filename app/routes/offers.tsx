import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({
    offers: [
      {
        id: '1',
        title: 'First Order Discount',
        description: 'Get 50% off on your first order above ₹500',
        code: 'FIRST50',
        validUntil: '2024-02-29'
      },
      {
        id: '2',
        title: 'Free Delivery',
        description: 'Free delivery on orders above ₹999',
        code: 'FREEDEL',
        validUntil: '2024-02-29'
      }
    ]
  });
}

export default function Offers() {
  const { offers } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Current Offers</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <div className="flex items-center justify-between">
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <code className="text-primary-600 font-medium">{offer.code}</code>
              </div>
              <span className="text-sm text-gray-500">
                Valid till {new Date(offer.validUntil).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}