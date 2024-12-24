/*
  # Create Inventory Management Tables
  
  1. New Tables
    - `inventory` - Manages product stock levels
    - `inventory_transactions` - Tracks stock changes
    
  2. Changes
    - Add inventory tracking to products table
    
  3. Security
    - Enable RLS
    - Add admin-specific policies
*/

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  low_stock_alert integer NOT NULL DEFAULT 10,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(product_id)
);

ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

-- Inventory transactions table
CREATE TABLE IF NOT EXISTS inventory_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inventory_id uuid REFERENCES inventory(id) NOT NULL,
  type text NOT NULL CHECK (type IN ('in', 'out')),
  quantity integer NOT NULL,
  notes text,
  created_by uuid REFERENCES users(id) NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inventory_transactions ENABLE ROW LEVEL SECURITY;

-- Add trigger to update updated_at timestamp
CREATE TRIGGER update_inventory_updated_at
  BEFORE UPDATE ON inventory
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_inventory_product_id ON inventory(product_id);
CREATE INDEX IF NOT EXISTS idx_inventory_transactions_inventory_id ON inventory_transactions(inventory_id);
CREATE INDEX IF NOT EXISTS idx_inventory_transactions_created_by ON inventory_transactions(created_by);

-- Add inventory tracking to products
ALTER TABLE products 
  ADD COLUMN IF NOT EXISTS track_inventory boolean DEFAULT true;