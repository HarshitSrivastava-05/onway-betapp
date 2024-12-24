export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          image: string
          category_id: string
          in_stock: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          image: string
          category_id: string
          in_stock?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          image?: string
          category_id?: string
          in_stock?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          image: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          image: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          image?: string
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          status: string
          pickup_location: string
          delivery_location: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          status?: string
          pickup_location: string
          delivery_location: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: string
          pickup_location?: string
          delivery_location?: string
          created_at?: string
          updated_at?: string
        }
      }
      delivery_tracking: {
        Row: {
          id: string
          order_id: string
          status: string
          location: string
          timestamp: string
        }
        Insert: {
          id?: string
          order_id: string
          status: string
          location: string
          timestamp?: string
        }
        Update: {
          id?: string
          order_id?: string
          status?: string
          location?: string
          timestamp?: string
        }
      }
    }
  }
}