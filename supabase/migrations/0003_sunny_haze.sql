/*
  # Admin and Rider Management Schema

  1. New Tables
    - `riders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `name` (text)
      - `phone` (text)
      - `status` (text) - online/offline/busy
      - `rating` (numeric)
      - `total_deliveries` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `rider_locations`
      - `id` (uuid, primary key) 
      - `rider_id` (uuid, references riders)
      - `latitude` (numeric)
      - `longitude` (numeric)
      - `updated_at` (timestamptz)

    - `rider_earnings`
      - `id` (uuid, primary key)
      - `rider_id` (uuid, references riders)
      - `order_id` (uuid, references orders)
      - `amount` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for riders and admins
*/

-- Riders table
CREATE TABLE IF NOT EXISTS riders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  status text NOT NULL DEFAULT 'offline',
  rating numeric DEFAULT 5.0,
  total_deliveries integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE riders ENABLE ROW LEVEL SECURITY;

-- Rider locations table for real-time tracking
CREATE TABLE IF NOT EXISTS rider_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rider_id uuid REFERENCES riders(id) NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE rider_locations ENABLE ROW LEVEL SECURITY;

-- Rider earnings table
CREATE TABLE IF NOT EXISTS rider_earnings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rider_id uuid REFERENCES riders(id) NOT NULL,
  order_id uuid REFERENCES orders(id) NOT NULL,
  amount numeric NOT NULL CHECK (amount >= 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rider_earnings ENABLE ROW LEVEL SECURITY;

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_riders_updated_at
  BEFORE UPDATE ON riders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_riders_user_id ON riders(user_id);
CREATE INDEX IF NOT EXISTS idx_riders_status ON riders(status);
CREATE INDEX IF NOT EXISTS idx_rider_locations_rider_id ON rider_locations(rider_id);
CREATE INDEX IF NOT EXISTS idx_rider_earnings_rider_id ON rider_earnings(rider_id);
CREATE INDEX IF NOT EXISTS idx_rider_earnings_order_id ON rider_earnings(order_id);

-- RLS Policies

-- Riders can read their own data
CREATE POLICY "Riders can read own data" ON riders
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Riders can update their own status
CREATE POLICY "Riders can update own status" ON riders
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Riders can insert their location
CREATE POLICY "Riders can insert own location" ON rider_locations
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM riders 
      WHERE id = rider_id 
      AND user_id = auth.uid()
    )
  );

-- Riders can read their earnings
CREATE POLICY "Riders can read own earnings" ON rider_earnings
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM riders
      WHERE id = rider_id
      AND user_id = auth.uid()
    )
  );

-- Add admin role and policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname = 'admin'
  ) THEN
    CREATE ROLE admin;
  END IF;
END
$$;

-- Admin policies
CREATE POLICY "Admins can read all riders" ON riders
  FOR SELECT
  TO admin
  USING (true);

CREATE POLICY "Admins can update riders" ON riders
  FOR UPDATE
  TO admin
  USING (true);

CREATE POLICY "Admins can read all locations" ON rider_locations
  FOR SELECT
  TO admin
  USING (true);

CREATE POLICY "Admins can read all earnings" ON rider_earnings
  FOR SELECT
  TO admin
  USING (true);

-- Add columns to orders table for rider assignment
ALTER TABLE orders ADD COLUMN IF NOT EXISTS rider_id uuid REFERENCES riders(id);
ALTER TABLE orders ADD COLUMN IF NOT EXISTS pickup_time timestamptz;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS delivery_time timestamptz;

-- Add index for rider orders
CREATE INDEX IF NOT EXISTS idx_orders_rider_id ON orders(rider_id);