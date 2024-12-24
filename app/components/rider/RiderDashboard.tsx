interface Rider {
  id: string;
  name: string;
  status: string;
  todaysDeliveries: number;
  todaysEarnings: number;
  currentOrder: any | null;
}

interface RiderDashboardProps {
  rider: Rider;
}

export function RiderDashboard({ rider }: RiderDashboardProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {rider.name}</h1>
          <p className="text-gray-600">Have a great day delivering!</p>
        </div>
        <StatusToggle status={rider.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          title="Today's Deliveries"
          value={rider.todaysDeliveries}
          icon="🚚"
        />
        <StatCard
          title="Today's Earnings"
          value={`₹${rider.todaysEarnings}`}
          icon="💰"
        />
      </div>

      {rider.currentOrder ? (
        <CurrentDelivery order={rider.currentOrder} />
      ) : (
        <NoActiveDelivery />
      )}
    </div>
  );
}

function StatusToggle({ status }: { status: string }) {
  return (
    <button 
      className={`px-4 py-2 rounded-full flex items-center ${
        status === 'online' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      <span className={`w-2 h-2 rounded-full mr-2 ${
        status === 'online' ? 'bg-green-500' : 'bg-gray-500'
      }`} />
      {status === 'online' ? 'Online' : 'Offline'}
    </button>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
}

function NoActiveDelivery() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="text-4xl mb-4">🛵</div>
      <h2 className="text-xl font-semibold mb-2">No Active Delivery</h2>
      <p className="text-gray-600">
        New delivery requests will appear here when available
      </p>
    </div>
  );
}

function CurrentDelivery({ order }: { order: any }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Current Delivery</h2>
      {/* Add order details here */}
    </div>
  );
}