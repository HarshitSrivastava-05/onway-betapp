import { useState } from 'react';

interface InventoryItem {
  id: string;
  product: {
    id: string;
    name: string;
    image: string;
  };
  quantity: number;
  lowStockAlert: number;
}

interface InventoryManagementProps {
  inventory: InventoryItem[];
}

export function InventoryManagement({ inventory }: InventoryManagementProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, low-stock

  const filteredInventory = inventory
    .filter(item => 
      item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => 
      filter === 'all' ? true : item.quantity <= item.lowStockAlert
    );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
          Add Stock
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="border rounded-lg px-4 py-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Items</option>
          <option value="low-stock">Low Stock</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity} units
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StockStatus quantity={item.quantity} lowStockAlert={item.lowStockAlert} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-primary-600 hover:text-primary-900 mr-4">
                      Update Stock
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      View History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StockStatus({ quantity, lowStockAlert }: { quantity: number; lowStockAlert: number }) {
  if (quantity <= 0) {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
        Out of Stock
      </span>
    );
  }

  if (quantity <= lowStockAlert) {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
        Low Stock
      </span>
    );
  }

  return (
    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
      In Stock
    </span>
  );
}