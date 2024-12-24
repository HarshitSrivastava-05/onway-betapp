import { Link } from "@remix-run/react";

interface DashboardStats {
  totalOrders: number;
  activeOrders: number;
  totalRiders: number;
  onlineRiders: number;
  lowStockItems: number;
  totalProducts: number;
}

interface AdminDashboardProps {
  stats: DashboardStats;
}

export function AdminDashboard({ stats }: AdminDashboardProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Orders" 
          value={stats.totalOrders}
          icon="📦"
        />
        <StatCard 
          title="Active Orders" 
          value={stats.activeOrders}
          icon="🚚"
        />
        <StatCard 
          title="Total Riders" 
          value={stats.totalRiders}
          icon="🛵"
        />
        <StatCard 
          title="Online Riders" 
          value={stats.onlineRiders}
          icon="✅"
        />
        <StatCard 
          title="Low Stock Items" 
          value={stats.lowStockItems}
          icon="⚠️"
        />
        <StatCard 
          title="Total Products" 
          value={stats.totalProducts}
          icon="📊"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: string }) {
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

function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link 
          to="/admin/orders" 
          className="p-4 border rounded-lg hover:bg-gray-50 text-center"
        >
          Manage Orders
        </Link>
        <Link 
          to="/admin/riders" 
          className="p-4 border rounded-lg hover:bg-gray-50 text-center"
        >
          Manage Riders
        </Link>
        <Link 
          to="/admin/inventory" 
          className="p-4 border rounded-lg hover:bg-gray-50 text-center"
        >
          Manage Inventory
        </Link>
        <Link 
          to="/admin/products" 
          className="p-4 border rounded-lg hover:bg-gray-50 text-center"
        >
          Manage Products
        </Link>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        <ActivityItem 
          message="Low stock alert: Organic Bananas"
          time="2 minutes ago"
        />
        <ActivityItem 
          message="New order #1234 received"
          time="5 minutes ago"
        />
        <ActivityItem 
          message="Rider Mike assigned to order #1233"
          time="12 minutes ago"
        />
      </div>
    </div>
  );
}

function ActivityItem({ message, time }: { message: string; time: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-600">{message}</span>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}