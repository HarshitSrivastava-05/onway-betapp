import { useEffect, useState } from 'react';
import { getOrderTracking } from '@/lib/api/tracking';
import type { DeliveryTracking } from '@/types/database';

interface TrackingTimelineProps {
  orderId: string;
}

export function TrackingTimeline({ orderId }: TrackingTimelineProps) {
  const [tracking, setTracking] = useState<DeliveryTracking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTracking() {
      try {
        const data = await getOrderTracking(orderId);
        setTracking(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tracking');
      } finally {
        setLoading(false);
      }
    }

    loadTracking();
  }, [orderId]);

  if (loading) return <div>Loading tracking information...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {tracking.map((update, idx) => (
          <li key={update.id}>
            <div className="relative pb-8">
              {idx !== tracking.length - 1 && (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">{update.status}</p>
                    <p className="text-sm text-gray-500">{update.location}</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    {new Date(update.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}