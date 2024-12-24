# QuickMart - Fast Local Delivery Platform

QuickMart is a modern e-commerce platform built with Remix, focusing on fast local delivery of groceries and essential items.

## 🚀 Features

- **Fast Local Delivery**: Get items delivered within minutes
- **Real-time Tracking**: Track your orders in real-time
- **Multi-language Support**: Available in English and Hindi
- **Role-based Access**: Customer, Rider, and Admin portals
- **Inventory Management**: Real-time stock tracking
- **Secure Authentication**: Powered by Supabase

## 🛠 Tech Stack

- **Frontend**: Remix, React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Internationalization**: i18next

## 📦 Project Structure

```
quickmart/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── admin/        # Admin dashboard components
│   │   ├── categories/   # Category-related components
│   │   ├── home/        # Homepage components
│   │   ├── layout/      # Layout components
│   │   ├── products/    # Product-related components
│   │   └── rider/       # Rider dashboard components
│   ├── lib/             # Utility functions and hooks
│   │   ├── api/         # API integration
│   │   ├── hooks/       # Custom React hooks
│   │   └── utils/       # Helper functions
│   ├── routes/          # Application routes
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── supabase/           # Database migrations and configuration
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quickmart.git
   cd quickmart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials.

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔑 Environment Variables

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🛣 Available Routes

- `/` - Homepage
- `/products` - Product listing
- `/categories` - Categories
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/orders` - Order history
- `/admin/*` - Admin dashboard
- `/rider/*` - Rider dashboard

## 👥 User Roles

1. **Customer**
   - Browse products
   - Place orders
   - Track deliveries

2. **Rider**
   - Accept/complete deliveries
   - Update delivery status
   - Track earnings

3. **Admin**
   - Manage inventory
   - Track orders
   - Manage riders

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop devices
- Tablets
- Mobile phones

## 🔒 Security Features

- Row Level Security (RLS) with Supabase
- Protected API routes
- Secure authentication flow
- Role-based access control

## 🌐 Internationalization

Currently supported languages:
- English (en)
- Hindi (hi)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.