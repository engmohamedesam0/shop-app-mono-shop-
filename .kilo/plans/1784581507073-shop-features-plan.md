# Implementation Plan: Shop Features Update

## Overview
Implement 4 features for the React shop app: functional category browsing, home page search, wishlist, and profile page.

---

## 1. Expand Product Data

**File:** `src/data/mockProducts.js`

- Update `categories` to: `['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty']` (replace "Home & Garden" with "Home")
- Add at least 6 products per category (30+ total)
- Assign proper `category`, `brand`, `isFeatured`, `isBestSeller`, `isNewArrival` flags
- Keep `brands` list updated if new brands are needed

---

## 2. Create Wishlist Context

**New file:** `src/context/WishlistContext.jsx`

- Create `WishlistProvider` with `wishlistItems` state
- Persist to `localStorage` under key `wishlist`
- Provide methods: `addToWishlist(product)`, `removeFromWishlist(productId)`, `isInWishlist(productId)`, `clearWishlist()`
- Export `useWishlist` hook

---

## 3. Create Wishlist Page

**New file:** `src/pages/Wishlist.jsx`
**New file:** `src/pages/Wishlist.css`

- Display grid of wishlisted products using `ProductCard`
- Show empty state when wishlist is empty with link to shop
- Use `useWishlist` to read items

---

## 4. Create Profile Page

**New file:** `src/pages/Profile.jsx`
**New file:** `src/pages/Profile.css`

- Display mock user info: profile picture, full name, email, phone, shipping address
- Stats: total orders (mock), wishlist items count
- Sections: Account Settings link, Logout button
- Logout clears cart and wishlist from localStorage and redirects to home
- Use `framer-motion` for animations consistent with existing pages

---

## 5. Update Navbar

**File:** `src/components/Navbar.jsx`
**File:** `src/components/Navbar.css`

- Wrap app with `WishlistProvider` in `App.jsx`
- Import `useWishlist` in Navbar
- Replace hardcoded `wishlistItems = 2` with actual count from context
- Make wishlist `Heart` button a `NavLink` to `/wishlist`
- Make user `User` button a `NavLink` to `/profile`
- Add search bar toggle: clicking search icon shows/hides a search input in navbar (or navigate to home with search focus)

---

## 6. Make Home Page Category Cards Functional

**File:** `src/pages/Home.jsx`
**File:** `src/pages/Home.css`

- Wrap each category card in `NavLink` to `/shop?category={encodedCategory}`
- On hover, show product count per category
- Ensure category names in links match the Shop page filter values exactly

---

## 7. Add Home Page Search

**File:** `src/pages/Home.jsx`
**File:** `src/pages/Home.css`

- Add search input in navbar or as a dedicated section on home page
- If using navbar search: clicking search icon expands a search bar; typing filters products in a "Search Results" section on home
- Alternatively, add a prominent search bar in the hero or below categories
- Filter `products` by name matching query (case-insensitive)
- Show results in a grid with `ProductCard`

---

## 8. Update Routes

**File:** `src/App.jsx`

- Import `WishlistProvider` from context
- Import `Wishlist` and `Profile` pages
- Wrap `BrowserRouter` children with `WishlistProvider` (inside `CartProvider`)
- Add routes:
  - `/wishlist` → `<Wishlist />`
  - `/profile` → `<Profile />`

---

## 9. Make ProductCard Wishlist Button Functional

**File:** `src/components/ProductCard.jsx`

- Import `useWishlist`
- Add `onClick` to heart button to toggle wishlist
- Show filled heart if product is in wishlist
- Prevent navigation when clicking heart (`e.preventDefault()`)

---

## 10. Validation Steps

1. Run `npm run dev` and verify:
   - Home page categories link to filtered shop page
   - Home page search filters products by name
   - Wishlist icon navigates to wishlist page and shows correct count
   - Profile icon navigates to profile page with all required fields
   - ProductCard heart toggles wishlist state
   - All categories have 6+ products
   - Cart and wishlist persist across page refreshes
2. Run `npm run build` to ensure no build errors

---

## Dependencies & Risks

- **No new dependencies required** — uses existing `lucide-react`, `react-router-dom`, `framer-motion`, and `localStorage`
- **Category name mismatch:** Current data uses `Home & Garden`, user wants `Home` — must update all references
- **LocalStorage quota:** 30+ products with images stored as strings is well within limits
