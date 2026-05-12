# Project Documentation

## 💡 Core Idea
Tooldocker is an India-focused, admin-driven ecommerce platform for industrial tools and machinery. It simplifies procurement for contractors and builders through high-quality listings and fast discovery.

## ⚙️ Logic & Architecture
- **Admin-Centric**: All product listings and inventory are managed by administrators.
- **Modern Stack**: Built with Next.js 15, Supabase (Auth, DB, Storage), and Groq (AI).
- **Responsive**: Mobile-first design tailored for users in the field.

## 🔄 User Flow

### Buyer Flow
1. **Landing**: Browse featured categories or use AI search.
2. **Discovery**: Search/Filter products in the catalog.
3. **Product View**: Review specs, pricing, and images.
4. **Conversion**: Add to cart and proceed to checkout.
5. **Order**: Complete payment (Razorpay) and track status.

### Admin Flow
1. **Dashboard**: Access via `/admin`.
2. **Management**: Add/Edit products manually or via bulk upload.
3. **AI Assistance**: Generate product details using Groq.
4. **Operations**: Manage categories and monitor orders.
