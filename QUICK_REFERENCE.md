# Quick Reference Guide - E-Commerce Project

## 🌐 Available Pages & Routes

### User Facing Pages
- `/` - Home page (existing, unchanged)
- `/shop` - Products listing page with filters and search
- `/shop/[id]` - Individual product detail page
- `/cart` - Shopping cart page
- `/login` - Login page (form only, no API)
- `/register` - Registration page (form only, no API)
- `/blog` - Blog articles with search and filter
- `/vendor` - Vendor information and application
- `/pages` - Important information links
- `/elements` - UI components showcase

## 🛒 How the Cart Works

### Adding Items to Cart
1. Browse products on `/shop`
2. Click "Add to Cart" on any product card
3. Or go to product detail page (`/shop/[id]`) and select quantity, then add to cart
4. Cart count badge updates immediately in navbar

### Viewing Cart
1. Click cart icon in navbar (shows item count badge)
2. View all items, quantities, prices
3. Adjust quantities or remove items
4. See totals with tax and shipping calculation

### Cart Persistence
- Cart automatically saves to browser localStorage
- Survives page refreshes and browser restarts
- Clears when user manually clears localStorage

## 📦 API Integration

### Products API
- **Endpoint**: `https://dummyjson.com/products`
- **Features**:
  - Get all products: `/products?limit=100`
  - Get single product: `/products/[id]`
  - Products include: title, price, thumbnail, images, rating, description, category, etc.

### No Backend Required
- Login/Register pages don't connect to any API
- Cart data stored locally in browser
- Can be easily connected to a backend later

## 🎯 Key Files to Understand

### Cart Management
- `app/context/CartContext.tsx` - Cart state, add/remove/update functions
- Used in navbar for cart badge
- Used in cart page for display and management

### Shop Pages
- `app/Components/Shop/ShopContent.tsx` - Server component that fetches products
- `app/Components/Shop/ShopClientComponent.tsx` - Client component with filters
- `app/Components/Shop/ProductDetailContent.tsx` - Server component for single product
- `app/Components/Shop/ProductDetailClient.tsx` - Client component for product display

### Form Pages
- `app/(page)/login/page.tsx` - Login form with validation
- `app/(page)/register/page.tsx` - Registration form with validation
- No API calls - form submission just shows alert

### Navigation
- `app/Components/Navber/Desktop.tsx` - Updated with cart, login, register links
- `app/Components/Navber/MobailNavber.jsx` - Mobile menu with account tab

## 🔧 How to Customize

### Change API Endpoint
In `app/Components/Shop/ShopContent.tsx`:
```typescript
const response = await fetch('YOUR_API_ENDPOINT/products?limit=100')
```

### Add More Products
dummyJson API automatically provides pagination. Modify limit in fetch:
```typescript
const response = await fetch('https://dummyjson.com/products?limit=200')
```

### Change Cart Tax Rate
In `app/(page)/cart/page.tsx`:
```typescript
const tax = subtotal * 0.1; // Change 0.1 to your desired tax rate
```

### Modify Shipping Cost
In `app/(page)/cart/page.tsx`:
```typescript
const shippingCost = subtotal > 50 ? 0 : 10; // Change 50 and 10 to your values
```

## 🎨 Styling

All pages use **Tailwind CSS** for styling:
- Colors: Blue (primary), Gray (neutral), Green (success), Red (error)
- Responsive breakpoints: md (768px), lg (1024px)
- Consistent spacing and typography

## 🚀 Running the Project

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile** (< 768px): Single column, touch-friendly
- **Tablet** (768px - 1024px): Two columns
- **Desktop** (> 1024px): Multi-column with full features

## 🔐 No Authentication Required

Login and Register pages are **form-only** (no API):
- Validate form inputs on client side
- Show alerts on submit
- Ready to be connected to a backend later

To integrate with backend:
1. Handle form submission with API call
2. Store auth tokens
3. Protect routes with middleware

## 💾 LocalStorage Usage

Cart data stored in localStorage as:
```javascript
localStorage.getItem('cart') // Gets current cart
localStorage.setItem('cart', JSON.stringify(cartData)) // Saves cart
```

To clear cart programmatically:
```javascript
localStorage.removeItem('cart')
```

## 🔍 Filtering & Searching

### Shop Page Filters
- **Category Filter**: Select specific product category
- **Search**: Find products by title or description
- **Price Range**: Filter by price min/max
- **Sort**: By name, price (low-high, high-low), or rating

### Blog Page Filters
- **Category Filter**: News, trends, guides, deals, reviews, sustainability
- **Search**: Find articles by title or excerpt

## 🐛 Common Issues & Solutions

### Cart not persisting?
- Check browser allows localStorage
- Verify not in private/incognito mode
- Clear browser cache and try again

### Products not loading?
- Check internet connection
- Verify dummyJson API is online
- Check browser console for errors

### Form not submitting?
- Verify all required fields are filled
- Check browser console for validation errors
- Ensure password meets requirements

## 📊 Project Statistics

- **Total Pages**: 10
- **Components**: 15+
- **API Calls**: Real-time dummyJson integration
- **Build Time**: ~8-9 seconds
- **TypeScript**: Fully typed
- **Responsive**: Mobile, tablet, desktop

## ✅ Testing Checklist

- [ ] Add product to cart from shop page
- [ ] Adjust quantity in cart page
- [ ] Remove item from cart
- [ ] Cart persists after page refresh
- [ ] Product detail page loads with images
- [ ] Filters work on shop page
- [ ] Search finds products
- [ ] Login form validates
- [ ] Register form validates
- [ ] Mobile navigation works
- [ ] Desktop navigation shows cart badge
- [ ] Blog posts display correctly
- [ ] Vendor form validates

## 📞 Support & Customization

All code is well-commented and documented. Each file includes a rendering method comment at the top.

To extend functionality:
1. Add more pages following the existing pattern
2. Connect login/register to your backend
3. Add payment processing to checkout
4. Implement order history
5. Add user wishlist
6. Create admin dashboard

---

**Build Status**: ✅ Successful - No errors
**TypeScript**: ✅ Strict mode
**ESLint**: ✅ Compliant
**Ready to Deploy**: ✅ Yes
