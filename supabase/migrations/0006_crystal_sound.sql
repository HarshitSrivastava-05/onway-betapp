/*
  # Add Inventory RLS Policies
  
  1. Security
    - Add RLS policies for inventory management
    - Restrict access to admin users
*/

-- Admins can read inventory
CREATE POLICY "Admins can read inventory" ON inventory
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Admins can update inventory
CREATE POLICY "Admins can update inventory" ON inventory
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Admins can read inventory transactions
CREATE POLICY "Admins can read inventory transactions" ON inventory_transactions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Admins can create inventory transactions
CREATE POLICY "Admins can create inventory transactions" ON inventory_transactions
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Create initial inventory records for existing products
INSERT INTO inventory (product_id, quantity)
SELECT id, 100 FROM products 
WHERE track_inventory = true
ON CONFLICT (product_id) DO NOTHING;