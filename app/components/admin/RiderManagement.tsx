interface Rider {
  id: string;
  name: string;
  status: string;
  totalDeliveries: number;
  rating: number;
  activeOrder: string | null;
}

interface RiderManagementProps {
  riders: Rider[];
}

export function RiderManagement({ riders }: RiderManagementProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Riders</h1>
        <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
          Add New Rider
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {riders.map((rider) => (
          <RiderCard key={rider.id} rider={rider} />
        ))}
      </div>
    </div>
  );
}

function RiderCard({ rider }: { rider: Rider }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{rider.name}</h3>
        <RiderStatus status={rider.status} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Deliveries</span>
          <span className="font-medium">{rider.totalDeliveries}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Rating</span>
          <span className="font-medium">⭐ {rider.rating.toFixed(1)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Active Order</span>
          <span className="font-medium">
            {rider.activeOrder ? `#${rider.activeOrder}` : 'None'}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t flex justify-end space-x-2">
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          View Details
        </button>
        <button className="px-3 py-1 text-sm text-primary-600 hover:text-primary-900">
          Assign Order
        </button>
      </div>
    </div>
  );
}

function RiderStatus({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online':
        return 'bg-green-100 text-green-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}